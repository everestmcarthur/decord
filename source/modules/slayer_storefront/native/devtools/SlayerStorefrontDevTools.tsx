// Module ID: 15753
// Function ID: 15754
// Name: SlayerStorefrontDevTools
// Dependencies: [5, 32, 19, 17, 1371, 5524, 21, 4574, 576, 6995, 504, 10848, 10829, 4987, 5701, 6620, 5619, 4989, 2]
// Exports: default

// Module 15753 (SlayerStorefrontDevTools)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6995 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import SKUStore from "SKUStore" /* 5524 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4574);
let obj2 = { wrap: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16 }, inputRow: null, buttons: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.inputRow = { padding: nativeDefault.space.PX_12 };
let obj4 = { padding: nativeDefault.space.PX_12 };
obj2.buttons = { padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/slayer_storefront/native/devtools/SlayerStorefrontDevTools.tsx");

export default function SlayerStorefrontDevTools() {
  const tmp = closure_12();
  [str, tmp4] = callback(noop.useState(""), 2);
  const trimmed = str.trim();
  _require = trimmed;
  const tmp3 = callback(noop.useState(""), 2);
  const items = [SKUStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    value = undefined;
    if (length.length > 0) {
      value = SKUStore.get(tmp);
    }
    return value;
  });
  let obj = require("initialize");
  [tmp8, importDefault] = callback(noop.useState(false), 2);
  const tmp7 = callback(noop.useState(false), 2);
  [tmp10, dependencyMap] = callback(noop.useState(null), 2);
  const tmp9 = callback(noop.useState(null), 2);
  const items1 = [UserStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => currentUser.getCurrentUser());
  _require = stateFromStores1(function*(arg0, value) {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_129_0 = length;
            if (0 !== length.length) {
              tmp3(null);
              tmp5(true);
              c4 = 1;
              c5 = 2;
              c6 = 1;
              const obj5 = { value: length(10848).fetchSKU(length), done: false };
              return obj5;
            } else {
              c6 = 3;
            }
          }
        } else if (1 === tmp8) {
          c4 = 0;
          closure_129_1 = closure_3;
          const _Error = Error;
          if (closure_129_1 instanceof Error) {
            let message = closure_129_1.message;
          } else {
            const _String = String;
            message = String(closure_129_1);
          }
          tmp3(message);
          tmp5(false);
          c6 = 3;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c4 = 0;
          tmp5(false);
          closure_129_0(length);
        }
        c4 = 0;
        c6 = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp36) {
        closure_3 = tmp36;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp36;
        } else {
          c5 = tmp;
        }
      }
    }
  });
  const items2 = [trimmed];
  callback = noop.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  const items3 = [callback];
  const items4 = [callback, stateFromStores1];
  const callback1 = noop.useCallback(() => {
    callback((skuId) => {
      const result = length(dependencyMap[12]).openSocialLayerStorefrontProductSelfPurchaseSuccessModal({ skuId });
    });
  }, items3);
  let obj3 = { style: tmp.wrap, contentContainerStyle: null, children: null };
  let obj4 = { paddingVertical: null, paddingBottom: null };
  const callback2 = noop.useCallback(() => {
    callback((skuId) => {
      const obj2 = { skuId, recipient: stateFromStores1 };
      const result = closure_0(10829).openSocialLayerStorefrontProductGiftPurchaseSuccessModal(obj2);
    });
  }, items4);
  obj4.paddingVertical = nativeDefault.space.PX_16;
  obj4.paddingBottom = nativeDefault.space.PX_16 + useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom;
  obj3.contentContainerStyle = obj4;
  let obj2 = require("initialize");
  const tmp16 = closure_6;
  const items5 = [closure_10(closure_7, { style: tmp.inputRow, children: closure_10(require("TextInput").TextInput, { label: "SKU ID", value: str, onChange: tmp4, placeholder: "1234567890123456789", autoCapitalize: "none", autoCorrect: false, keyboardType: "number-pad" }) }), , , ];
  let str2;
  if (stateFromStores != null) {
    str2 = stateFromStores.name;
  }
  if (str2 == null) {
    str2 = "Not loaded";
  }
  let obj5 = { style: tmp.inputRow, children: closure_10(require("TextInput").TextInput, { label: "SKU ID", value: str, onChange: tmp4, placeholder: "1234567890123456789", autoCapitalize: "none", autoCorrect: false, keyboardType: "number-pad" }) };
  const tmp18 = closure_7;
  items5[1] = closure_10(require("TableRow").TableRow, { label: "Name: " + str2 });
  let str3;
  if (stateFromStores != null) {
    str3 = stateFromStores.applicationId;
  }
  if (str3 == null) {
    str3 = "N/A";
  }
  const obj6 = { label: "Name: " + str2 };
  items5[2] = closure_10(require("TableRow").TableRow, { label: "Application ID: " + str3 });
  let tmp15Result = null != tmp10;
  if (tmp15Result) {
    const obj8 = { label: null };
    const _HermesInternal = HermesInternal;
    obj8.label = "Fetch failed: " + tmp10;
    tmp15Result = tmp15(tmp5(5619).TableRow, obj8);
  }
  items5[3] = tmp15Result;
  const items6 = [closure_11(require("TableRowGroup").TableRowGroup, { title: "SKU", hasIcons: false, children: items5 }), ];
  const obj9 = { style: tmp.buttons, children: null };
  const items7 = [closure_10(require("components/Button/Button").Button, { text: "Open Self Purchase Success", onPress: callback1, disabled: 0 === trimmed.length, loading: tmp8 }), closure_10(require("components/Button/Button").Button, { text: "Open Gift Purchase Success", onPress: callback2, disabled: 0 === trimmed.length, loading: tmp8, variant: "secondary" })];
  obj9.children = items7;
  const items8 = [closure_11(tmp18, obj9), ];
  let str5;
  if (stateFromStores1 != null) {
    str5 = stateFromStores1.username;
  }
  if (str5 == null) {
    str5 = "N/A";
  }
  const obj12 = { spacing: 16, children: null };
  const obj13 = { title: "Purchase Success Modals", hasIcons: false, children: null };
  const obj10 = { text: "Open Self Purchase Success", onPress: callback1, disabled: 0 === trimmed.length, loading: tmp8 };
  const obj11 = { text: "Open Gift Purchase Success", onPress: callback2, disabled: 0 === trimmed.length, loading: tmp8, variant: "secondary" };
  const obj7 = { label: "Application ID: " + str3 };
  items8[1] = closure_10(require("TableRow").TableRow, { label: "Gift recipient: " + str5 + " (self)" });
  obj13.children = items8;
  items6[1] = closure_11(require("TableRowGroup").TableRowGroup, obj13);
  obj12.children = items6;
  obj3.children = closure_11(require("Stack/Stack").Stack, obj12);
  return closure_10(tmp16, obj3);
};
