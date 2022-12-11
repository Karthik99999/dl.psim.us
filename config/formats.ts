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
		ruleset: ['Draft', '-Unreleased', '-Unobtainable', 'Min Source Gen = 9'],
	},
	{
		name: "[Gen 9] Paldea Dex Post-Home Draft",
	
		mod: 'gen9',
		ruleset: ['Draft', 'Min Source Gen = 9'],
	},
	{
		name: "[Gen 9] Paldea Dex Doubles",
	
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['[Gen 9] Paldea Dex Pre-Home Draft'],
	},
	{
		name: "[Gen 9] Paldea Dex VGC",
	
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Draft VGC', '-Unreleased', '-Unobtainable', 'Min Source Gen = 9'],
	},
	{
		name: "[Gen 9] LC Paldea Dex Draft",
	
		mod: 'gen9',
		ruleset: ['[Gen 9] Paldea Dex Pre-Home Draft', 'Double Item Clause', 'Little Cup'],
	},

	// National Draft Tiers
	///////////////////////////////////////////////////////////////////

	{
		section: "National Dex Draft Tiers",
	},
	{
		name: "[Gen 9] National Dex Draft",

		mod: 'gen9',
		ruleset: ['Draft', '+Past', 'Z-Move Clause'],
		unbanlist: ['Lovely Kiss', 'Bonemerang', 'Conversion', 'Sketch', 'Triple Kick', 'Conversion 2', 'Aeroblast', 'Octazooka', 'Sacred Fire', 'Luster Purge', 'Mist Ball', 'Rock Wrecker', 'Chatter', 'Crush Grip', 'Dark Void', 'Seed Flare', 'Storm Throw', 'Head Charge', 'Gear Grind', 'Searing Shot', 'Techno Blast', 'Secret Sword', 'Glaciate', 'Bolt Strike', 'Blue Flare', 'Freeze Shock', 'Ice Burn', 'Fusion Flare', 'Fusion Bolt', 'Trick-or-Treat', 'Topsy-Turvy', 'Electrify', "King's Shield", 'Geomancy', 'Oblivion Wing', 'Thousand Arrows', 'Thousand Waves', "Land's Wrath", "Trick-or-Treat", 'Light of Ruin', 'Sparkling Aria', 'Floral Healing', 'Toxic Thread', 'Anchor Shot', 'Purify', 'Core Enforcer', 'Beak Blast', 'Clanging Scales', 'Shell Trap', 'Shadow Bone', 'Prismatic Laser', 'Spectral Thief', 'Sunsteel Strike', 'Moongeist Beam', "Nature's Madness", 'Multi-Attack', 'Mind Blown', 'Plasma Fists', 'Photon Geyser', 'Double Iron Bash', 'Octolock', 'Bolt Beak', 'Fishious Rend', 'Decorate', 'Snap Trap', 'Aura Wheel', 'Strange Steam', 'Obstruct', 'Meteor Assault', 'Take Heart'],
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
		name: "[Gen 9] National Dex VGC",

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Draft VGC'],
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
		ruleset: ['Draft'],
	},
	{
		name: "[Gen 3] Draft League",

		mod: 'gen3',
		ruleset: ['Draft'],
	},
];
