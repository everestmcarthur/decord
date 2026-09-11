// Module ID: 6722
// Function ID: 6723
// Dependencies: []
// Exports: isFabricInstalled

// Module 6722
const global = arg0;

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
