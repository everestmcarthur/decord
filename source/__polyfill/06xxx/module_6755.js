// Module ID: 6755
// Function ID: 6756
// Dependencies: []
// Exports: isFabricInstalled

// Module 6755
const global = arg0;

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
