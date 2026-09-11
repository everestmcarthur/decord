// Module ID: 4892
// Function ID: 4893
// Name: ArraySpeciesCreate
// Dependencies: [1282, 4893, 1283, 4894, 4896, 4902, 4856, 4904]

// Module 4892 (ArraySpeciesCreate)
import _mod1282 from "module_1282" /* 1282 */;
import _mod1283 from "module_1283" /* 1283 */;
import _mod4893 from "module_4893" /* 4893 */;

let closure_2 = _mod1282("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod4893(arg1)) {
    if (arg1 >= 0) {
      if (tmp(4894)(arg0)) {
        const tmp3 = tmp(4902)(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = tmp(4856)(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = tmp(4902)(tmp3, tmp4);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return tmp(4896)(arg1);
        } else if (tmp(4904)(tmp6)) {
          const tmp62 = new tmp6(arg1);
          return tmp62;
        } else {
          const tmp11 = new tmp(1283)("C must be a constructor");
          throw tmp11;
        }
        tmp4 = closure_2;
      } else {
        return tmp(4896)(arg1);
      }
    }
  }
  throw new _mod1283("Assertion failed: length must be an integer >= 0");
};
