// Module ID: 6648
// Function ID: 6649
// Dependencies: []
// Exports: enableLogging, print

// Module 6648
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
