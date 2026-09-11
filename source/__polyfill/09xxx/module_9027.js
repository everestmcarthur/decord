// Module ID: 9027
// Function ID: 9028
// Dependencies: [9028, 9029, 9030, 9032, 9033, 9035, 9031, 9034, 9037, 9087, 9036, 9088, 9089, 9090, 9091, 9092]

// Module 9027
import _mod9028 from "module_9028" /* 9028 */;
import _mod9029 from "module_9029" /* 9029 */;
import _mod9030 from "module_9030" /* 9030 */;
import _mod9031 from "module_9031" /* 9031 */;
import _mod9032 from "module_9032" /* 9032 */;
import _mod9033 from "module_9033" /* 9033 */;
import _mod9034 from "module_9034" /* 9034 */;
import _mod9035 from "module_9035" /* 9035 */;
import Doc from "Doc" /* 9036 */;
import ar from "ar" /* 9037 */;
import $output from "$output" /* 9087 */;
import _mod9088 from "module_9088" /* 9088 */;
import initializeContext from "initializeContext" /* 9089 */;
import _mod9092 from "module_9092" /* 9092 */;

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
    fn(_mod9028, exports);
    fn(_mod9029, exports);
    fn(_mod9030, exports);
    fn(_mod9032, exports);
    fn(_mod9033, exports);
    fn(_mod9035, exports);
    exports.util = fn2(_mod9031);
    exports.regexes = fn2(_mod9034);
    exports.locales = fn2(ar);
    fn($output, exports);
    fn(Doc, exports);
    fn(_mod9088, exports);
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
    exports.JSONSchema = fn2(_mod9092);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
