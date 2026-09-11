// Module ID: 6720
// Function ID: 6721
// Dependencies: []
// Exports: enableLogging, print

// Module 6720
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
