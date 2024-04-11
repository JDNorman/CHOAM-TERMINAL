/* eslint-disable prettier/prettier */
import {EmbedBuilder, SlashCommandBuilder} from 'discord.js';
import {Command} from '../interfaces';
import { EMBED_COLOR, FOOTER_MESSAGE } from './_components';

const command: Command = {
  data: new SlashCommandBuilder()
    .setName('community')
    .setDescription('Check out other awesome community resources!'), //duned.gg
  run: async interaction => {
    const embed = new EmbedBuilder()
      .setTitle('Great Community Projects')
      .setDescription(
        'C.H.O.A.M. TERMINAL is just one of many comunity-driven projects. ' +
          'Check out these other awesome projects!'
      )
      .setFields(
        {
          name: 'Duned.gg (Website)',
          value:
            'An awesome website showing lists of guilds and houses with an awesome interactive UI!' +
            '\n' +
            'https://duned.gg',
        },
      )
      .setFooter({text: FOOTER_MESSAGE})
      .setColor(EMBED_COLOR);

    await interaction.editReply({embeds: [embed]});
  },
};

export default command;
