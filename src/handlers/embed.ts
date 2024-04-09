import {
    ColorResolvable,
    CommandInteraction,
    EmbedBuilder,
    ModalSubmitInteraction,
    NewsChannel,
    PublicThreadChannel,
    TextChannel,
} from 'discord.js';
import {config, duneConfig} from '../config';
import {client, formatPlayers} from '.';

// soon-to-come endpoint api stuffs (prob once game is out)
// import {
//     ...
// } from '../api-wrapper';

import {apiData, db} from '../db';
import {asc, gt} from 'drizzle-orm';