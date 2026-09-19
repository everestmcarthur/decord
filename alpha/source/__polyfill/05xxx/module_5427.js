// Module ID: 5427
// Function ID: 5428
// Dependencies: [5428, 5429, 5431, 5432, 5433, 5437, 5438, 5439, 5440, 5425]

// Module 5427
import _mod5425 from "module_5425" /* 5425 */;
import _modDef5428 from "module_5428" /* 5428 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5428.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = tmp(5429);
        const findTiffOffsetsResult = tmp(5429).findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5425.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = tmp(5429);
    }
    if (_modDef5428.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = tmp(5431);
        const findJpegOffsetsResult = tmp(5431).findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5425.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = tmp(5431);
    }
    if (_modDef5428.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = tmp(5432);
        const findPngOffsetsResult = tmp(5432).findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5425.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = tmp(5432);
    }
    if (_modDef5428.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = tmp(5433);
        const findHeicOffsetsResult = tmp(5433).findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5425.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = tmp(5433);
    }
    if (_modDef5428.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = tmp(5437);
        const findAvifOffsetsResult = tmp(5437).findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5425.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = tmp(5437);
    }
    if (_modDef5428.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = tmp(5438);
        const findOffsetsResult = tmp(5438).findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5425.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = tmp(5438);
    }
    if (_modDef5428.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = tmp(5439);
        const findOffsetsResult1 = tmp(5439).findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5425.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = tmp(5439);
    }
    if (_modDef5428.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = tmp(5440);
        const findOffsetsResult2 = tmp(5440).findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5425.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = tmp(5440);
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
