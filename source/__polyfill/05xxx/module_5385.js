// Module ID: 5385
// Function ID: 5386
// Dependencies: [5386, 5387, 5389, 5390, 5391, 5395, 5396, 5397, 5398, 5383]

// Module 5385
import _mod5383 from "module_5383" /* 5383 */;
import _modDef5386 from "module_5386" /* 5386 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5386.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = tmp(5387);
        const findTiffOffsetsResult = tmp(5387).findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5383.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = tmp(5387);
    }
    if (_modDef5386.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = tmp(5389);
        const findJpegOffsetsResult = tmp(5389).findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5383.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = tmp(5389);
    }
    if (_modDef5386.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = tmp(5390);
        const findPngOffsetsResult = tmp(5390).findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5383.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = tmp(5390);
    }
    if (_modDef5386.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = tmp(5391);
        const findHeicOffsetsResult = tmp(5391).findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5383.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = tmp(5391);
    }
    if (_modDef5386.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = tmp(5395);
        const findAvifOffsetsResult = tmp(5395).findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5383.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = tmp(5395);
    }
    if (_modDef5386.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = tmp(5396);
        const findOffsetsResult = tmp(5396).findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5383.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = tmp(5396);
    }
    if (_modDef5386.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = tmp(5397);
        const findOffsetsResult1 = tmp(5397).findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5383.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = tmp(5397);
    }
    if (_modDef5386.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = tmp(5398);
        const findOffsetsResult2 = tmp(5398).findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5383.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = tmp(5398);
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
