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
  import {commandHash, commandList, presenceCmds} from '../commands';
  import {config} from '../config';
  import {getData} from '../api-wrapper';
  import {
    compareData,
    dbData,
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
    const commandData = commandList.map(command => command.data.toJSON());

    await rest.put(Routes.applicationCommands(clientId), {
        body: commandData,
    });
    logger.info(`Commands loaded: ${Object.keys(commandHash).join(', ')}`, {
        type: 'startup',
    });

    time = `${Date.now() - start}ms`;
    logger.info(`Loaded ${commandData.length} commands in ${time}`, {
        type: 'startup',
    });

    start = Date.now();
    // get api data on startup
    await getData().then(data => {
        //api data handling
    });

    // retrieve encounters and load them as autocomplete suggestions
    time = `${Date.now() - start}ms`;
    logger.info(`Loaded ${/* use api data object instead of time */time} ... in ${time}`, {
        type: 'startup',
    });

    // cron schedule to update messages
    schedule(PERSISTENT_MESSAGE_INTERVAL, () => updateMessages());

    // cron schedule to insert new api data into db
    schedule(DB_DATA_INTERVAL, () => dbData());

    // cron schedule to update api data every 10 seconds
    schedule(API_UPDATE_INTERVAL, () => {
        getData().then(data => {
            // get data and remap to whatever data arrrays i make
        });
    });

    // cron schedule  to compare api data
    schedule(COMPARE_INTERVAL, () => compareData());

    // cron schedule to update presence every 3 seconds
    schedule(STATUS_UPDATE_INTERVAL, () => {
        if (client.user) {
            if (client.user.presence.activities[0]) {
                const prev = client.user.presence.activities[0].name;
                client.user.setActivity(presenceCmds.shift() as string, {
                    type: ActivityType.Listening,
                });
                presenceCmds.push(prev);
            } else
                client.user.setActivity(presenceCmds.shift() as string, {
                    type: ActivityType.Listening,
                });
        }
    });
};

export {onReady};
