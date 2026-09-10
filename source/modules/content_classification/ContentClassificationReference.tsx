// Module ID: 9550
// Function ID: 9551
// Name: ContentClassificationReference
// Dependencies: [5162, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 9550 (ContentClassificationReference)
import utils from "utils" /* 5162 */;
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
