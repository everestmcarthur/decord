// Module ID: 6700
// Function ID: 6701
// Dependencies: []
// Exports: isFabricInstalled

// Module 6700
const global = arg0;

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
