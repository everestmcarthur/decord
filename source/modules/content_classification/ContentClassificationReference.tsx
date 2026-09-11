// Module ID: 9573
// Function ID: 9574
// Name: ContentClassificationReference
// Dependencies: [5164, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 9573 (ContentClassificationReference)
import utils from "utils" /* 5164 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/content_classification/ContentClassificationReference.tsx");

export const isAgeRestrictedClassificationReference = function isAgeRestrictedClassificationReference(contentClassification) {
  let loaded;
  if (contentClassification != null) {
    loaded = contentClassification.loaded;
  }
  let result = !loaded;
  if (loaded) {
    result = utils.isAgeRestrictedContentClassification(contentClassification.data);
  }
  return result;
};
