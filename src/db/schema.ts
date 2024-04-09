import {
    boolean,
    integer,
    json,
    pgEnum,
    pgTable,
    timestamp,
    varchar,
} from 'drizzle-orm/pg-core';

// soon-to-come api stuffs
//import {} from '../api-wrapper';

// https://orm.drizzle.team/docs/column-types/pg
export const permsEnum = pgEnum('user_perms', ['Viscount', 'Burseg']);

export const announcementChannels = pgTable('announcement_channels', {
    channelId: varchar('channel_id').primaryKey(),
    type: varchar('type').notNull(),
    userId: varchar('user_id').notNull(),
    guildId: varchar('guild_id').notNull(),
    production: boolean('production').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const persistentMessages = pgTable('persistent_messages', {
    messageId: varchar('message_id').primaryKey(),
    channelId: varchar('channel_id').notNull(),
    type: varchar('type').notNull(),
    userId: varchar('user_id').notNull(),
    guildId: varchar('guild_id').notNull(),
    production: boolean('production').notNull(),
    deleted: boolean('deleted').default(false).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const apiData = pgTable('api_data', {
    time: integer('time').primaryKey(),
    // Add api data here
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const prevData = pgTable('prev_data', {
    time: integer('time').notNull(),
    production: boolean('production').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('created_at').notNull(),
    // Add api data here for comparing data
});
