// Module ID: 17949
// Function ID: 17950
// Name: castSlice
// Dependencies: [10493]

// Module 17949 (castSlice)
import baseSlice from "baseSlice" /* 10493 */;


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
