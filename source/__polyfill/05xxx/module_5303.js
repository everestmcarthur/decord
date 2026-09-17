// Module ID: 5303
// Function ID: 5304
// Dependencies: [5304, 5305, 5307, 5308, 5309, 5313, 5314, 5315, 5316, 5301]

// Module 5303
import _mod5301 from "module_5301" /* 5301 */;
import _modDef5304 from "module_5304" /* 5304 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5304.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = tmp(5305);
        const findTiffOffsetsResult = tmp(5305).findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5301.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = tmp(5305);
    }
    if (_modDef5304.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = tmp(5307);
        const findJpegOffsetsResult = tmp(5307).findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5301.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = tmp(5307);
    }
    if (_modDef5304.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = tmp(5308);
        const findPngOffsetsResult = tmp(5308).findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5301.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = tmp(5308);
    }
    if (_modDef5304.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = tmp(5309);
        const findHeicOffsetsResult = tmp(5309).findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5301.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = tmp(5309);
    }
    if (_modDef5304.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = tmp(5313);
        const findAvifOffsetsResult = tmp(5313).findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5301.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = tmp(5313);
    }
    if (_modDef5304.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = tmp(5314);
        const findOffsetsResult = tmp(5314).findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5301.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = tmp(5314);
    }
    if (_modDef5304.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = tmp(5315);
        const findOffsetsResult1 = tmp(5315).findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5301.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = tmp(5315);
    }
    if (_modDef5304.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = tmp(5316);
        const findOffsetsResult2 = tmp(5316).findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5301.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = tmp(5316);
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
