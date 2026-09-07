// Module ID: 17908
// Function ID: 17909
// Name: NativeReactAssetModule
// Dependencies: [17, 1115, 17909, 17910, 2]
// Exports: default

// Module 17908 (NativeReactAssetModule)
import enforcingDefault from "enforcing" /* 17909 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import set from "set" /* 1115 */;

({ Image: obj1, NativeModules } = get_ActivityIndicator);
if (set.isAndroid()) {
  let NativeReactAssetModule = enforcingDefault;
} else {
  NativeReactAssetModule = NativeModules.NativeReactAssetModule;
}
const result = set.fileFinishedImporting("modules/react_asset/native/reactAssetProvider.tsx");

export default function reactAssetProvider() {
  return new Promise((arg0) => {
    closure_0 = arg0;
    closure_3.keysRequest((arr) => {
      const NATIVE_REQUIRED_ASSETS = callback(closure_1_1[3]).NATIVE_REQUIRED_ASSETS;
      closure_1_3.valuesResult(arr.map((arg0) => {
        let str = "";
        if (null != NATIVE_REQUIRED_ASSETS[arg0]) {
          str = closure_1_2.resolveAssetSource(tmp[arg0]).uri;
        }
        return str;
      }));
      NATIVE_REQUIRED_ASSETS(true);
    });
  });
};
