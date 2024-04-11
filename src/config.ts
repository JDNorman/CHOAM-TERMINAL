/* eslint-disable prettier/prettier */
import 'dotenv/config';
require('newrelic');
import {version} from '../package.json';
const isProd = process.env.NODE_ENV === 'production';

const configObj: Record<string, string| number | undefined> = {
    // Bot config
    BOT_TOKEN: process.env.BOT_TOKEN,
    BOT_OWNER: process.env.BOT_OWNER || '1013147665325883463',

    // Cron job intervals
    PERSISTENT_MESSAGE_INTERVAL: '*/30 * * * *', // every 30 minutes
    API_UPDATE_INTERVAL: '*/10 * * * * *', // every 10 seconds
    DB_DATA_INTERVAL: '*/3 * * * * *', // every 3 seconds
    STATUS_UPDATE_INTERVAL: '0 * * * *', // every 1 hour
    COMPARE_INTERVAL: '*/10 * * * * *', // every 10 seconds

    // Database config
    DATABASE_URL: process.env.DATABASE_URL,

    // Bot Commands
    EMBED_COLOR: process.env.EMBED_COLOR || 'Gold',
    FOOTER_MESSAGE:
        'Bug reports and suggestions welcome in Discord!\n' +
        `/discord | v${version} | made by Malamania (@animateobject_)`,
    SUBSCRIBE_FOOTER:
        'Delivered via /subscribe\n' +
        `/discord | v${version} | made by Malamania (@animateobject_)`,
    DISCORD_APPLICATION_DIRECTORY:
      '',
    EREBUS_DISCORD_INVITE:
        'https://discord.gg/UjvBfraw',
    TESTING_DISCORD_INVITE:
        'https://discord.gg/2hdu5hmJQG',
    KOFI_LINK:
        'https://ko-fi.com/animateobject_',
    TOP_GG_LINK:
        '',


    // Project info
    VERSION: version,
    IDENTIFIER: 'choam' + (isProd ? '' : '-dev'),
};

const config: Record<string, string> = {};
// assert all env vars as non-null and populate config with only strings
Object.keys(configObj).forEach(key => {
    const value = configObj[key];
    if (value === undefined)
        throw new Error(`${key} environment variable required!`);

    config[key] = value as string;
});

// needs a rename when game is released
const duneConfig = {
    // player type sprites
    // npc type sprites
    icons: {
        sleeper:
            '',
        kofi: 'https://storage.ko-fi.com/cdn/nav-logo-stroke.png',
    },
};

export {config, duneConfig, isProd};
