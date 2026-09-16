// Module ID: 14867
// Function ID: 14868
// Name: handleOpenUnconfirmedAgeGroupSupportArticle
// Dependencies: [14796, 8541, 2025, 2]
// Exports: handleOpenUnconfirmedAgeGroupSupportArticle

// Module 14867 (handleOpenUnconfirmedAgeGroupSupportArticle)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2025 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8541 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 14796 */;
import size from "module_2" /* 2 */;

const TINY_BRONCO_ARTICLE_ID = TinyBroncoConstants.TINY_BRONCO_ARTICLE_ID;
const result = size.fileFinishedImporting("modules/tiny_bronco/handleOpenUnconfirmedAgeGroupSupportArticle.tsx");

export const handleOpenUnconfirmedAgeGroupSupportArticle = function handleOpenUnconfirmedAgeGroupSupportArticle() {
  const obj = AgeVerificationActionCreatorsDefault;
  obj.openUrl(HelpdeskUtilsDefault.getArticleURL(TINY_BRONCO_ARTICLE_ID));
};
