// Module ID: 17232
// Function ID: 17233
// Dependencies: [17233, 17281, 2]

// Module 17232
import set from "set" /* 2 */;
import getMessage from "getMessage" /* 17233 */;
import I18nLinkDefault from "I18nLink" /* 17281 */;

getMessage.setUpdateRules(I18nLinkDefault);
const result = set.fileFinishedImporting("i18n/native/index.tsx");
