/* eslint-disable prettier/prettier */
import {EmbedBuilder, SlashCommandBuilder} from 'discord.js';
import {Command} from '../interfaces';
import {EMBED_COLOR, FOOTER_MESSAGE} from './_components';
import {config} from '../config';
import {client} from '../handlers';

const {
  DISCORD_APPLICATION_DIRECTORY,
  EREBUS_DISCORD_INVITE,
  TESTING_DISCORD_INVITE,
  KOFI_LINK,
  TOP_GG_LINK,
  BOT_OWNER,
} = config;

const command: Command = {
  data: new SlashCommandBuilder()
    .setName('discord')
    .setDescription('C.H.O.A.M. Terminal invite'),
  run: async interaction => {
    const owner = client.user.cache.get(BOT_OWNER);

    await interaction.editReply({
      embeds: [
        new EmbedBuilder()
          .setAuthor({
            name: 'AnimateObject (@animateobject_)',
            iconURL: owner?.avatarURL?.() || undefined,
          })
          .setTitle('House Erebus - DUNE: Awakening Guild')
          .setFields(
            {
              name: 'C.H.O.A.M. TERMINAL is part of House Erebus!',
              value:
              `**[House Erebus](${EREBUS_DISCORD_INVITE})** is a community of welcomeing, like-minded Sleepers who are passionate about Dune: Awakening! We also built this server knowing that the official Dune: Awakening Discord can be hectic and overwhelming, so we hope you can find friendly Sleepers more easily here!` +
              '\n\n' +
              'The Terminal has a dedicated testing server where you can see patchnotes for the Terminal, report bugs, give suggestions, or just chat about the bot. Patchnotes are posted in <#1227056705775337644> (if this says unknown, you need to join the server and get the Choam Charity role).',
            },
            {
              name: 'Adding C.H.O.A.M. TERMINAL to your own Servers',
              value:
                'C.H.O.A.M. TERMINAL is free for anyone to add to their own servers! ' +
                `You can add the Terminal to your own server via the official **[Discord App Directory (click)](${DISCORD_APPLICATION_DIRECTORY})**.`,
            },
            {
              name: "Supporting C.H.O.A.M. TERMINAL's Development",
              value:
                'C.H.O.A.M. is a personal project, worked on in spare time. ' +
                `If you'd like to help cover hosting costs, or just support us in general, you can with our **[ko-fi link (click)](${KOFI_LINK})**.` +
                '\n' +
                `Alternatively, you can support the project by voting and/or reviewing it on **[top.gg (click)](${TOP_GG_LINK})** so fellow Sleepers can find it more easily!`,
            }
          )
          .setURL(EREBUS_DISCORD_INVITE)
          .setFooter({text: FOOTER_MESSAGE})
          .setColor(EMBED_COLOR)
      ],
    });
  },
};

export default command;
