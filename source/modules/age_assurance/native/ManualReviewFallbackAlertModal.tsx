// Module ID: 8591
// Function ID: 8592
// Name: ManualReviewFallbackAlertModal
// Dependencies: [19, 21, 4910, 1114, 2978, 4910, 8592, 2]
// Exports: default

// Module 8591 (ManualReviewFallbackAlertModal)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import messagesProxyDefault from "messagesProxy" /* 2978 */;
import getAlertModalItemKey from "getAlertModalItemKey" /* 4910 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/age_assurance/native/ManualReviewFallbackAlertModal.tsx");

export default function ManualReviewFallbackAlertModal() {
  let obj = { title: null, content: null, actions: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(messagesProxyDefault["+c5sxg"]);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(messagesProxyDefault["RFLH++"]);
  obj = { children: null };
  obj = { text: null };
  const intl3 = getSystemLocale.intl;
  obj[0] = intl3.string(getSystemLocale.t["NX+WJN"]);
  const items = [callback(getAlertModalItemKey.AlertActionButton, obj, "got-it"), ];
  obj1 = { variant: "secondary", text: null, onPress: null };
  const intl4 = getSystemLocale.intl;
  obj1[1] = intl4.string(messagesProxyDefault.Z61nkt);
  obj1[2] = function onPress() {
    return callback(table[6]).handleManualReviewCta();
  };
  items[1] = callback(getAlertModalItemKey.AlertActionButton, obj1, "request-manual-review");
  obj[0] = items;
  obj[2] = callback2(getAlertModalItemKey.AlertActions, obj);
  return callback(getAlertModalItemKey.AlertModal, obj);
};
