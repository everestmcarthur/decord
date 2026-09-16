// Module ID: 6758
// Function ID: 6759
// Dependencies: []
// Exports: isFabricInstalled

// Module 6758
const global = arg0;

export const isFabricInstalled = function isFabricInstalled() {
  let prop;
  if (global != null) {
    prop = global.nativeFabricUIManager;
  }
  return null != prop;
};
