// Module ID: 5286
// Function ID: 5287
// Name: IFD_TYPE_0TH
// Dependencies: [5265, 5287, 5289, 5291, 5292, 5268, 5293, 5294, 5295]

// Module 5286 (IFD_TYPE_0TH)
import _modDef5268 from "module_5268" /* 5268 */;
import _modDef5289 from "module_5289" /* 5289 */;
import _modDef5291 from "module_5291" /* 5291 */;
import _modDef5292 from "module_5292" /* 5292 */;
import _modDef5293 from "module_5293" /* 5293 */;
import _modDef5294 from "module_5294" /* 5294 */;
import _modDef5295 from "module_5295" /* 5295 */;
import module_5265 from "module_5265" /* 5265 */;
import decodeXPValue from "decodeXPValue" /* 5287 */;

const objectAssignResult = module_5265.objectAssign({}, decodeXPValue, _modDef5289);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5291, interoperability: _modDef5292, mpf: null, canon: null, pentax: null };
if (_modDef5268.USE_MPF) {
  let importDefaultResult1 = _modDef5293;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5268.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5294;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5268.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5295;
} else {
  importDefaultResult3 = {};
}
obj.pentax = importDefaultResult3;

export default obj;
export const IFD_TYPE_0TH = "0th";
export const IFD_TYPE_1ST = "1st";
export const IFD_TYPE_EXIF = "exif";
export const IFD_TYPE_GPS = "gps";
export const IFD_TYPE_INTEROPERABILITY = "interoperability";
export const IFD_TYPE_MPF = "mpf";
export const IFD_TYPE_CANON = "canon";
export const IFD_TYPE_PENTAX = "pentax";
