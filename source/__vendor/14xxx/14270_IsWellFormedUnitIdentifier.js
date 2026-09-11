// Module ID: 14270
// Function ID: 14271
// Name: IsWellFormedUnitIdentifier
// Dependencies: [14267]
// Exports: IsWellFormedUnitIdentifier

// Module 14270 (IsWellFormedUnitIdentifier)
import IsSanctionedSimpleUnitIdentifier from "IsSanctionedSimpleUnitIdentifier" /* 14267 */;

require = arg1;
const dependencyMap = arg6;

export const IsWellFormedUnitIdentifier = function IsWellFormedUnitIdentifier(GetOptionResult3) {
  const str = GetOptionResult3.replace(/([A-Z])/g, (arg0, str) => str.toLowerCase());
  if (IsSanctionedSimpleUnitIdentifier.IsSanctionedSimpleUnitIdentifier(str)) {
    return true;
  } else {
    const parts = str.split("-per-");
    if (2 !== parts.length) {
      return false;
    } else {
      [tmp3, tmp4] = parts;
      if (tmp(14267).IsSanctionedSimpleUnitIdentifier(tmp3)) {
        if (tmp(14267).IsSanctionedSimpleUnitIdentifier(tmp4)) {
          return true;
        }
      }
      return false;
    }
  }
};
