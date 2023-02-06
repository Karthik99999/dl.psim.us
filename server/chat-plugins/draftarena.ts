// Draft Arena team plugin
// Based on Kris's sample team plugin

import {FS} from '../../lib';

const TEAMS_FILE = 'config/draft-arena-teams.json';
export type TeamPair = [string, string];
const SEPARATOR = 'ZOQ5CVW3AQCMS4PSHLDBPI2K54NCHXKL5JSJFAZ3KD6YTI2UK45SGWW46DJ44QPWDKDIXFM6G53A';

function loadTeams(): TeamPair[] {
	try {
		return JSON.parse(FS(TEAMS_FILE).readSync());
	} catch (e: any) {
		if (e.code !== 'ENOENT') throw e;
		return [];
	}
}

export const teamPairs = loadTeams();
function savePairs() {
	FS(TEAMS_FILE).safeWriteSync(JSON.stringify(teamPairs));
}


export const commands: Chat.ChatCommands = {
	draftarena: {
		addteampair(target) {
			this.checkCan('lock');
			const [team1, team2] = target.split(SEPARATOR).map(x => x.trim());
			if (!team1 || !team2) {
				return this.popupReply(`You must specify two teams.`);
			}
			if (Teams.import(team1) === null) {
				return this.popupReply(`Team 1 could not be parsed.`);
			}
			if (Teams.import(team2) === null) {
				return this.popupReply(`Team 2 could not be parsed.`);
			}

			teamPairs.push([team1, team2]);
			savePairs();

			this.modlog('DRAFTARENA ADDTEAMPAIR', null, `added a team pair at index ${teamPairs.length - 1}`);
			this.sendReply(`Added the pair of teams to Draft Arena.`);
			this.refreshPage('draftarena-teams');
		},
		addteampairhelp: [`/draftarena addteampair <team1> ${SEPARATOR} <team2> - Adds a pair of teams to Draft Arena. You are recommended to use this through the /draftarena teams page. Requires: global staff`],

		removeteampair(target) {
			this.checkCan('lock');
			const index = parseInt(target);
			if (isNaN(index)) return this.popupReply(`You must specify a number to remove a team pair.`);
			if (index < 0 || index >= teamPairs.length) {
				return this.popupReply(`Team pair index must be between 1 and ${teamPairs.length}.`);
			}

			teamPairs.splice(index, 1);
			savePairs();

			this.modlog('DRAFTARENA REMOVETEAMPAIR', null, `removed a team pair at index ${index}`);
			this.sendReply(`Removed the team pair at index ${index}.`);
			this.refreshPage('draftarena-teams');
		},
		removeteampairhelp: [`/draftarena removeteampair <index> - Removes a team pair from Draft Arena. You are recommended to use this through the /draftarena teams page. Requires: global staff`],

		teams: '',
		''() {
			// open the teams page
			this.parse(`/join view-draftarena-teams`);
		},
	},
};
export const pages: Chat.PageTable = {
	draftarena: {
		teams(query, user) {
			this.title = `Draft Arena Team Management`;
			if (!user.can('lock')) {
				return `<div class="pad"><h2>Access denied (you must be global staff).</h2></div>`;
			}

			let buf = `<div class="pad"><button style="float:right" class="button" name="send" value="/j view-draftarena-teams"><i class="fa fa-refresh"></i> Refresh</button><h2>Draft Arena Team Management</h2><hr />`;

			// adding teams
			buf += `<h3>Add a team pair</h3>`;
			buf += `<form data-submitsend="/draftarena addteampair {team1} ${SEPARATOR} {team2}">`;
			buf += `<h4>Enter team #1 importable</h4><textarea style="width:80%;height:75px;" name="team1" contenteditable></textarea><br />`;
			buf += `<h4>Enter team #2 importable</h4><textarea style="width:80%;height:75px;" name="team2"></textarea><br />`;
			buf += `<button class="button" style="margin: 5px" type="submit">Add new team pair</button></form>`;

			buf += `<hr />`;
			if (!teamPairs.length) {
				buf += `<h3>There are currently no team pairs.</h3>`;
			} else {
				buf += `<h3>Current team pairs</h3>`;
				buf += `<div class="ladder pad"><table><tr><th>Team 1</th><th>Team 2</th><th></th></tr>`;
				for (let i = 0; i < teamPairs.length; i++) {
					buf += `<tr>`;
					buf += `<td>${Chat.formatText(teamPairs[i][0].trim(), false, true)}</td>`;
					buf += `<td>${Chat.formatText(teamPairs[i][1].trim(), false, true)}</td>`;
					buf += `<td><button class="button" name="send" value="/draftarena removeteampair ${i}">Remove</button></td>`;
					buf += `</tr>`;
				}
				buf += `</table></div>`;
			}

			return buf;
		},
	},
};

Chat.multiLinePattern.register(`/draftarena addteampair `);
