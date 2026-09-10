// Module ID: 6662
// Function ID: 6663
// Dependencies: []
// Exports: enableLogging, print

// Module 6662
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
