// Module ID: 6721
// Function ID: 6722
// Dependencies: []
// Exports: isFabricInstalled

// Module 6721
const global = arg0;

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
