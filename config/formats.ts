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

	// National Draft Tiers
	///////////////////////////////////////////////////////////////////

	{
		section: "National Dex Draft",
	},
	{
		name: "[Gen 8] National Dex Draft",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] National Dex Dynamax",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview'],
	},
	{
		name: "[Gen 8] National Dex Legacy",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', '+PastMove', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] National Dex Unrestricted",

		mod: 'gen8',
		ruleset: ['Draft', '+Unreleased', '-Nonexistent', 'Obtainable Formes', 'Obtainable Misc', '+CAP', '+Past', '+PastMove', 'Team Preview'],
	},
	{
		name: "[Gen 8] National Dex WiFi",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Adjust Level Down = 50'],
	},
	{
		name: "[Gen 8] National Dex Doubles",

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', '!Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] National Dex Doubles Unrestricted",

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Draft', '+Unreleased', '-Nonexistent', 'Obtainable Formes', 'Obtainable Misc', '+CAP', '+Past', '+PastMove', 'Team Preview', '!Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] National Dex VGC",

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', '!Sleep Clause Mod', '!OHKO Clause', '!Evasion Moves Clause', 'Adjust Level = 50', 'Picked Team Size = 4'],
	},
	{
		name: "[Gen 8] LC National Dex Draft",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Double Item Clause', 'Little Cup', 'Dynamax Clause'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 8] LC National Dex Legacy",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', '+PastMove', 'Team Preview', 'Double Item Clause', 'Little Cup', 'Dynamax Clause'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 8] National Dex CAP",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', '+CAP', 'Team Preview', 'Dynamax Clause'],
	},

	// Past Gens Draft
	///////////////////////////////////////////////////////////////////

	{
		section: "Past Gens Draft",
		column: 2,
	},
	{
		name: "[Gen 8] Draft League",

		mod: 'gen8',
		ruleset: ['Obtainable', '+Unreleased', 'Draft', 'Team Preview'],
	},
	{
		name: "[Gen 7] Draft League",

		mod: 'gen7',
		ruleset: ['Obtainable', '+Unreleased', '+LGPE', 'Draft', 'Team Preview'],
	},
	{
		name: "[Gen 6] Draft League",

		mod: 'gen6',
		ruleset: ['Obtainable', '+Unreleased', 'Draft', 'Team Preview'],
	},
];
