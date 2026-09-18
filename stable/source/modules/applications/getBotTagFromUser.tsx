// Module ID: 10912
// Function ID: 10913
// Name: getBotTagFromUser
// Dependencies: [1350, 2]
// Exports: getBotTagTypeFromUser

// Module 10912 (getBotTagFromUser)
import ApplicationConstants from "ApplicationConstants" /* 1350 */;
import size from "module_2" /* 2 */;

const BotTagTypes = ApplicationConstants.BotTagTypes;
const result = size.fileFinishedImporting("modules/applications/getBotTagFromUser.tsx");

export const getBotTagTypeFromUser = function getBotTagTypeFromUser(user) {
  if (user.isSystemUser()) {
    let BOT = BotTagTypes.SYSTEM_DM;
  } else if (user.bot) {
    BOT = BotTagTypes.BOT;
  }
  return BOT;
};
