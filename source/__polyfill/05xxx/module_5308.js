// Module ID: 5308
// Function ID: 5309
// Dependencies: [5285, 5286, 5265]

// Module 5308
import _mod5265 from "module_5265" /* 5265 */;
import get0thIfdOffset from "get0thIfdOffset" /* 5285 */;
import IFD_TYPE_0TH from "IFD_TYPE_0TH" /* 5286 */;

require = arg1;
const dependencyMap = arg6;

export default {
  read(byteLength, sum, arg2, byteOrder, arg4) {
    const ifd = get0thIfdOffset.readIfd(byteLength, IFD_TYPE_0TH.IFD_TYPE_CANON, sum, sum + arg2, byteOrder, arg4);
    let tmp6 = ifd;
    if (ifd.ShotInfo) {
      value = ifd.ShotInfo.value;
      const obj2 = {};
      if (undefined !== value[27]) {
        const obj3 = { value: value[27], description: null };
        let str = "None";
        if (0 !== value[27]) {
          let str2 = "Rotate 90 CW";
          if (1 !== tmp7) {
            let str3 = "Rotate 180";
            if (2 !== tmp7) {
              let str4 = "Unknown";
              if (3 === tmp7) {
                str4 = "Rotate 270 CW";
              }
              str3 = str4;
            }
            str2 = str3;
          }
          str = str2;
        }
        obj3.description = str;
        obj2.AutoRotate = obj3;
      }
      const tmp3Result = _mod5265;
      delete tmp[tmp2];
      tmp6 = _mod5265.objectAssign({}, ifd, obj2);
      const objectAssignResult = _mod5265.objectAssign({}, ifd, obj2);
    }
    return tmp6;
  },
  SHOT_INFO_AUTO_ROTATE: 27
};
