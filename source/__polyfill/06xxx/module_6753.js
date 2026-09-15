// Module ID: 6753
// Function ID: 6754
// Dependencies: []
// Exports: enableLogging, print

// Module 6753
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
