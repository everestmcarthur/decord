// Module ID: 14757
// Function ID: 14758
// Name: handleOpenAgeGatedContentSupportArticle
// Dependencies: [14686, 8412, 2024, 2]
// Exports: handleOpenAgeGatedContentSupportArticle

// Module 14757 (handleOpenAgeGatedContentSupportArticle)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8412 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 14686 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SUPPORT_ARTICLE_ID;
const result = size.fileFinishedImporting("modules/tiny_bronco/handleOpenAgeGatedContentSupportArticle.tsx");

export const handleOpenAgeGatedContentSupportArticle = function handleOpenAgeGatedContentSupportArticle() {
  const obj = AgeVerificationActionCreatorsDefault;
  obj.openUrl(HelpdeskUtilsDefault.getArticleURL(closure_2));
};
