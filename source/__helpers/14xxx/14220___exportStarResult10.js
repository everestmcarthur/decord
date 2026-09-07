// Module ID: 14220
// Function ID: 14221
// Name: __exportStarResult10
// Dependencies: [14217]

// Module 14220 (__exportStarResult10)
import __exportStarResult7 from "__exportStarResult7" /* 14217 */;

require = arg1;
const dependencyMap = arg6;
arg5.IsWellFormedUnitIdentifier = function IsWellFormedUnitIdentifier(GetOptionResult3) {
  const str = GetOptionResult3.replace(/([A-Z])/g, (arg0, str) => str.toLowerCase());
  if (__exportStarResult7.IsSanctionedSimpleUnitIdentifier(str)) {
    return true;
  } else {
    const parts = str.split("-per-");
    if (2 !== parts.length) {
      return false;
    } else {
      [tmp3, tmp4] = parts;
      if (tmp(14217).IsSanctionedSimpleUnitIdentifier(tmp3)) {
        if (tmp(14217).IsSanctionedSimpleUnitIdentifier(tmp4)) {
          return true;
        }
      }
      return false;
    }
  }
};
