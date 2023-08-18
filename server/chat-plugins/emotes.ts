import {FS} from '../../lib';

const EMOTES_FILE = 'config/chat-plugins/emotes.json';

function loadEmotes(): {[name: string]: string} {
	try {
		return JSON.parse(FS(EMOTES_FILE).readSync());
	} catch (e: any) {
		if (e.code !== 'ENOENT') throw e;
		return {};
	}
}
const emotes = loadEmotes();
function saveEmotes() {
	FS(EMOTES_FILE).safeWriteSync(JSON.stringify(emotes));
}

const SIZE = 32;

export function parseEmotes(str: string) {
	const regex = /:(.+?):/g;
	if (!regex.test(str)) return '';
	return str.replace(/:(.+?):/g, (match, name) => {
		if (!emotes[name]) return match;
		else return `<img src="${emotes[name]}" width="${SIZE}" height="${SIZE}" alt="${name}" title=":${name}:">`;
	});
}

export const commands: Chat.ChatCommands = {
	emote: 'emotes',
	emotes: {
		add(target, room, user) {
			this.checkCan('lock');
			const [name, url] = target.split(',').map(p => p.replace(/\s/g, ''));
			if (!name || !url) {
				return this.sendReply('Usage: /emotes add [name], [url] - Remember to resize the image first! (recommended 32x32)');
			}
			if (emotes[name]) {
				return this.sendReply(`:${name}: is already an emote.`);
			}
			emotes[name] = url;
			saveEmotes();

			this.modlog('EMOTES ADDEMOTE', user, `added an emote with the name :${name}:`);
			this.sendReply(`Added the emote :${name}:`);
			this.refreshPage('emotes');
		},
		delete(target, room, user) {
			this.checkCan('lock');
			const name = target.replace(/\s/g, '');
			if (!name) {
				return this.sendReply('Usage: /emotes delete [name]');
			}
			if (!emotes[name]) {
				return this.sendReply(`"${name}" is not an emote.`);
			}
			delete emotes[name];
			saveEmotes();

			this.modlog('EMOTES DELETEEMOTE', user, `deleted emote with the name :${name}:`);
			this.sendReply(`Deleted the emote :${name}:`);
			this.refreshPage('emotes');
		},

		disable(target, room, user) {
			room = this.requireRoom();
			this.checkCan('editroom', null, room);
			if (room.settings.emotesDisabled) {
				return this.errorReply("Emotes are already disabled in this room.");
			}
			room.settings.emotesDisabled = true;
			room.saveSettings();
			this.sendReply(`Emotes have been disabled for this room.`);
		},
		enable(target, room, user) {
			room = this.requireRoom();
			this.checkCan('editroom', null, room);
			if (!room.settings.emotesDisabled) {
				return this.errorReply("Emotes are already enabled in this room.");
			}
			delete room.settings.emotesDisabled;
			room.saveSettings();
			this.sendReply(`Emotes have been enabled for this room.`);
		},

		'': 'view',
		list: 'view',
		view() {
			this.parse(`/join view-emotes`);
		},

		help() {
			this.parse(`/help emotes`);
		},
	},

	emoteshelp: [
		`/emotes enable/disable - Enables or disables emotes in the current room depending on if they are already active.`,
		`/emotes view/list - Displays the list of emotes.`,
		`/emotes help - Displays this help command.`,
	],
};
export const pages: Chat.PageTable = {
	emotes(query, user) {
		this.title = 'Emotes';

		let buf = `<div class="pad"><button style="float:right" class="button" name="send" value="/j view-emotes"><i class="fa fa-refresh"></i> Refresh</button><h2>Emotes</h2><hr />`;

		if (user.can('lock')) {
			buf += `<h3>Add an emote</h3>`;
			buf += `<form data-submitsend="/emotes add {name}, {url}">`;
			buf += `<h4>Name</h4><input type="text" name="name"></input><br />`;
			buf += `<h4>URL</h4><input type="text" name="url"></input><br />`;
			buf += `<button class="button" style="margin: 5px" type="submit">Add new emote</button></form>`;
			buf += `<hr />`;
		}

		buf += `<div class="ladder pad"><table><tr><th>Image</th><th>Name</th>`;
		if (user.can('lock')) buf += `<th>Manage</th>`;
		buf += `</tr>`;
		for (const name in emotes) {
			const url = emotes[name];
			buf += `<tr>`;
			buf += `<td><img src="${url}" width="${SIZE}" height="${SIZE}" alt="${name}" title=":${name}:"></td>`;
			buf += `<td>:${name}:</td>`;
			if (user.can('lock')) buf += `<td><button class="button" name="send" value="/emotes delete ${name}">Delete</button></td>`;
			buf += `</tr>`;
		}
		buf += `</table></div>`;

		return buf;
	},
};

export const roomSettings: Chat.SettingsHandler = room => ({
	label: "Emotes",
	permission: 'editroom',
	options: [
		[`disabled`, room.settings.emotesDisabled || 'emotes disable'],
		[`enabled`, !room.settings.emotesDisabled || 'emotes enable'],
	],
});