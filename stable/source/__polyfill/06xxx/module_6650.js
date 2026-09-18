// Module ID: 6650
// Function ID: 6651
// Dependencies: []
// Exports: isFabricInstalled

// Module 6650
const global = arg0;

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
