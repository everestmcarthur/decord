// Module ID: 14191
// Function ID: 14192
// Name: SKUListing
// Dependencies: [2]

// Module 14191 (SKUListing)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/SKUListing.tsx");

export default function SKUListing(skuId, skuFeatures) {
  const obj = Object.create(new.target.prototype);
  obj.skuId = skuId;
  obj.skuFeatures = skuFeatures;
  return obj;
}.prototype;
