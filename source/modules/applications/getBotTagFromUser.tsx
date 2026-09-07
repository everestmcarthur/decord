// Module ID: 10912
// Function ID: 10913
// Name: getBotTagTypeFromUser
// Dependencies: [1350, 2]
// Exports: getBotTagTypeFromUser

// Module 10912 (getBotTagTypeFromUser)
import set from "set" /* 2 */;
import ApplicationTypes from "ApplicationTypes" /* 1350 */;

const BotTagTypes = ApplicationTypes.BotTagTypes;
const result = set.fileFinishedImporting("modules/applications/getBotTagFromUser.tsx");

export const getBotTagTypeFromUser = function getBotTagTypeFromUser(user) {
  if (user.isSystemUser()) {
    let BOT = BotTagTypes.SYSTEM_DM;
  } else if (user.bot) {
    BOT = BotTagTypes.BOT;
  }
  return BOT;
};
