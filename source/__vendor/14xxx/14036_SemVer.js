// Module ID: 14036
// Function ID: 14037
// Name: SemVer
// Dependencies: [14019]

// Module 14036 (SemVer)
import SemVer from "SemVer" /* 14019 */;


export default (arg0, arg1, arg2) => {
  const obj = new SemVer(arg0, arg2);
  const tmp = new SemVer(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
