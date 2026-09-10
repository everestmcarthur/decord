// Module ID: 14698
// Function ID: 14699
// Name: WebAuthnDeleteActionSheet
// Dependencies: [19, 17, 21, 4574, 576, 4541, 7164, 7163, 1114, 7212, 14699, 4570, 4989, 6611, 4272, 10684, 4534, 9657, 8621, 2]
// Exports: default

// Module 14698 (WebAuthnDeleteActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 6611 */;
import _modDef14699 from "module_14699" /* 14699 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4574);
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
  obj2.trailing = closure_5(credential(7212).ActionSheetCloseButton, { onPress: handleClose });
  const items = [closure_5(credential(7163).BottomSheetTitleHeader, obj2), , , ];
  const obj4 = { style: tmp.content, children: null };
  const items1 = [closure_5(closure_3, { source: _modDef14699 }), ];
  const obj6 = { variant: "heading-md/normal", style: tmp.subtitle, children: null };
  const intl2 = credential(1114).intl;
  obj6.children = intl2.string(credential(1114).t.IfTbc1);
  items1[1] = closure_5(credential(4570).Text, obj6);
  obj4.children = items1;
  items[1] = closure_6(closure_4, obj4);
  const obj7 = { children: null };
  const obj8 = { text: null, onPress: null, variant: "primary", grow: true };
  const intl3 = credential(1114).intl;
  obj8.text = intl3.string(credential(1114).t["lqK//z"]);
  obj8.onPress = handleClose;
  obj7.children = closure_5(credential(4989).Button, obj8);
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
      obj2.icon = closure_1_1(10684);
      obj2.IconComponent = credential(4534).CircleCheckIcon;
      closure_1_1(4272).open(obj2);
    });
    result.then(() => {
      const obj2 = { key: "WEBAUTHN_CREDENTIAL_DELETE_SUCCESS_TOAST_KEY", content: null, icon: null, IconComponent: null, iconColor: "status-positive" };
      const intl = credential(1114).intl;
      obj2.content = intl.string(credential(1114).t.ZnkeXs);
      obj2.icon = closure_1_1(10684);
      obj2.IconComponent = credential(4534).CircleCheckIcon;
      closure_1_1(4272).open(obj2);
    }).catch((error) => {
      const obj = closure_1_1(4272);
      obj.open({ key: "WEBAUTHN_CREDENTIAL_DELETE_ERROR_TOAST_KEY", content: error.message, icon: closure_1_1(9657), IconComponent: credential(8621).WarningIcon, iconColor: "icon-feedback-critical" });
    }).finally(() => {
      closure_1_1(false);
    });
  };
  obj10.disabled = deleting;
  obj10.loading = deleting;
  obj9.children = closure_5(credential(4989).Button, obj10);
  items[3] = closure_5(closure_4, obj9);
  obj.children = items;
  return closure_6(credential(7164).BottomSheet, obj);
};
