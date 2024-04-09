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
//import {commandHash, commandList, presenceCmds, wikiCmd} from '../commands';
import {config} from '../config';
//import {getData, mappedNames} from '../api-wrapper';
import {
    compareData,
    dbData,
    loadWikiFiles,
    logger,
    updateMessages,
} from '../handlers';