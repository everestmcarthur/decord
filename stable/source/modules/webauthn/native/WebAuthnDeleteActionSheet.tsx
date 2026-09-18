// Module ID: 14672
// Function ID: 14673
// Name: WebAuthnDeleteActionSheet
// Dependencies: [19, 17, 21, 4560, 576, 4527, 7150, 7149, 1114, 7199, 14673, 4556, 4975, 6597, 4259, 10657, 4520, 9631, 8594, 2]
// Exports: default

// Module 14672 (WebAuthnDeleteActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 6597 */;
import _modDef14673 from "module_14673" /* 14673 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let obj2 = { content: { alignItems: "center" }, subtitle: { textAlign: "center", marginTop: nativeDefault.space.PX_16 }, sheetContent: null, sheetBody: null };
const obj3 = { textAlign: "center", marginTop: nativeDefault.space.PX_16 };
obj2.sheetContent = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj2.sheetBody = { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/webauthn/native/WebAuthnDeleteActionSheet.tsx");

export default function WebAuthnDeleteActionSheet(credential) {
  credential = credential.credential;
  ({ deleting, setDeleting: importDefault } = credential);
  function handleClose() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }
  const tmp = closure_7();
  let obj = { contentStyles: tmp.sheetContent, bodyStyles: tmp.sheetBody, children: null };
  let obj2 = { title: null, trailing: null };
  let intl = credential(1114).intl;
  obj2.title = intl.formatToPlainString(credential(1114).t.mI3CoL, { keyName: credential.name });
  obj2.trailing = closure_5(credential(7199).ActionSheetCloseButton, { onPress: handleClose });
  const items = [closure_5(credential(7149).BottomSheetTitleHeader, obj2), , , ];
  const obj4 = { style: tmp.content, children: null };
  const items1 = [closure_5(closure_3, { source: _modDef14673 }), ];
  const obj6 = { variant: "heading-md/normal", style: tmp.subtitle, children: null };
  const intl2 = credential(1114).intl;
  obj6.children = intl2.string(credential(1114).t.IfTbc1);
  items1[1] = closure_5(credential(4556).Text, obj6);
  obj4.children = items1;
  items[1] = closure_6(closure_4, obj4);
  const obj7 = { children: null };
  const obj8 = { text: null, onPress: null, variant: "primary", grow: true };
  const intl3 = credential(1114).intl;
  obj8.text = intl3.string(credential(1114).t["lqK//z"]);
  obj8.onPress = handleClose;
  obj7.children = closure_5(credential(4975).Button, obj8);
  items[2] = closure_5(closure_4, obj7);
  const obj9 = { children: null };
  const obj10 = { text: null, onPress: null, variant: "destructive", disabled: null, loading: null, grow: true };
  const intl4 = credential(1114).intl;
  obj10.text = intl4.string(credential(1114).t.zYOk0f);
  obj10.onPress = function onPress() {
    closure_1_1(true);
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const result = WebAuthnActionCreators.deleteWebAuthnCredential(credential);
    const nextPromise = result.then(() => {
      const obj2 = { key: "WEBAUTHN_CREDENTIAL_DELETE_SUCCESS_TOAST_KEY", content: null, icon: null, IconComponent: null, iconColor: "status-positive" };
      const intl = credential(1114).intl;
      obj2.content = intl.string(credential(1114).t.ZnkeXs);
      obj2.icon = closure_1_1(10657);
      obj2.IconComponent = credential(4520).CircleCheckIcon;
      closure_1_1(4259).open(obj2);
    });
    result.then(() => {
      const obj2 = { key: "WEBAUTHN_CREDENTIAL_DELETE_SUCCESS_TOAST_KEY", content: null, icon: null, IconComponent: null, iconColor: "status-positive" };
      const intl = credential(1114).intl;
      obj2.content = intl.string(credential(1114).t.ZnkeXs);
      obj2.icon = closure_1_1(10657);
      obj2.IconComponent = credential(4520).CircleCheckIcon;
      closure_1_1(4259).open(obj2);
    }).catch((error) => {
      const obj = closure_1_1(4259);
      obj.open({ key: "WEBAUTHN_CREDENTIAL_DELETE_ERROR_TOAST_KEY", content: error.message, icon: closure_1_1(9631), IconComponent: credential(8594).WarningIcon, iconColor: "icon-feedback-critical" });
    }).finally(() => {
      closure_1_1(false);
    });
  };
  obj10.disabled = deleting;
  obj10.loading = deleting;
  obj9.children = closure_5(credential(4975).Button, obj10);
  items[3] = closure_5(closure_4, obj9);
  obj.children = items;
  return closure_6(credential(7150).BottomSheet, obj);
};
