// Module ID: 5282
// Function ID: 5283
// Dependencies: [5268, 5283, 5284, 5263]

// Module 5282
import _modDef5268 from "module_5268" /* 5268 */;
import get0thIfdOffset from "get0thIfdOffset" /* 5283 */;
import IFD_TYPE_0TH from "IFD_TYPE_0TH" /* 5284 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;
let c3 = "Exif IFD Pointer";
let c4 = "GPS Info IFD Pointer";
let c5 = "Interoperability IFD Pointer";

export default {
  read(getUint16, c5, arg2) {
    const byteOrder = _modDef5268.getByteOrder(getUint16, c5);
    const obj2 = get0thIfdOffset;
    const ifd = obj2.readIfd(getUint16, IFD_TYPE_0TH.IFD_TYPE_0TH, c5, get0thIfdOffset.get0thIfdOffset(getUint16, c5, byteOrder), byteOrder, arg2);
    let objectAssignResult = ifd;
    if (undefined !== ifd[c3]) {
      const tmp3Result6 = tmp3(5283);
      objectAssignResult = tmp3(5263).objectAssign(ifd, tmp3Result6.readIfd(getUint16, tmp3(5284).IFD_TYPE_EXIF, c5, c5 + ifd[tmp5].value, byteOrder, arg2));
      const tmp3Result = tmp3(5263);
    }
    let objectAssignResult3 = objectAssignResult;
    if (undefined !== objectAssignResult[c4]) {
      const tmp3Result8 = tmp3(5283);
      objectAssignResult3 = tmp3(5263).objectAssign(objectAssignResult, tmp3Result8.readIfd(getUint16, tmp3(5284).IFD_TYPE_GPS, c5, c5 + objectAssignResult[tmp12].value, byteOrder, arg2));
      const tmp3Result7 = tmp3(5263);
    }
    let objectAssignResult4 = objectAssignResult3;
    if (undefined !== objectAssignResult3[c5]) {
      const tmp3Result10 = tmp3(5283);
      objectAssignResult4 = tmp3(5263).objectAssign(objectAssignResult3, tmp3Result10.readIfd(getUint16, tmp3(5284).IFD_TYPE_INTEROPERABILITY, c5, c5 + objectAssignResult3[tmp19].value, byteOrder, arg2));
      const tmp3Result9 = tmp3(5263);
    }
    return { tags: objectAssignResult4, byteOrder };
  }
};
