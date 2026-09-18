// Module ID: 8941
// Function ID: 8942
// Dependencies: [8942, 8943, 8944, 8946, 8947, 8949, 8945, 8948, 8951, 9001, 8950, 9002, 9003, 9004, 9005, 9006]

// Module 8941
import _mod8942 from "module_8942" /* 8942 */;
import _mod8943 from "module_8943" /* 8943 */;
import _mod8944 from "module_8944" /* 8944 */;
import _mod8945 from "module_8945" /* 8945 */;
import _mod8946 from "module_8946" /* 8946 */;
import _mod8947 from "module_8947" /* 8947 */;
import _mod8948 from "module_8948" /* 8948 */;
import _mod8949 from "module_8949" /* 8949 */;
import Doc from "Doc" /* 8950 */;
import ar from "ar" /* 8951 */;
import $output from "$output" /* 9001 */;
import _mod9002 from "module_9002" /* 9002 */;
import initializeContext from "initializeContext" /* 9003 */;
import _mod9006 from "module_9006" /* 9006 */;

const require = globalThis.__r;

const self = this;
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let __setModuleDefault = self;
  if (self) {
    __setModuleDefault = self.__setModuleDefault;
  }
  if (__setModuleDefault) {
    let fn = self;
    if (self) {
      fn = self.__exportStar;
    }
    if (!fn) {
      fn = (obj, exports) => {
        for (const key10007 in arg0) {
          let tmp6 = "default" === key10007;
          if (tmp6) {
            if (tmp6) {
              continue;
            } else {
              let tmp4 = self2(arg1, arg0, key10007);
              continue;
            }
            continue;
          } else {
            let _Object = Object;
            hasOwnProperty = Object.prototype.hasOwnProperty;
            let call = hasOwnProperty.call;
            if (typeof call === "unknown") {
              let hasOwnPropertyResult = hasOwnProperty(key10007);
            } else {
              hasOwnPropertyResult = call(arg1, key10007);
            }
          }
        }
      };
    }
    let fn2 = self;
    if (self) {
      fn2 = self.__importStar;
    }
    if (!fn2) {
      fn2 = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        const obj = {};
        if (null != __esModule) {
          for (const key10009 in arg0) {
            let tmp9 = "default" !== key10009;
            if (!tmp9) {
              if (!tmp9) {
                continue;
              } else {
                let tmp6 = self2(obj, arg0, key10009);
                continue;
              }
              continue;
            } else {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10009);
              } else {
                hasOwnPropertyResult = call(arg0, key10009);
              }
            }
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    const _Object3 = Object;
    exports.util = undefined;
    exports.regexes = undefined;
    exports.locales = undefined;
    exports.toJSONSchema = undefined;
    exports.JSONSchemaGenerator = undefined;
    exports.JSONSchema = undefined;
    fn(_mod8942, exports);
    fn(_mod8943, exports);
    fn(_mod8944, exports);
    fn(_mod8946, exports);
    fn(_mod8947, exports);
    fn(_mod8949, exports);
    exports.util = fn2(_mod8945);
    exports.regexes = fn2(_mod8948);
    exports.locales = fn2(ar);
    fn($output, exports);
    fn(Doc, exports);
    fn(_mod9002, exports);
    fn(initializeContext, exports);
    const _Object4 = Object;
    let obj = {
      enumerable: true,
      get() {
            return require("stringProcessor").toJSONSchema;
          }
    };
    Object.defineProperty(exports, "toJSONSchema", obj);
    const _Object5 = Object;
    const obj2 = {
      enumerable: true,
      get() {
            return require("JSONSchemaGenerator").JSONSchemaGenerator;
          }
    };
    Object.defineProperty(exports, "JSONSchemaGenerator", obj2);
    exports.JSONSchema = fn2(_mod9006);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
