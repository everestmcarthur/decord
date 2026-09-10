// Module ID: 9512
// Function ID: 9513
// Name: ContentClassificationReference
// Dependencies: [5126, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 9512 (ContentClassificationReference)
import utils from "utils" /* 5126 */;
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
