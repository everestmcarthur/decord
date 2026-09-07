// Module ID: 16679
// Function ID: 16680
// Name: createSearchResultLinkPreviewReactRules
// Dependencies: [10122, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 16679 (createSearchResultLinkPreviewReactRules)
import set from "set" /* 2 */;
import defaultReactFn from "defaultReactFn" /* 10122 */;

const result = set.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  return defaultReactFn.createMessagePreviewReactRules({ customEmojiSize: 16 });
};
