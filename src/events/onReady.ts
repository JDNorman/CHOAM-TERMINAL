/* eslint-disable prettier/prettier */
import {
    ActivityType,
    ButtonBuilder,
    ButtonStyle,
    Client,
    REST,
    Routes,
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder,
} from 'discord.js';
import {schedule} from 'node-cron';
import {commandHash, commandList, presenceCmds, wikiCmd} from '../commands';
import {config} from '../config';
//import {getData, mappedNames} from '../api-wrapper';
import {
    compareData,
    dbData,
    loadWikiFiles,
    logger,
    updateMessages,
} from '../handlers';

// bot client token, for use with discord API
const BOT_TOKEN = config.BOT_TOKEN;
const PERSISTENT_MESSAGE_INTERVAL = config.PERSISTENT_MESSAGE_INTERVAL;
const API_UPDATE_INTERVAL = config.API_UPDATE_INTERVAL;
const STATUS_UPDATE_INTERVAL = config.STATUS_UPDATE_INTERVAL;
const DB_DATA_INTERVAL = config.DB_DATA_INTERVAL;
const COMPARE_INTERVAL = config.COMPARE_INTERVAL;
const VERSION = config.VERSION;

const onReady = async (client: Client) => {
    if (!client.user) throw Error('Client not initialized');
    const clientId = client.user.id;
    const serverCount = (await client.guilds.fetch()).size;

    const rest = new REST().setToken(BOT_TOKEN);

    logger.info(
        `[v${VERSION}] Serving ${serverCount} servers as ${client.user?.tag}`,
        {
            type: 'startup',
        }
    );

    // two non-constant value for timing functions
    let start = Date.now();
    let time = '';

    // register commands as global discord slash commands
    const commandData = commandList.map(command => command.data.toJSON())

}
