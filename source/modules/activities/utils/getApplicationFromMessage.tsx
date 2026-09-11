// Module ID: 13330
// Function ID: 13331
// Name: getApplicationFromMessage
// Dependencies: [1918, 13327, 8428, 2]
// Exports: getApplicationFromMessage

// Module 13330 (getApplicationFromMessage)
import ApplicationRecord from "ApplicationRecord" /* 1918 */;

const SpotifyApplication = fn(13327).SpotifyApplication;
const isSpotifyParty = fn(8428).isSpotifyParty;
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
