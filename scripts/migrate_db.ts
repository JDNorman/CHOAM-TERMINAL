import {
  announcementChannels,
  apiData as dbApiData,
  prevData as dbPrevData,
  db,
  eq,
  newAnnouncementChannel,
  newApiData,
  newPersistentMessage,
  newPrevData,
  //  supaDB,
  persistentMessages,
} from '../src/db'

const main = async () => {
  const annChanns = await db.query.announcementChannels.findMany();    
}