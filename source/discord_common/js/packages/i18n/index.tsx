// Module ID: 17233
// Function ID: 17234
// Name: getMessage
// Dependencies: [17234, 2, 17277]

// Module 17233 (getMessage)
import set from "set" /* 2 */;
import getMessages from "getMessages" /* 17234 */;
import format from "format" /* 17277 */;

const result = set.fileFinishedImporting("../discord_common/js/packages/i18n/index.tsx");

export default getMessages.I18N;
export const getMessage = format.getMessage;
export const setUpdateRules = format.setUpdateRules;
export const FormattedMessage = format.FormattedMessage;
export const I18N = getMessages.I18N;
export const getSystemLocale = getMessages.getSystemLocale;
