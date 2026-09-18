// Module ID: 18042
// Function ID: 18043
// Name: castSlice
// Dependencies: [10587]

// Module 18042 (castSlice)
import baseSlice from "baseSlice" /* 10587 */;


export default function castSlice(arg0, arg1, arg2) {
  let tmp = arg2;
  if (undefined === arg2) {
    tmp = length;
  }
  if (arg1) {
    let tmp2 = baseSlice(arg0, arg1, tmp);
  } else {
    tmp2 = arg0;
  }
  return tmp2;
};
