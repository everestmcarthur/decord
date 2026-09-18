// Module ID: 14969
// Function ID: 14970
// Name: handleOpenUnconfirmedAgeGroupSupportArticle
// Dependencies: [14898, 8643, 2025, 2]
// Exports: handleOpenUnconfirmedAgeGroupSupportArticle

// Module 14969 (handleOpenUnconfirmedAgeGroupSupportArticle)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2025 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8643 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 14898 */;
import size from "module_2" /* 2 */;

const TINY_BRONCO_ARTICLE_ID = TinyBroncoConstants.TINY_BRONCO_ARTICLE_ID;
const result = size.fileFinishedImporting("modules/tiny_bronco/handleOpenUnconfirmedAgeGroupSupportArticle.tsx");

export const handleOpenUnconfirmedAgeGroupSupportArticle = function handleOpenUnconfirmedAgeGroupSupportArticle() {
  const obj = AgeVerificationActionCreatorsDefault;
  obj.openUrl(HelpdeskUtilsDefault.getArticleURL(TINY_BRONCO_ARTICLE_ID));
};
