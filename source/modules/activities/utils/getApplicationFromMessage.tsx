// Module ID: 13235
// Function ID: 13236
// Name: getApplicationFromMessage
// Dependencies: [1918, 13232, 8340, 2]
// Exports: getApplicationFromMessage

// Module 13235 (getApplicationFromMessage)
import closure_0 from "createExecutable" /* 1918 */;
import { SpotifyApplication } from "getIconURL" /* 13232 */;
import { isSpotifyParty } from "SPOTIFY_APP_PROTOCOL" /* 8340 */;

const result = require("set").fileFinishedImporting("modules/activities/utils/getApplicationFromMessage.tsx");

export const getApplicationFromMessage = function getApplicationFromMessage(application) {
  if (null != application.application) {
    let fromServer = closure_0.createFromServer(application.application);
  } else if (null != application.activity) {
    if (null != application.activity.party_id) {
      if (isSpotifyParty(application.activity.party_id)) {
        fromServer = SpotifyApplication;
      }
    }
  }
  return fromServer;
};
