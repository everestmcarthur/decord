// Module ID: 6719
// Function ID: 6720
// Dependencies: []
// Exports: enableLogging, print

// Module 6719
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
