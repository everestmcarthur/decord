// Module ID: 16486
// Function ID: 16487
// Name: useICYMITabBadge
// Dependencies: [8453, 504, 2]
// Exports: default, icymiTabBadgeShown

// Module 16486 (useICYMITabBadge)
import initialize from "initialize" /* 504 */;
import ICYMIStore from "ICYMIStore" /* 8453 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/useICYMITabBadge.tsx");

export default function useICYMITabBadge() {
  const obj = { value: 0, showDot: null };
  const items = [ICYMIStore];
  obj.showDot = initialize.useStateFromStores(items, () => ICYMIStore.hasNewContent(), []);
  return obj;
};
export const icymiTabBadgeShown = function icymiTabBadgeShown() {
  return ICYMIStore.hasNewContent();
};
