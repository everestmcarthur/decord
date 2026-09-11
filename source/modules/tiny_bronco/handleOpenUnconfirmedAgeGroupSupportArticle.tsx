// Module ID: 14809
// Function ID: 14810
// Name: handleOpenUnconfirmedAgeGroupSupportArticle
// Dependencies: [14738, 8499, 2024, 2]
// Exports: handleOpenUnconfirmedAgeGroupSupportArticle

// Module 14809 (handleOpenUnconfirmedAgeGroupSupportArticle)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8499 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 14738 */;
import size from "module_2" /* 2 */;

const TINY_BRONCO_ARTICLE_ID = TinyBroncoConstants.TINY_BRONCO_ARTICLE_ID;
const result = size.fileFinishedImporting("modules/tiny_bronco/handleOpenUnconfirmedAgeGroupSupportArticle.tsx");

export const handleOpenUnconfirmedAgeGroupSupportArticle = function handleOpenUnconfirmedAgeGroupSupportArticle() {
  const obj = AgeVerificationActionCreatorsDefault;
  obj.openUrl(HelpdeskUtilsDefault.getArticleURL(TINY_BRONCO_ARTICLE_ID));
};
