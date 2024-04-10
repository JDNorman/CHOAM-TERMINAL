import {logger} from '..';
//API DATA TO COME: import {StrippedApiData, getData} = from '../../api-wrapper';
import {apiData, db, eq, newApiData} from '../../db';

export async function dbData() {
  // API Data below vvv
  // const data = await getData();
  // const strippedData: StrippedApiData = {};
  
  // const existingData = await db.query.apiData.findFirst({
  //   where: eq(apiData.time, strippedData.Status.time),
  // });

  // if (existingData) {
  //   logger.info('Data already exists in database!', {type: info});
  //   return;
  // }

  // await newApiData({
  //   time: strippedData.Status.time,
  //   data: strippedData,
  // });

  logger.info('Committing new API data to database!', {type: 'info'});
}