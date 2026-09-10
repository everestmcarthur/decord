// Module ID: 9340
// Function ID: 9341
// Name: heicPreConvert
// Dependencies: [32, 5, 5142, 5185, 5280, 1896, 5186, 5171, 2]
// Exports: maybePreConvertHeicItem

// Module 9340 (heicPreConvert)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import Upload from "Upload" /* 5142 */;
import heicFilename from "heicFilename" /* 5185 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
function itemNeedsHeicPreConversion(file) {
  let isHeicFileResult = file.platform === Upload.UploadPlatform.WEB;
  if (isHeicFileResult) {
    isHeicFileResult = true !== file.heicConversionEvaluated;
  }
  if (isHeicFileResult) {
    isHeicFileResult = null != file.file;
  }
  if (isHeicFileResult) {
    isHeicFileResult = heicFilename.isHeicFile(file.file);
    const tmpResult = heicFilename;
  }
  return isHeicFileResult;
}
let closure_5 = async function _maybePreConvertHeicItem(arg0, value) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_5 = tmp3;
          closure_4 = tmp7;
          closure_132_0 = closure_0;
          closure_132_1 = undefined;
          closure_132_2 = undefined;
          closure_132_3 = undefined;
          closure_132_4 = undefined;
          closure_132_5 = undefined;
          closure_132_6 = undefined;
          closure_132_7 = undefined;
          closure_132_8 = undefined;
          let config;
          let file2;
          closure_132_11 = undefined;
          closure_132_12 = undefined;
          closure_132_13 = undefined;
          closure_132_14 = undefined;
          closure_132_15 = undefined;
          if (itemNeedsHeicPreConversion(closure_0)) {
            c6 = 1;
            const items = [asyncRequireImpl(dependencyMap[4], dependencyMap.paths), asyncRequireImpl(dependencyMap[6], dependencyMap.paths), asyncRequireImpl(dependencyMap[7], dependencyMap.paths)];
            c7 = 2;
            c8 = 1;
            const obj4 = { value: Promise.all(items), done: false };
            return obj4;
          } else {
            c8 = 3;
            const obj5 = { value: tmp111, done: true };
            return obj5;
          }
          tmp111 = closure_0;
        }
      } else if (1 === tmp7) {
        c6 = 0;
        c8 = 3;
        const obj6 = { value: closure_132_0, done: true };
        return obj6;
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_132_1 = value;
          closure_132_2 = closure_133_2(closure_132_1, 3);
          closure_132_3 = closure_132_2[0];
          closure_132_4 = closure_132_3.maybeConvertHeicToJpeg;
          closure_132_5 = closure_132_3.renameToJpegExtension;
          closure_132_6 = closure_132_3.HeicConversionFailureReason;
          closure_132_7 = closure_132_2[1].HeicUploadConversionExperiment;
          closure_132_8 = closure_132_2[2].default;
          config = closure_132_7.getConfig({ location: "heicPreConvert.maybePreConvertHeicItem" });
          if (config.enabled) {
            file2 = tmp110.file;
            c7 = 3;
            c8 = 1;
            const obj8 = { value: closure_132_4(file2, config.quality, config.maxFileSizeBytes), done: false };
            return obj8;
          } else {
            const obj9 = {};
            const merged = Object.assign(tmp110);
            obj9.heicConversionEvaluated = true;
            c6 = 0;
            c8 = 3;
            const obj10 = { value: obj9, done: true };
            return obj10;
          }
        }
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          closure_132_11 = value;
          if (null != closure_132_11) {
            if (closure_132_11.success) {
              if (null != closure_132_11.convertedBlob) {
                const _File = File;
                const items1 = [closure_132_11.convertedBlob];
                const obj12 = { type: "image/jpeg", lastModified: file2.lastModified };
                const file = new File(items1, closure_132_5(file2.name), obj12);
                closure_132_13 = file;
                c7 = 4;
                c8 = 1;
                const obj13 = { value: closure_132_8.fromBlob(file2).catch(() => null), done: false };
                return obj13;
              }
            }
          }
          let tmp39;
          if (null != closure_132_11) {
            const reason = closure_132_11.reason;
            let UNKNOWN_ERROR = reason;
            if (reason == null) {
              UNKNOWN_ERROR = closure_132_6.UNKNOWN_ERROR;
            }
            const obj14 = { convertedMimeType: null, conversionFailureReason: UNKNOWN_ERROR, compressTimeMs: closure_132_11.compressTimeMs };
            tmp39 = obj14;
          }
          closure_132_12 = tmp39;
          const obj15 = {};
          const merged1 = Object.assign(closure_132_0);
          obj15.heicConversionEvaluated = true;
          obj15.heicConversionAnalytics = closure_132_12;
          c6 = 0;
          c8 = 3;
          const obj16 = { value: obj15, done: true };
          return obj16;
        }
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        const obj17 = { value, done: true };
        return obj17;
      } else {
        c1 = value;
        if (value == null) {
          c1 = undefined;
        }
        closure_132_14 = c1;
        const compressionMetadata = closure_132_0.compressionMetadata;
        let originalContentType1;
        if (compressionMetadata != null) {
          originalContentType1 = compressionMetadata.originalContentType;
        }
        if (null != originalContentType1) {
          if ("" !== closure_132_0.compressionMetadata.originalContentType) {
            let originalContentType = closure_132_0.compressionMetadata.originalContentType;
          }
          const obj18 = { originalContentType, preCompressionSize: null };
          const compressionMetadata2 = closure_132_0.compressionMetadata;
          let preCompressionSize;
          if (compressionMetadata2 != null) {
            preCompressionSize = compressionMetadata2.preCompressionSize;
          }
          let size = preCompressionSize;
          if (preCompressionSize == null) {
            size = file2.size;
          }
          obj18.preCompressionSize = size;
          closure_132_15 = obj18;
          const obj19 = {};
          const merged2 = Object.assign(closure_132_0);
          obj19.file = closure_132_13;
          obj19.compressionMetadata = closure_132_15;
          obj19.originalMd5 = closure_132_14;
          obj19.heicConversionEvaluated = true;
          const obj20 = { convertedMimeType: "image/jpeg", compressTimeMs: closure_132_11.compressTimeMs };
          obj19.heicConversionAnalytics = obj20;
          c6 = 0;
          c8 = 3;
          const obj21 = { value: obj19, done: true };
          return obj21;
        }
        originalContentType = closure_133_0(closure_133_1[3]).heicMimeType(file2);
        const obj = closure_133_0(closure_133_1[3]);
      }
    } catch (tmp72) {
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp72;
      } else {
        c7 = tmp;
      }
    }
  }
};
let size = fn(2);
const result = size.fileFinishedImporting("lib/uploader/heicPreConvert.tsx");

export { itemNeedsHeicPreConversion };
export const maybePreConvertHeicItem = function maybePreConvertHeicItem() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
