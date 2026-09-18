// Module ID: 11822
// Function ID: 11823
// Name: GiftIntentMessagePlaceholder
// Dependencies: [1114, 2]
// Exports: getGiftIntentCustomMessagePlaceholder

// Module 11822 (GiftIntentMessagePlaceholder)
import util from "util" /* 1114 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/GiftIntentMessagePlaceholder.tsx");

export const getGiftIntentCustomMessagePlaceholder = function getGiftIntentCustomMessagePlaceholder() {
  const intl = util.intl;
  return intl.string(util.t.OrwKgi);
};
