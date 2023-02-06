import type {PRNG, PRNGSeed} from '../../../sim/prng';

import RandomTeams from '../../random-teams';
import {FS, Teams} from '../../../sim';

const TEAMS_FILE = 'config/draft-arena-teams.json';

// Generates teams for Draft Arena, a format in which teams are chosen randomly from a pool of pairs.
// Since teams are paired, if you know Player 1's team, you can determine Player 2's.
// (i.e. each team always plays against a particular team)

export class DraftArenaTeams extends RandomTeams {
	// If we've already chosen a pair, the team not used yet goes in here.
	leftoverTeam: PokemonSet[] | null;
	teamPairs: [string, string][];

	constructor(format: Format | string, prng: PRNG | PRNGSeed | null) {
		super(format, prng);
		this.leftoverTeam = null;
		try {
			this.teamPairs = JSON.parse(FS(TEAMS_FILE).readSync());
		} catch (e: any) {
			this.teamPairs = [];
		}
	}

	checkedImportTeam(team: string): PokemonSet[] {
		const importedTeam = Teams.import(team);
		if (importedTeam === null) {
			throw new Error(`Team supplied for team pairing in ${this.format.name} could not be parsed (team=${team}).`);
		}

		if (this.adjustLevel) {
			for (const set of importedTeam) {
				set.level = this.adjustLevel;
			}
		}

		return importedTeam;
	}

	randomPairedTeam(): PokemonSet[] {
		if (this.leftoverTeam) return this.leftoverTeam;

		if (!this.teamPairs.length) {
			throw new Error(`There are no teams in the Draft Arena pool. Tell your local system administrator to add teams with /draftarena teams`);
		}

		// pick a random team pair to use
		const pair = this.sample(this.teamPairs);

		// typescript should check this for us, but just in case we'll assert our assumptions here.
		if (pair.length !== 2) throw new Error(`Team pair in ${this.format.name} is not of length 2.`);

		// .random()'s upper bound is exclusive, so this will generate 1 or 0
		const thisTeamIndex = this.random(2);
		const leftoverTeamIndex = (thisTeamIndex === 1) ? 0 : 1;

		this.leftoverTeam = this.checkedImportTeam(pair[thisTeamIndex]);
		return this.checkedImportTeam(pair[leftoverTeamIndex]);
	}
}

export default DraftArenaTeams;
