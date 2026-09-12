// Module ID: 13050
// Function ID: 13051
// Name: _nullishCoalesce
// Dependencies: []
// Exports: _nullishCoalesce

// Module 13050 (_nullishCoalesce)

export const _nullishCoalesce = function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
};
