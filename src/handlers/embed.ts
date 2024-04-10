import {
    ColorResolvable,
    CommandInteraction,
    Embed,
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
import { int } from 'drizzle-orm/mysql-core';

const {SUBSCRIBE_FOOTER, FOOTER_MESSAGE, EMBED_COLOR} = config;
//const {}
// game-specific icons and sprites const

export function commandErrorEmbed(
    interaction: CommandInteraction | ModalSubmitInteraction
) {
    return {
        embeds: [
            new EmbedBuilder()
                .setAuthor({
                    name: client.user?.tag || '',
                    iconURL: client.user?.avatarURL() || undefined,
                })
                .setTitle('Something Went Wrong :(')
                .setDescription(
                    `There was an issue trying to execute \`/${
                        interaction.isCommand()
                        ? interaction.commandName
                        : interaction.customId
                    }\`! ` +
                        'The issue has been logged and will be looked into. Feel free to try again shortly. ' +
                        'If the problem persists, please let Malamania know'
                )
                .setFooter({text: FOOTER_MESSAGE})
                .setColor(EMBED_COLOR as ColorResolvable)
                .setTimestamp(),
        ],
    };
}

export function missingChannelPerms(interaction: CommandInteraction) {
    return {
        embeds: [
            new EmbedBuilder()
                .setAuthor({
                    name: interaction.user.tag,
                    iconURL: interaction.user.avatarURL() || undefined,
                })
                .setTitle('Permission Denied')
                .setDescription(
                    'This command creates a public, persistent message. To avoid inconveniencing other users, it requires moderator permissions. '
                )
                .setFooter({text: FOOTER_MESSAGE})
                .setColor(EMBED_COLOR as ColorResolvable)
                .setTimestamp(),
        ],
    };
}

export function ownerCommandEmbed(interaction: CommandInteraction) {
    return {
        embeds: [
            new EmbedBuilder()
                .setAuthor({
                    name: interaction.user.tag,
                    iconURL: interaction.user.avatarURL() || undefined,
                })
                .setTitle('Permission Denied')
                .setDescription('This command is only available to Owners!')
                .setFooter({text: FOOTER_MESSAGE})
                .setColor(EMBED_COLOR as ColorResolvable)
                .setTimestamp(),
        ],
    };
}

export function adminCommandEmbed(interaction: CommandInteraction) {
    return {
        embeds: [
            new EmbedBuilder()
            .setAuthor({
                name: interaction.user.tag,
                iconURL: interaction.user.avatarURL() || undefined,
            })
            .setTitle('Permission Denied')
            .setDescription('This command is only available to Admins!')
            .setFooter({text: FOOTER_MESSAGE})
            .setColor(EMBED_COLOR as ColorResolvable)
            .setTimestamp(),
        ],
    };
}

//This sends when a channel has been set to be the subscribe channel
export function subscribeEmbed(
    type: string,
    channel: NewsChannel | TextChannel | PublicThreadChannel
) : EmbedBuilder[] {
    const embeds: EmbedBuilder[] = [];
    const embed = new EmbedBuilder()
        .setTitle('Success!')
        .setDescription(
            `<#${channel.id}> has been subscribed to receive updates for **${type}** events.`
        )
        .setFooter({text: FOOTER_MESSAGE})
        .setColor(EMBED_COLOR as ColorResolvable)
        .setTimestamp();
    embeds.push(embed);
    return embeds
}

export function subscribeNotifEmbed(type: string): EmbedBuilder[] {
    const embeds: EmbedBuilder[] = []; // Explicitly define the type of the array
    const embed = new EmbedBuilder()
        .setAuthor({
            name: 'Dune Imperial Command',
        })
        //.setThumbnail(/*use the imperial command sprite, put it in the sprite for this faction/guild*/)
        //.setColor()
        .setTitle('Subscription Approved!')
        .setDescription(
            `This channel has been subscribed to receive updates for **${type}** events.`
        )
        .setFooter({text: SUBSCRIBE_FOOTER})
        .setColor(EMBED_COLOR as ColorResolvable)
        .setTimestamp();
    embeds.push(embed);
    return embeds;
}

function drawLoadingBarPerc(percentage: number, barLength: number) {
    const percMult = percentage / 100;
    const progress = Math.round(barLength * percMult);
    const empty = barLength - progress;

    const progressBar = '[`' + '█'.repeat(progress) + ' '.repeat(empty) + '`]';

    return `${progressBar} ${percentage.toFixed(2)}%`;
}
