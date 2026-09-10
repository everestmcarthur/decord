// Module ID: 5229
// Function ID: 5230
// Dependencies: [5230, 5231, 5233, 5234, 5235, 5239, 5240, 5241, 5242, 5227]

// Module 5229
import _mod5227 from "module_5227" /* 5227 */;
import _modDef5230 from "module_5230" /* 5230 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5230.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = tmp(5231);
        const findTiffOffsetsResult = tmp(5231).findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5227.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = tmp(5231);
    }
    if (_modDef5230.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = tmp(5233);
        const findJpegOffsetsResult = tmp(5233).findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5227.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = tmp(5233);
    }
    if (_modDef5230.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = tmp(5234);
        const findPngOffsetsResult = tmp(5234).findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5227.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = tmp(5234);
    }
    if (_modDef5230.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = tmp(5235);
        const findHeicOffsetsResult = tmp(5235).findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5227.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = tmp(5235);
    }
    if (_modDef5230.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = tmp(5239);
        const findAvifOffsetsResult = tmp(5239).findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5227.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = tmp(5239);
    }
    if (_modDef5230.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = tmp(5240);
        const findOffsetsResult = tmp(5240).findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5227.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = tmp(5240);
    }
    if (_modDef5230.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = tmp(5241);
        const findOffsetsResult1 = tmp(5241).findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5227.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = tmp(5241);
    }
    if (_modDef5230.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = tmp(5242);
        const findOffsetsResult2 = tmp(5242).findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5227.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = tmp(5242);
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
