// Module ID: 5300
// Function ID: 5301
// Dependencies: [5301, 5302, 5304, 5305, 5306, 5310, 5311, 5312, 5313, 5298]

// Module 5300
import _mod5298 from "module_5298" /* 5298 */;
import _modDef5301 from "module_5301" /* 5301 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5301.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = tmp(5302);
        const findTiffOffsetsResult = tmp(5302).findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5298.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = tmp(5302);
    }
    if (_modDef5301.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = tmp(5304);
        const findJpegOffsetsResult = tmp(5304).findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5298.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = tmp(5304);
    }
    if (_modDef5301.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = tmp(5305);
        const findPngOffsetsResult = tmp(5305).findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5298.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = tmp(5305);
    }
    if (_modDef5301.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = tmp(5306);
        const findHeicOffsetsResult = tmp(5306).findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5298.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = tmp(5306);
    }
    if (_modDef5301.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = tmp(5310);
        const findAvifOffsetsResult = tmp(5310).findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5298.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = tmp(5310);
    }
    if (_modDef5301.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = tmp(5311);
        const findOffsetsResult = tmp(5311).findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5298.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = tmp(5311);
    }
    if (_modDef5301.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = tmp(5312);
        const findOffsetsResult1 = tmp(5312).findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5298.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = tmp(5312);
    }
    if (_modDef5301.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = tmp(5313);
        const findOffsetsResult2 = tmp(5313).findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5298.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = tmp(5313);
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
