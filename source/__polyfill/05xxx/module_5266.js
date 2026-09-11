// Module ID: 5266
// Function ID: 5267
// Dependencies: [5267, 5268, 5270, 5271, 5272, 5276, 5277, 5278, 5279, 5264]

// Module 5266
import _mod5264 from "module_5264" /* 5264 */;
import _modDef5267 from "module_5267" /* 5267 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5267.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = tmp(5268);
        const findTiffOffsetsResult = tmp(5268).findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5264.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = tmp(5268);
    }
    if (_modDef5267.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = tmp(5270);
        const findJpegOffsetsResult = tmp(5270).findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5264.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = tmp(5270);
    }
    if (_modDef5267.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = tmp(5271);
        const findPngOffsetsResult = tmp(5271).findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5264.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = tmp(5271);
    }
    if (_modDef5267.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = tmp(5272);
        const findHeicOffsetsResult = tmp(5272).findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5264.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = tmp(5272);
    }
    if (_modDef5267.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = tmp(5276);
        const findAvifOffsetsResult = tmp(5276).findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5264.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = tmp(5276);
    }
    if (_modDef5267.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = tmp(5277);
        const findOffsetsResult = tmp(5277).findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5264.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = tmp(5277);
    }
    if (_modDef5267.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = tmp(5278);
        const findOffsetsResult1 = tmp(5278).findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5264.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = tmp(5278);
    }
    if (_modDef5267.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = tmp(5279);
        const findOffsetsResult2 = tmp(5279).findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5264.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = tmp(5279);
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
