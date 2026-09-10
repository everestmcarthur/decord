// Module ID: 13305
// Function ID: 13306
// Name: getApplicationFromMessage
// Dependencies: [1918, 13302, 8405, 2]
// Exports: getApplicationFromMessage

// Module 13305 (getApplicationFromMessage)
import ApplicationRecord from "ApplicationRecord" /* 1918 */;

const SpotifyApplication = fn(13302).SpotifyApplication;
const isSpotifyParty = fn(8405).isSpotifyParty;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/getApplicationFromMessage.tsx");

export const getApplicationFromMessage = function getApplicationFromMessage(application) {
  if (null != application.application) {
    let fromServer = ApplicationRecord.createFromServer(application.application);
  } else if (null != application.activity) {
    if (null != application.activity.party_id) {
      if (isSpotifyParty(application.activity.party_id)) {
        fromServer = SpotifyApplication;
      }
    }
  }
  return fromServer;
};
