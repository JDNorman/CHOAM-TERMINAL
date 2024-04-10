import {
  ChannelType,
  ColorResolvable,
  CommandInteraction,
  EmbedBuilder,
  SlashCommandBuilder,
} from 'discord.js';
import {Command} from '../interfaces';
import {EMBED_COLOR, FOOTER_MESSAGE} from './_components';
import {
  client,
  subscribeEmbed,
  subscribeNotifEmbed,
} from '../handlers';