// Module ID: 13984
// Function ID: 13985
// Name: set
// Dependencies: [2]

// Module 13984 (set)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/premium/PremiumSKUFeature.tsx");

export default function PremiumSKUFeature(name, getFeatureValue, description) {
  let obj = Object.create(new.target.prototype);
  obj.name = name;
  obj.description = description;
  obj.getFeatureValue = getFeatureValue;
  obj = { value: getFeatureValue, configurable: false, writable: false };
  Object.defineProperty(obj, "getFeatureValue", obj);
  return obj;
}.prototype;
