// Module ID: 10108
// Function ID: 10109
// Name: playInAppMessageSound
// Dependencies: [10086, 10109, 1074, 1608, 9907, 2]
// Exports: playInAppMessageSound

// Module 10108 (playInAppMessageSound)
import isMetaQuest from "isMetaQuest" /* 1608 */;
import closure_2 from "DesktopNotificationTypes" /* 10086 */;
import { isInAppMessageSoundsEnabled as closure_3 } from "isInAppMessageSoundsEnabled" /* 10109 */;
import { InAppNotificationTypes } from "ME" /* 1074 */;

require = arg1;
const message1 = "message1";
let c6 = 0;
const result = require("set").fileFinishedImporting("modules/notifications/native/playInAppMessageSound.tsx");

export const playInAppMessageSound = function playInAppMessageSound(notification) {
  if (notification.type === InAppNotificationTypes.MESSAGE) {
    if (obj2.isMetaQuest()) {
      if (callback()) {
        if (!soundDisabled.isSoundDisabled(message1)) {
          const _Date = Date;
          const timestamp = Date.now();
          if (timestamp - timestamp >= 1000) {
            tmp8(9907).playSound(tmp3, 0.4);
            const tmp8Result = tmp8(9907);
          }
        }
        tmp3 = message1;
      }
    }
    obj2 = isMetaQuest;
    tmp8 = require;
  }
};
