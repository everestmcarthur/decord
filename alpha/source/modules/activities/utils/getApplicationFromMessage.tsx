// Module ID: 13533
// Function ID: 13534
// Name: getApplicationFromMessage
// Dependencies: [2002, 13530, 8610, 2]
// Exports: getApplicationFromMessage

// Module 13533 (getApplicationFromMessage)
import ApplicationRecord from "ApplicationRecord" /* 2002 */;

const SpotifyApplication = fn(13530).SpotifyApplication;
const isSpotifyParty = fn(8610).isSpotifyParty;
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
