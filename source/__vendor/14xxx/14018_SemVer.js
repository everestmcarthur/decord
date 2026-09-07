// Module ID: 14018
// Function ID: 14019
// Name: SemVer
// Dependencies: [14019]

// Module 14018 (SemVer)
import SemVer from "SemVer" /* 14019 */;


export default (arg0, arg1) => {
  if (arg0 instanceof SemVer) {
    return arg0;
  } else {
    try {
      const tmp8 = new SemVer(arg0, arg1);
      return tmp8;
    } catch (tmp10) {
      if (tmp) {
        throw tmp10;
      } else {
        return null;
      }
    }
  }
};
