import {ColorResolvable} from "discord.js";
import {config} from '../config';

export const FOOTER_MESSAGE = config.FOOTER_MESSAGE as string;
export const EMBED_COLOR = config.EMBED_COLOR as ColorResolvable;
export const GUILD_COLOR: {
    [key: string]: ColorResolvable;
} = {
    Erebus: 'Gold',
    Imperial: 'DarkRed'
};