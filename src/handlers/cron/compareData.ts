/* eslint-disable prettier/prettier */
import {
  //api stuff
  data,
} from '../../api-wrapper';
import {isProd} from '../../config';
import {announcementChannels, db, eq, newPrevData, prevData} from '../../db';
import {logger} from '../logging';
import {and} from 'drizzle-orm';
import {writeFileSync} from 'fs';
import {
  //api updates
} from '.';

export 