// Module ID: 6887
// Function ID: 6888
// Dependencies: []
// Exports: isFabricInstalled

// Module 6887
const global = arg0;

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
