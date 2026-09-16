// Module ID: 6756
// Function ID: 6757
// Dependencies: []
// Exports: enableLogging, print

// Module 6756
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
