// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [

	// Paldea Draft Tiers
	///////////////////////////////////////////////////////////////////

	{
		section: "Paldea Draft Tiers",
	},
	{
		name: "[Gen 9] Paldea Dex Pre-Home Draft",
	
		mod: 'gen9',
		ruleset: ['Draft', 'Min Source Gen = 9'],
		banlist: [
			'Raichu-Alola', 'Diglett-Alola', 'Dugtrio-Alola', 'Meowth-Alola', 'Persian-Alola', 'Growlithe-Hisui',
			'Arcanine-Hisui', 'Slowpoke-Galar', 'Slowbro-Galar', 'Grimer-Alola', 'Muk-Alola', 'Voltorb-Hisui',
			'Electrode-Hisui', 'Tauros-Base', 'Articuno', 'Zapdos', 'Moltres', 'Mewtwo', 'Mew', 'Typhlosion-Hisui',
			'Slowking-Galar', 'Qwilfish-Hisui', 'Sneasel-Hisui', 'Kyogre', 'Groudon', 'Rayquaza', 'Uxie', 'Mesprit',
			'Azelf', 'Dialga', 'Palkia', 'Heatran', 'Giratina', 'Cresselia', 'Arceus', 'Samurott-Hisui',
			'Lilligant-Hisui', 'Basculin-White-Striped', 'Braviary-Hisui', 'Tornadus', 'Thundurus', 'Landorus',
			'Meloetta', 'Fennekin', 'Braixen', 'Delphox', 'Vivillon-Pokeball', 'Carbink', 'Sliggoo-Hisui',
			'Goodra-Hisui', 'Avalugg-Hisui', 'Diancie', 'Hoopa', 'Volcanion', 'Decidueye-Hisui', 'Magearna',
			'Grookey', 'Thwackey', 'Rillaboom', 'Zacian', 'Zamazenta', 'Eternatus', 'Kubfu', 'Urshifu', 'Zarude',
			'Regieleki', 'Regidrago', 'Glastrier', 'Spectrier', 'Calyrex', 'Wyrdeer', 'Kleavor', 'Ursaluna',
			'Basculegion', 'Sneasler', 'Overqwil', 'Enamorus', 'Gimmighoul-Roaming',
			'Draco Plate', 'Dread Plate', 'Earth Plate', 'Fist Plate', 'Flame Plate', 'Icicle Plate', 'Insect Plate',
			'Iron Plate', 'Meadow Plate', 'Mind Plate', 'Pixie Plate', 'Sky Plate', 'Splash Plate', 'Spooky Plate',
			'Stone Plate', 'Toxic Plate', 'Zap Plate',
			'Barb Barrage', 'Cosmic Power', 'Heal Bell', 'Psyshield Bash', 'Raging Fury', 'Simple Beam',
		],
	},
	{
		name: "[Gen 9] Paldea Dex Draft",
	
		mod: 'gen9',
		ruleset: ['Draft', 'Min Source Gen = 9'],
		unbanlist: ['Greninja-Ash'],
	},
	{
		name: "[Gen 9] Paldea Dex Tera Preview",

		mod: 'gen9',
		ruleset: ['[Gen 9] Paldea Dex Draft', 'Tera Type Preview'],
	},
	{
		name: "[Gen 9] Paldea Dex Pre-Home Doubles",
	
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['[Gen 9] Paldea Dex Pre-Home Draft'],
	},
	{
		name: "[Gen 9] Paldea Dex Doubles",
	
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['[Gen 9] Paldea Dex Draft'],
	},
	{
		name: "[Gen 9] Paldea Dex Pre-Home VGC",
	
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['[Gen 9] Paldea Dex Pre-Home Draft', '!Draft', 'Draft VGC'],
	},
	{
		name: "[Gen 9] Paldea Dex VGC",
	
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['[Gen 9] Paldea Dex Draft', '!Draft', 'Draft VGC'],
	},
	{
		name: "[Gen 9] Paldea Dex VGC Tera Preview",
	
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['[Gen 9] Paldea Dex VGC', 'Tera Type Preview'],
	},
	{
		name: "[Gen 9] LC Paldea Dex Pre-Home Draft",
	
		mod: 'gen9',
		ruleset: ['[Gen 9] Paldea Dex Pre-Home Draft', 'Double Item Clause', 'Little Cup'],
	},
	{
		name: "[Gen 9] LC Paldea Dex Draft",
	
		mod: 'gen9',
		ruleset: ['[Gen 9] Paldea Dex Draft', 'Double Item Clause', 'Little Cup'],
	},

	// National Draft Tiers
	///////////////////////////////////////////////////////////////////

	{
		section: "National Dex Draft Tiers",
	},
	{
		name: "[Gen 9] National Dex Draft",

		mod: 'gen9',
		ruleset: ['Draft', '+Past', 'Allow Signature Moves', 'Z-Move Clause'],
	},
	{
		name: "[Gen 9] National Dex Legacy",

		mod: 'gen9',
		ruleset: ['Draft', '+Past', '+Legacy'],
	},
	{
		name: "[Gen 9] National Dex Unrestricted",

		mod: 'gen9',
		ruleset: ['Draft', '!Obtainable', '-Nonexistent', 'Obtainable Formes', 'Obtainable Misc', '+CAP', '+Past', '+Legacy'],
	},
	{
		name: "[Gen 9] National Dex WiFi",

		mod: 'gen9',
		ruleset: ['[Gen 9] National Dex Draft', 'Adjust Level = 50'],
	},
	{
		name: "[Gen 9] National Dex Doubles",

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['[Gen 9] National Dex Draft'],
	},
	{
		name: "[Gen 9] National Dex Doubles Unrestricted",

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['[Gen 9] National Dex Unrestricted', '!Sleep Clause Mod'],
	},
	{
		name: "[Gen 9] National Dex 4v4",

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Draft VGC', '+Past', 'Allow Signature Moves', 'Z-Move Clause'],
	},
	{
		name: "[Gen 9] LC National Dex Draft",

		mod: 'gen9',
		ruleset: ['[Gen 9] National Dex Draft', 'Double Item Clause', 'Little Cup'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 9] LC National Dex Legacy",

		mod: 'gen9',
		ruleset: ['[Gen 9] National Dex Legacy', 'Double Item Clause', 'Little Cup'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 9] National Dex CAP",

		mod: 'gen9',
		ruleset: ['[Gen 9] National Dex Draft', '+CAP'],
	},
	{
		name: "[Gen 8] National Dex Draft",

		mod: 'gen8',
		ruleset: ['Draft', '+Past', 'Z-Move Clause', 'Dynamax Clause'],
	},

	// Past Gens Draft
	///////////////////////////////////////////////////////////////////

	{
		section: "Past Gen Draft Tiers",
		column: 2,
	},
	{
		name: "[Gen 8] Draft League",

		mod: 'gen8',
		ruleset: ['Draft'],
	},
	{
		name: "[Gen 7] Draft League",

		mod: 'gen7',
		ruleset: ['Draft', '+LGPE'],
	},
	{
		name: "[Gen 6] Draft League",

		mod: 'gen6',
		ruleset: ['Draft'],
	},
	{
		name: "[Gen 5] Draft League",

		mod: 'gen5',
		ruleset: ['Draft'],
	},
	{
		name: "[Gen 4] Draft League",

		mod: 'gen4',
		ruleset: ['Draft', '!Team Preview'],
	},
	{
		name: "[Gen 3] Draft League",

		mod: 'gen3',
		ruleset: ['Draft', '!Team Preview'],
	},

	// Custom Partner Formats
	///////////////////////////////////////////////////////////////////
	{
		section: "Custom Partner Formats",
		column: 2,
	},
	{
		name: "[Gen 9] DPL S7",

		mod: 'gen9',
		ruleset: ['[Gen 9] Paldea Dex Draft', 'Tera Type Preview'],
	},
	{
		name: "[Gen 9] BBL National Dex Draft",

		mod: 'gen9',
		ruleset: ['[Gen 9] National Dex Legacy'],
		banlist: ['Necrozma-Dusk-Mane', 'Moody', 'Hidden Power'],
		// Z-Move Clause is hardcoded to allow Ultranecrozium Z
		onValidateSet(set) {
			const item = this.dex.items.get(set.item);
			if (item.zMove && item.id !== 'ultranecroziumz') {
				return [`${set.name || set.species}'s item ${item.name} is banned by Z-Move Clause.`];
			}
		},
		onBegin() {
			this.add('rule', 'Z-Move Clause: Z-Moves are banned');
		},
	},
	{
		name: "[Gen 9] National Dex Buffmons",

		mod: 'buffmons',
		ruleset: ['[Gen 9] National Dex Legacy'],
		banlist: ['Assist', 'Hidden Power', 'Pursuit', 'Tera Blast', "Zamazenta-Base + King's Shield"],
	},
	{
		name: "[Gen 9] WPF Natdex STABmons",

		mod: 'gen9',
		ruleset: ['[Gen 9] National Dex Legacy', 'STABmons Move Legality'],
		banlist: ['Silvally', 'Rotom'],
		restricted: [
			'Acupressure', 'Astral Barrage', 'Belly Drum', 'Bolt Beak', 'Chatter', 'Clangorous Soul', 'Dark Void',
			'Dire Claw', 'Double Iron Bash', 'Dragon Ascent', 'Electrify', 'Extreme Speed', 'Fillet Away', 'Final Gambit',
			'Fishious Rend', 'Geomancy', 'Gigaton Hammer', 'Grass Whistle', 'Hidden Power', 'Hypnosis', 'Judgment',
			'Last Respects', 'Lovely Kiss', 'Multi-Attack', 'No Retreat', 'Oblivion Wing', 'Octolock', 'Pursuit',
			'Revival Blessing', 'Shed Tail', 'Shell Smash', 'Shift Gear', 'Sing', 'Sleep Powder', 'Spore', 'Techno Blast',
			'Thousand Arrows', 'V-create', 'Victory Dance', 'Wicked Blow',
		],
	},
	{
		name: "[Gen 3] Emerald Open",

		mod: 'gen3',
		ruleset: ['[Gen 3] Draft League', 'One Boost Passer Clause', '!Evasion Moves Clause', 'Evasion Clause', 'Accuracy Moves Clause'],
		banlist: [
			'Focus Band', "King's Rock", 'Quick Claw',
			'Ninjask + Swagger + Baton Pass', 'Spider Web + Baton Pass', 'Mean Look + Baton Pass',
		],
	},

	// Metagames
	///////////////////////////////////////////////////////////////////
	{
		section: "Metagames",
		column: 2,
	},
	{
		name: "[Gen 9] Draft Arena",
	
		mod: 'draftarena',
		team: 'randomPaired',
		desc: `Teams are chosen randomly from a pool of team pairs, so each team always faces off against the same opposing team.`,
		ruleset: ['Draft', 'Shiny Terastal Clause'],
	},
];
