// Module ID: 5215
// Function ID: 5216
// Dependencies: [5216, 5217, 5219, 5220, 5221, 5225, 5226, 5227, 5228, 5213]

// Module 5215
import _mod5213 from "module_5213" /* 5213 */;
import _modDef5216 from "module_5216" /* 5216 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5216.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = tmp(5217);
        const findTiffOffsetsResult = tmp(5217).findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5213.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = tmp(5217);
    }
    if (_modDef5216.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = tmp(5219);
        const findJpegOffsetsResult = tmp(5219).findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5213.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = tmp(5219);
    }
    if (_modDef5216.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = tmp(5220);
        const findPngOffsetsResult = tmp(5220).findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5213.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = tmp(5220);
    }
    if (_modDef5216.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = tmp(5221);
        const findHeicOffsetsResult = tmp(5221).findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5213.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = tmp(5221);
    }
    if (_modDef5216.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = tmp(5225);
        const findAvifOffsetsResult = tmp(5225).findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5213.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = tmp(5225);
    }
    if (_modDef5216.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = tmp(5226);
        const findOffsetsResult = tmp(5226).findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5213.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = tmp(5226);
    }
    if (_modDef5216.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = tmp(5227);
        const findOffsetsResult1 = tmp(5227).findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5213.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = tmp(5227);
    }
    if (_modDef5216.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = tmp(5228);
        const findOffsetsResult2 = tmp(5228).findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5213.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = tmp(5228);
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};
