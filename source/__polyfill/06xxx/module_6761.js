// Module ID: 6761
// Function ID: 6762
// Dependencies: []
// Exports: isFabricInstalled

// Module 6761
const global = arg0;

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
