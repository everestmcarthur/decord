// Module ID: 84
// Function ID: 85
// Dependencies: []

// Module 84
let closure_0 = [];

export default {
  registerAsset(arg0) {
    return closure_0.push(arg0);
  },
  getAssetByID(source) {
    return closure_0[source - 1];
  }
};
