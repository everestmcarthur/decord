// Module ID: 5320
// Function ID: 5321
// Dependencies: [5306, 5321, 5322, 5301]

// Module 5320
import _modDef5306 from "module_5306" /* 5306 */;
import get0thIfdOffset from "get0thIfdOffset" /* 5321 */;
import IFD_TYPE_0TH from "IFD_TYPE_0TH" /* 5322 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;
let c3 = "Exif IFD Pointer";
let c4 = "GPS Info IFD Pointer";
let c5 = "Interoperability IFD Pointer";

export default {
  read(getUint16, c5, arg2) {
    const byteOrder = _modDef5306.getByteOrder(getUint16, c5);
    const obj2 = get0thIfdOffset;
    const ifd = obj2.readIfd(getUint16, IFD_TYPE_0TH.IFD_TYPE_0TH, c5, get0thIfdOffset.get0thIfdOffset(getUint16, c5, byteOrder), byteOrder, arg2);
    let objectAssignResult = ifd;
    if (undefined !== ifd[c3]) {
      const tmp3Result6 = tmp3(5321);
      objectAssignResult = tmp3(5301).objectAssign(ifd, tmp3Result6.readIfd(getUint16, tmp3(5322).IFD_TYPE_EXIF, c5, c5 + ifd[tmp5].value, byteOrder, arg2));
      const tmp3Result = tmp3(5301);
    }
    let objectAssignResult3 = objectAssignResult;
    if (undefined !== objectAssignResult[c4]) {
      const tmp3Result8 = tmp3(5321);
      objectAssignResult3 = tmp3(5301).objectAssign(objectAssignResult, tmp3Result8.readIfd(getUint16, tmp3(5322).IFD_TYPE_GPS, c5, c5 + objectAssignResult[tmp12].value, byteOrder, arg2));
      const tmp3Result7 = tmp3(5301);
    }
    let objectAssignResult4 = objectAssignResult3;
    if (undefined !== objectAssignResult3[c5]) {
      const tmp3Result10 = tmp3(5321);
      objectAssignResult4 = tmp3(5301).objectAssign(objectAssignResult3, tmp3Result10.readIfd(getUint16, tmp3(5322).IFD_TYPE_INTEROPERABILITY, c5, c5 + objectAssignResult3[tmp19].value, byteOrder, arg2));
      const tmp3Result9 = tmp3(5301);
    }
    return { tags: objectAssignResult4, byteOrder };
  }
};
