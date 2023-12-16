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
		name: "[Gen 9] Paldea Dex Draft",
	
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Draft', 'Min Source Gen = 9'],
	},
	{
		name: "[Gen 9] Paldea Dex Tera Preview",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] Paldea Dex Draft', 'Tera Type Preview'],
	},
	{
		name: "[Gen 9] Paldea Dex Doubles",
	
		mod: 'gen9',
		searchShow: false,
		gameType: 'doubles',
		ruleset: ['[Gen 9] Paldea Dex Draft'],
	},
	{
		name: "[Gen 9] Paldea Dex VGC",
	
		mod: 'gen9',
		searchShow: false,
		gameType: 'doubles',
		ruleset: ['[Gen 9] Paldea Dex Draft', '!Draft', 'Draft VGC'],
	},
	{
		name: "[Gen 9] Paldea Dex VGC Tera Preview",
	
		mod: 'gen9',
		searchShow: false,
		gameType: 'doubles',
		ruleset: ['[Gen 9] Paldea Dex VGC', 'Tera Type Preview'],
	},
	{
		name: "[Gen 9] LC Paldea Dex Draft",
	
		mod: 'gen9',
		searchShow: false,
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
		searchShow: false,
		ruleset: ['Draft', '+Past', 'Allow Signature Moves', 'Z-Move Clause'],
	},
	{
		name: "[Gen 9] National Dex Draft Tera Preview",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] National Dex Draft', 'Tera Type Preview'],
	},
	{
		name: "[Gen 9] National Dex Legacy",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Draft', '+Past', '+Legacy'],
	},
	{
		name: "[Gen 9] National Dex Legacy Tera Preview",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] National Dex Legacy', 'Tera Type Preview'],
	},
	{
		name: "[Gen 9] National Dex Unrestricted",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Draft', '!Obtainable', '-Nonexistent', 'Obtainable Formes', 'Obtainable Misc', '+CAP', '+Past', '+Legacy'],
	},
	{
		name: "[Gen 9] National Dex WiFi",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] National Dex Draft', 'Adjust Level = 50'],
	},
	{
		name: "[Gen 9] National Dex Doubles",

		mod: 'gen9',
		searchShow: false,
		gameType: 'doubles',
		ruleset: ['[Gen 9] National Dex Draft'],
	},
	{
		name: "[Gen 9] National Dex Doubles Legacy",

		mod: 'gen9',
		searchShow: false,
		gameType: 'doubles',
		ruleset: ['[Gen 9] National Dex Legacy'],
	},
	{
		name: "[Gen 9] National Dex Doubles Unrestricted",

		mod: 'gen9',
		searchShow: false,
		gameType: 'doubles',
		ruleset: ['[Gen 9] National Dex Unrestricted', '!Sleep Clause Mod'],
	},
	{
		name: "[Gen 9] National Dex 4v4",

		mod: 'gen9',
		searchShow: false,
		gameType: 'doubles',
		ruleset: ['Draft VGC', '+Past', 'Allow Signature Moves', 'Z-Move Clause'],
	},
	{
		name: "[Gen 9] LC National Dex Draft",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] National Dex Draft', 'Double Item Clause', 'Little Cup'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 9] LC National Dex Legacy",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] National Dex Legacy', 'Double Item Clause', 'Little Cup'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 9] National Dex CAP",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] National Dex Draft', '+CAP'],
	},
	{
		name: "[Gen 8] National Dex Draft",

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Draft', '+Past', 'Z-Move Clause', 'Dynamax Clause'],
	},

	// Paldea DLC 1 Draft Tiers
	///////////////////////////////////////////////////////////////////

	{
		section: "Paldea DLC 1 Draft Tiers",
		column: 2,
	},
	{
		name: "[Gen 9 DLC 1] Paldea Dex Draft",
	
		mod: 'gen9dlc1',
		searchShow: false,
		ruleset: ['Draft', 'Min Source Gen = 9'],
	},
	{
		name: "[Gen 9 DLC 1] Paldea Dex Tera Preview",

		mod: 'gen9dlc1',
		searchShow: false,
		ruleset: ['[Gen 9 DLC 1] Paldea Dex Draft', 'Tera Type Preview'],
	},
	{
		name: "[Gen 9 DLC 1] Paldea Dex Doubles",
	
		mod: 'gen9dlc1',
		searchShow: false,
		gameType: 'doubles',
		ruleset: ['[Gen 9 DLC 1] Paldea Dex Draft'],
	},
	{
		name: "[Gen 9 DLC 1] Paldea Dex VGC",
	
		mod: 'gen9dlc1',
		searchShow: false,
		gameType: 'doubles',
		ruleset: ['[Gen 9 DLC 1] Paldea Dex Draft', '!Draft', 'Draft VGC'],
	},
	{
		name: "[Gen 9 DLC 1] Paldea Dex VGC Tera Preview",
	
		mod: 'gen9dlc1',
		searchShow: false,
		gameType: 'doubles',
		ruleset: ['[Gen 9 DLC 1] Paldea Dex VGC', 'Tera Type Preview'],
	},
	{
		name: "[Gen 9 DLC 1] LC Paldea Dex Draft",
	
		mod: 'gen9dlc1',
		searchShow: false,
		ruleset: ['[Gen 9 DLC 1] Paldea Dex Draft', 'Double Item Clause', 'Little Cup'],
	},

	// National Draft Tiers
	///////////////////////////////////////////////////////////////////

	{
		section: "National Dex DLC 1 Draft Tiers",
		column: 2,
	},
	{
		name: "[Gen 9 DLC 1] National Dex Draft",

		mod: 'gen9dlc1',
		searchShow: false,
		ruleset: ['Draft', '+Past', 'Allow Signature Moves', 'Z-Move Clause'],
	},
	{
		name: "[Gen 9 DLC 1] National Dex Draft Tera Preview",

		mod: 'gen9dlc1',
		searchShow: false,
		ruleset: ['[Gen 9 DLC 1] National Dex Draft', 'Tera Type Preview'],
	},
	{
		name: "[Gen 9 DLC 1] National Dex Legacy",

		mod: 'gen9dlc1',
		searchShow: false,
		ruleset: ['Draft', '+Past', '+Legacy'],
	},
	{
		name: "[Gen 9 DLC 1] National Dex Legacy Tera Preview",

		mod: 'gen9dlc1',
		searchShow: false,
		ruleset: ['[Gen 9 DLC 1] National Dex Legacy', 'Tera Type Preview'],
	},
	{
		name: "[Gen 9 DLC 1] National Dex Unrestricted",

		mod: 'gen9dlc1',
		searchShow: false,
		ruleset: ['Draft', '!Obtainable', '-Nonexistent', 'Obtainable Formes', 'Obtainable Misc', '+CAP', '+Past', '+Legacy'],
	},
	{
		name: "[Gen 9 DLC 1] National Dex WiFi",

		mod: 'gen9dlc1',
		searchShow: false,
		ruleset: ['[Gen 9 DLC 1] National Dex Draft', 'Adjust Level = 50'],
	},
	{
		name: "[Gen 9 DLC 1] National Dex Doubles",

		mod: 'gen9dlc1',
		searchShow: false,
		gameType: 'doubles',
		ruleset: ['[Gen 9 DLC 1] National Dex Draft'],
	},
	{
		name: "[Gen 9 DLC 1] National Dex Doubles Legacy",

		mod: 'gen9dlc1',
		searchShow: false,
		gameType: 'doubles',
		ruleset: ['[Gen 9 DLC 1] National Dex Legacy'],
	},
	{
		name: "[Gen 9 DLC 1] National Dex Doubles Unrestricted",

		mod: 'gen9dlc1',
		searchShow: false,
		gameType: 'doubles',
		ruleset: ['[Gen 9 DLC 1] National Dex Unrestricted', '!Sleep Clause Mod'],
	},
	{
		name: "[Gen 9 DLC 1] National Dex 4v4",

		mod: 'gen9dlc1',
		searchShow: false,
		gameType: 'doubles',
		ruleset: ['Draft VGC', '+Past', 'Allow Signature Moves', 'Z-Move Clause'],
	},
	{
		name: "[Gen 9 DLC 1] LC National Dex Draft",

		mod: 'gen9dlc1',
		searchShow: false,
		ruleset: ['[Gen 9 DLC 1] National Dex Draft', 'Double Item Clause', 'Little Cup'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 9 DLC 1] LC National Dex Legacy",

		mod: 'gen9dlc1',
		searchShow: false,
		ruleset: ['[Gen 9 DLC 1] National Dex Legacy', 'Double Item Clause', 'Little Cup'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 9 DLC 1] National Dex CAP",

		mod: 'gen9dlc1',
		searchShow: false,
		ruleset: ['[Gen 9 DLC 1] National Dex Draft', '+CAP'],
	},

	// Past Gens Draft
	///////////////////////////////////////////////////////////////////

	{
		section: "Past Gen Draft Tiers",
		column: 3,
	},
	{
		name: "[Gen 8] Draft",

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Draft'],
	},
	{
		name: "[Gen 7] Draft",

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Draft', '+LGPE'],
	},
	{
		name: "[Gen 6] Draft",

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Draft'],
	},
	{
		name: "[Gen 5] Draft",

		mod: 'gen5',
		searchShow: false,
		ruleset: ['Draft'],
	},
	{
		name: "[Gen 4] Draft",

		mod: 'gen4',
		searchShow: false,
		ruleset: ['Draft', '!Team Preview'],
	},
	{
		name: "[Gen 3] Draft",

		mod: 'gen3',
		searchShow: false,
		ruleset: ['Draft', '!Team Preview'],
	},

	// Custom Partner Formats
	///////////////////////////////////////////////////////////////////
	{
		section: "Custom Partner Formats",
		column: 3,
	},
	{
		name: "[Gen 4] Distortion Draft",

		mod: 'gen4',
		searchShow: false,
		ruleset: ['Draft', '!Team Preview', 'Evasion Items Clause', 'Accuracy Moves Clause', 'Baton Pass Stat Clause'],
		banlist: [
			'Sandshrew', 'Sandslash', 'Mewtwo', 'Mew', 'Lugia', 'Ho-Oh', 'Cacnea', 'Cacturne',
			'Salamence', 'Latias', 'Latios', 'Kyogre', 'Groudon', 'Rayquaza', 'Jirachi', 'Deoxys',
			'Gible', 'Gabite', 'Garchomp', 'Dialga', 'Palkia', 'Giratina', 'Manaphy', 'Darkrai', 'Arceus',
			'Sand Veil', 'Swinub + Snow Cloak', 'Piloswine + Snow Cloak', 'Mamoswine + Snow Cloak',
			'Quick Claw', 'Swagger', 'Baton Pass + Substitute',
		],
	},

	// Metagames
	///////////////////////////////////////////////////////////////////
	{
		section: "Metagames",
		column: 3,
	},
	{
		name: "[Gen 9] Draft Arena",
	
		mod: 'draftarena',
		team: 'randomPaired',
		desc: `Teams are chosen randomly from a pool of team pairs, so each team always faces off against the same opposing team.`,
		ruleset: ['Draft', 'Shiny Terastal Clause'],
	},
];
