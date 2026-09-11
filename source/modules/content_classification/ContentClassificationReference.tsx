// Module ID: 9571
// Function ID: 9572
// Name: ContentClassificationReference
// Dependencies: [5163, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 9571 (ContentClassificationReference)
import utils from "utils" /* 5163 */;
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
