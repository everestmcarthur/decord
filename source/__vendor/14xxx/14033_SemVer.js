// Module ID: 14033
// Function ID: 14034
// Name: SemVer
// Dependencies: [14019]

// Module 14033 (SemVer)
import SemVer from "SemVer" /* 14019 */;


export default (arg0, arg1, arg2) => {
  const obj = new SemVer(arg0, arg2);
  return obj.compare(new SemVer(arg1, arg2));
};
