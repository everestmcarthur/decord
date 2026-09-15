// Module ID: 13367
// Function ID: 13368
// Name: getApplicationFromMessage
// Dependencies: [1919, 13364, 8461, 2]
// Exports: getApplicationFromMessage

// Module 13367 (getApplicationFromMessage)
import ApplicationRecord from "ApplicationRecord" /* 1919 */;

const SpotifyApplication = fn(13364).SpotifyApplication;
const isSpotifyParty = fn(8461).isSpotifyParty;
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
