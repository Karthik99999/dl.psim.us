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

	// Paldea Pre-Home Draft Tiers
	///////////////////////////////////////////////////////////////////

	{
		section: "Paldea Pre-Home Draft Tiers",
	},
	{
		name: "[Gen 9] Paldea Dex Pre-Home Draft",
	
		mod: 'gen9',
		ruleset: ['Draft', '-Unreleased'],
	},
	{
		name: "[Gen 9] Paldea Dex Pre-Home Doubles",
	
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['[Gen 9] Paldea Dex Pre-Home Draft'],
	},
	{
		name: "[Gen 9] Paldea Dex Pre-Home VGC",
	
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Draft VGC', '-Unreleased'],
	},
	{
		name: "[Gen 9] LC Paldea Dex Pre-Home Draft",
	
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['[Gen 9] Paldea Dex Pre-Home Draft', 'Double Item Clause', 'Little Cup'],
	},

	// Paldea Post-Home Draft Tiers
	///////////////////////////////////////////////////////////////////

	{
		section: "Paldea Post-Home Draft Tiers",
	},
	{
		name: "[Gen 9] Paldea Dex Post-Home Draft",
	
		mod: 'gen9',
		ruleset: ['Draft'],
	},
	{
		name: "[Gen 9] Paldea Dex Pre-Home Doubles",
	
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['[Gen 9] Paldea Dex Post-Home Draft'],
	},
	{
		name: "[Gen 9] Paldea Dex Pre-Home VGC",
	
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Draft VGC'],
	},
	{
		name: "[Gen 9] LC Paldea Dex Pre-Home Draft",
	
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['[Gen 9] Paldea Dex Post-Home Draft', 'Double Item Clause', 'Little Cup'],
	},

	// National Draft Tiers
	///////////////////////////////////////////////////////////////////

	{
		section: "National Dex Draft Tiers",
		column: 2,
	},
	{
		name: "[Gen 9] National Dex Draft",

		mod: 'gen9',
		ruleset: ['Draft', '+Past'],
	},
	{
		name: "[Gen 9] National Dex Dynamax",

		mod: 'gen9',
		ruleset: ['[Gen 9] National Dex Draft', 'Allow Dynamax'],
	},
	{
		name: "[Gen 9] National Dex Legacy",

		mod: 'gen9',
		ruleset: ['[Gen 9] National Dex Draft', '+Legacy'],
	},
	{
		name: "[Gen 9] National Dex Unrestricted",

		mod: 'gen9',
		ruleset: ['Draft', '!Obtainable', '-Nonexistant', 'Obtainable Formes', 'Obtainable Misc', '+CAP', '+Past', '+Legacy', 'Allow Dynamax'],
	},
	{
		name: "[Gen 9] National Dex WiFi",

		mod: 'gen9',
		ruleset: ['[Gen 9] National Dex Dynamax', 'Adjust Level = 50'],
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
		name: "[Gen 9] National Dex VGC",

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Draft VGC', 'Allow Dynamax'],
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
];
