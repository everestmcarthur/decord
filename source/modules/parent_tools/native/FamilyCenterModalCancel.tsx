// Module ID: 14982
// Function ID: 14983
// Name: FamilyCenterModalCancel
// Dependencies: [19, 17, 21, 4606, 576, 8737, 4809, 4304, 1114, 12010, 38, 8507, 8508, 14977, 7065, 4602, 2396, 14947, 12020, 5484, 5026, 5675, 12022, 2]
// Exports: default

// Module 14982 (FamilyCenterModalCancel)
import nativeDefault from "native" /* 576 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4809 */;
import NavigatorHeader from "NavigatorHeader" /* 5675 */;
import noop from "module_19" /* 19 */;

require = fn;
function FamilyCenterModalCancelScreen(otherUser) {
  otherUser = otherUser.otherUser;
  let cancelLinkRequest;
  const tmp = closure_7();
  const callback = noop.useCallback(() => {
    cancelLinkRequest(4809).pop();
  }, []);
  const callback1 = noop.useCallback(() => {
    const intl = otherUser(1114).intl;
    otherUser(4304).presentFailedToast(intl.string(otherUser(1114).t.R0RpRX));
  }, []);
  const tmp2 = cancelLinkRequest(8737)();
  const familyCenterActions = otherUser(12010).useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  cancelLinkRequest = familyCenterActions.cancelLinkRequest;
  const isCancelLoading = familyCenterActions.isCancelLoading;
  const items = [cancelLinkRequest, otherUser.id];
  const callback2 = noop.useCallback(() => {
    cancelLinkRequest(otherUser.id);
  }, items);
  cancelLinkRequest(38)(tmp2, "FamilyCenterCancelModal should only be rendered for parents.");
  const obj2 = { children: null };
  const obj3 = { children: null };
  const obj4 = { style: tmp.header, children: null };
  const obj5 = { otherUser, iconSrc: null };
  const obj = otherUser(12010);
  obj5.iconSrc = cancelLinkRequest(7065);
  const items1 = [closure_5(cancelLinkRequest(14977), obj5), , ];
  const obj6 = { style: tmp.headerText, variant: "text-lg/bold", children: null };
  let intl = otherUser(1114).intl;
  obj6.children = intl.string(cancelLinkRequest(2396).HynllX);
  items1[1] = closure_5(otherUser(4602).Text, obj6);
  items1[2] = closure_5(cancelLinkRequest(14947), { user: otherUser });
  obj4.children = items1;
  obj3.children = closure_6(View, obj4);
  const items2 = [closure_5(otherUser(8508).ModalContent, obj3), ];
  const obj7 = { children: null };
  const obj8 = { children: null };
  const obj9 = { variant: "destructive", disabled: isCancelLoading, loading: isCancelLoading, text: null, onPress: null };
  const intl2 = otherUser(1114).intl;
  obj9.text = intl2.string(cancelLinkRequest(2396).mK40bk);
  obj9.onPress = callback2;
  const items3 = [closure_5(otherUser(5026).Button, obj9), ];
  const obj10 = { variant: "tertiary", text: null, onPress: null };
  const intl3 = otherUser(1114).intl;
  obj10.text = intl3.string(cancelLinkRequest(2396).czincX);
  obj10.onPress = cancelLinkRequest(4809).pop;
  items3[1] = closure_5(otherUser(5026).Button, obj10);
  obj8.children = items3;
  obj7.children = closure_6(otherUser(5484).ButtonGroup, obj8);
  items2[1] = closure_5(otherUser(12020).ModalFooter, obj7);
  obj2.children = items2;
  return closure_6(otherUser(8507).ModalScreen, obj2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4606);
let obj2 = { header: { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 }, headerText: null };
let obj3 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.headerText = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalCancel.tsx");

export default function FamilyCenterModalCancel(otherUser) {
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = noop.useMemo(() => {
    const obj = { CANCEL: null };
    const obj2 = {
      headerShown: true,
      headerLeft: NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        return null;
      },
      render() {
        return closure_2_5(FamilyCenterModalCancelScreen, { otherUser });
      }
    };
    obj.CANCEL = obj2;
    return obj;
  }, items);
  let obj = { initialRouteName: "CANCEL", screens: memo, headerBackTitle: null };
  const intl = otherUser(1114).intl;
  obj.headerBackTitle = intl.string(otherUser(1114).t["13/7kX"]);
  return closure_5(otherUser(12022).Modal, obj);
};
