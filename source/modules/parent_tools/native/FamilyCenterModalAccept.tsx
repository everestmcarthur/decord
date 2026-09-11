// Module ID: 14980
// Function ID: 14981
// Name: FamilyCenterModalAccept
// Dependencies: [19, 17, 21, 4607, 576, 4810, 4304, 1114, 12012, 8509, 8510, 14977, 4551, 4603, 2396, 14947, 12014, 12022, 5485, 5027, 5676, 12024, 2]
// Exports: default

// Module 14980 (FamilyCenterModalAccept)
import nativeDefault from "native" /* 576 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4810 */;
import NavigatorHeader from "NavigatorHeader" /* 5676 */;
import noop from "module_19" /* 19 */;

require = fn;
function FamilyCenterModalAcceptScreen(otherUser) {
  otherUser = otherUser.otherUser;
  const tmp = closure_7();
  const callback = noop.useCallback(() => {
    acceptLinkRequest(4810).pop();
  }, []);
  const callback1 = noop.useCallback(() => {
    const intl = otherUser(1114).intl;
    otherUser(4304).presentFailedToast(intl.string(otherUser(1114).t.R0RpRX));
  }, []);
  const familyCenterActions = otherUser(12012).useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  const acceptLinkRequest = familyCenterActions.acceptLinkRequest;
  const isAcceptLoading = familyCenterActions.isAcceptLoading;
  const items = [acceptLinkRequest, otherUser.id];
  const callback2 = noop.useCallback(() => {
    acceptLinkRequest(otherUser.id);
  }, items);
  const obj2 = { children: null };
  const obj3 = { children: null };
  const obj4 = { style: tmp.header, children: null };
  const obj5 = { otherUser, iconSrc: null, iconStyles: null };
  const obj = otherUser(12012);
  obj5.iconSrc = acceptLinkRequest(4551);
  obj5.iconStyles = tmp.icon;
  const items1 = [closure_5(acceptLinkRequest(14977), obj5), , ];
  const obj6 = { style: tmp.headerText, variant: "text-lg/bold", children: null };
  let intl = otherUser(1114).intl;
  obj6.children = intl.string(acceptLinkRequest(2396).rlNJwZ);
  items1[1] = closure_5(otherUser(4603).Text, obj6);
  items1[2] = closure_5(acceptLinkRequest(14947), { user: otherUser });
  obj4.children = items1;
  const items2 = [closure_6(View, obj4), closure_5(acceptLinkRequest(12014), {}), ];
  const obj7 = { style: tmp.disclaimer, variant: "text-xs/normal", color: "text-default", children: null };
  const intl2 = otherUser(1114).intl;
  obj7.children = intl2.format(acceptLinkRequest(2396).snlFqR, { username: otherUser.username });
  items2[2] = closure_5(otherUser(4603).Text, obj7);
  obj3.children = items2;
  const items3 = [closure_6(otherUser(8510).ModalContent, obj3), ];
  const obj9 = { children: null };
  const obj10 = { children: null };
  const obj11 = { variant: "primary", disabled: isAcceptLoading, loading: isAcceptLoading, text: null, onPress: null };
  const intl3 = otherUser(1114).intl;
  obj11.text = intl3.string(acceptLinkRequest(2396)["wI/jo3"]);
  obj11.onPress = callback2;
  const items4 = [closure_5(otherUser(5027).Button, obj11), ];
  const obj12 = { variant: "tertiary", text: null, onPress: null };
  const intl4 = otherUser(1114).intl;
  obj12.text = intl4.string(otherUser(1114).t["ETE/oC"]);
  obj12.onPress = acceptLinkRequest(4810).pop;
  items4[1] = closure_5(otherUser(5027).Button, obj12);
  obj10.children = items4;
  obj9.children = closure_6(otherUser(5485).ButtonGroup, obj10);
  items3[1] = closure_5(otherUser(12022).ModalFooter, obj9);
  obj2.children = items3;
  return closure_6(otherUser(8509).ModalScreen, obj2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4607);
let obj2 = { header: { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 }, headerText: null, icon: null, disclaimer: null };
let obj3 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.headerText = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
let obj5 = { transform: null, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let items = [{ rotate: "45deg" }];
obj5.transform = items;
obj2.icon = obj5;
let obj4 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
obj2.disclaimer = { marginTop: nativeDefault.space.PX_12 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalAccept.tsx");

export default function FamilyCenterModalAccept(otherUser) {
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = noop.useMemo(() => {
    const obj = { ACCEPT: null };
    const obj2 = {
      headerShown: true,
      headerLeft: NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        return null;
      },
      render() {
        return closure_2_5(FamilyCenterModalAcceptScreen, { otherUser });
      }
    };
    obj.ACCEPT = obj2;
    return obj;
  }, items);
  let obj = { initialRouteName: "ACCEPT", screens: memo, headerBackTitle: null };
  const intl = otherUser(1114).intl;
  obj.headerBackTitle = intl.string(otherUser(1114).t["13/7kX"]);
  return closure_5(otherUser(12024).Modal, obj);
};
