// Module ID: 11386
// Function ID: 11387
// Name: nativeTypeMatches
// Dependencies: []
// Exports: safeValidate

// Module 11386 (nativeTypeMatches)
function nativeTypeMatches(arg0, arg1) {

}

export const safeValidate = (arr, nativeType) => {
  nativeType = nativeType.nativeType;
  return arr.some((item) => {
    if (typeof nativeTypeMatches === "function") {
      let flag = true;
      if (item !== obj) {
        flag = true;
        if ("*/*" !== item) {
          flag = false;
          if (null !== obj) {
            flag = false;
            if (item.endsWith("/*")) {
              flag = false;
              if (obj.startsWith(item.slice(0, -2))) {
                flag = true;
              }
            }
          }
        }
      }
      return flag;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
};
