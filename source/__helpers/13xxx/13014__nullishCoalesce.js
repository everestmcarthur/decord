// Module ID: 13014
// Function ID: 13015
// Name: _nullishCoalesce
// Dependencies: []
// Exports: _nullishCoalesce

// Module 13014 (_nullishCoalesce)

export const _nullishCoalesce = function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
};
