// Module ID: 8420
// Function ID: 8421
// Name: useLabFeature
// Dependencies: [8418, 504, 2]
// Exports: default

// Module 8420 (useLabFeature)
import LabFeatureStore from "LabFeatureStore" /* 8418 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/labs/useLabFeature.tsx");

export default function useLabFeature(arg0) {
  _require = arg0;
  const items = [LabFeatureStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => LabFeatureStore.get(closure_0), items1);
};
