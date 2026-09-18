// Module ID: 11041
// Function ID: 11042
// Name: PremiumWishlistItemCard
// Dependencies: [19, 21, 8778, 8779, 2]
// Exports: default

// Module 11041 (PremiumWishlistItemCard)
import SKUPreview from "SKUPreview" /* 8778 */;
import WishlistItemCardBaseDefault from "WishlistItemCardBase" /* 8779 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/native/PremiumWishlistItemCard.tsx");

export default function PremiumWishlistItemCard(size) {
  size = size.size;
  ({ sku, source } = size);
  const merged = Object.assign(size, Object.assign({ sku: 0, source: 0, size: 0 }));
  const items = [size];
  const callback = noop.useCallback(() => jsx(SKUPreview.PremiumSKUPreview, { size }), items);
  const merged1 = Object.assign(merged);
  return jsx(WishlistItemCardBaseDefault, { accessibilityLabel: sku.name, renderPreview: callback, source, size });
};
