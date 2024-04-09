import {drizzle} from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import {config} from '../config';
import * as schema from './schema';
import {announcementChannels} from './schema';

const {DATABASE_URL} = config;

// https://orm.drizzle.team/kit-docs/quick#quick-start
// https://orm.drizzle.team/docs/get-started-postgresql#postgresjs
