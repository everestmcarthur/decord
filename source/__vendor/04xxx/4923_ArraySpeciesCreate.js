// Module ID: 4923
// Function ID: 4924
// Name: ArraySpeciesCreate
// Dependencies: [1281, 4924, 1282, 4925, 4927, 4933, 4887, 4935]

// Module 4923 (ArraySpeciesCreate)
import _mod1281 from "module_1281" /* 1281 */;
import _mod1282 from "module_1282" /* 1282 */;
import _mod4924 from "module_4924" /* 4924 */;

let closure_2 = _mod1281("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod4924(arg1)) {
    if (arg1 >= 0) {
      if (tmp(4925)(arg0)) {
        const tmp3 = tmp(4933)(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = tmp(4887)(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = tmp(4933)(tmp3, tmp4);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return tmp(4927)(arg1);
        } else if (tmp(4935)(tmp6)) {
          const tmp62 = new tmp6(arg1);
          return tmp62;
        } else {
          const tmp11 = new tmp(1282)("C must be a constructor");
          throw tmp11;
        }
        tmp4 = closure_2;
      } else {
        return tmp(4927)(arg1);
      }
    }
  }
  throw new _mod1282("Assertion failed: length must be an integer >= 0");
};
