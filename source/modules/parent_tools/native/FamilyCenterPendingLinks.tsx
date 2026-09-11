// Module ID: 14979
// Function ID: 14980
// Name: FamilyCenterPendingLinks
// Dependencies: [19, 17, 7611, 21, 4606, 576, 8736, 12013, 1114, 2396, 4602, 8737, 5174, 4809, 14980, 1896, 1178, 9657, 14981, 14978, 14982, 14973, 2]
// Exports: default

// Module 14979 (FamilyCenterPendingLinks)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef2396 from "module_2396" /* 2396 */;
import Text_Text from "Text/Text" /* 4602 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4809 */;
import useUserLinks from "useUserLinks" /* 8736 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8737 */;
import useAgeSpecificText from "useAgeSpecificText" /* 12013 */;
import noop from "module_19" /* 19 */;

require = fn;
function FamilyCenterPendingLinkRow(otherUser) {
  const str = otherUser.otherUser;
  const tmp = closure_9();
  str(8736);
  if (undefined === str) {
    return null;
  } else {
    if (tmp4) {
      const intl3 = tmp5(1114).intl;
      let str1;
      if (str != null) {
        str1 = str.toString();
      }
      const obj2 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
      const obj3 = { name: str1 };
      obj2.accessibilityLabel = intl3.formatToPlainString(tmp2(2396).oUpA6X, obj3);
      obj2.onPress = function onPress() {
        ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14982, dependencyMap.paths), { otherUser: str });
      };
      obj2.style = tmp.actionButton;
      const obj4 = { size: tmp5(1178).Icon.Sizes.SMALL, disableColor: true, source: tmp2(14978) };
      obj2.children = closure_5(tmp5(1178).Icon, obj4);
      let tmp8Result = tmp17(tmp5(5174).PressableOpacity, obj2);
      let tmp14 = tmp17;
    } else {
      let tmp12Result = null;
      if (!tmp7) {
        const intl = tmp5(1114).intl;
        let str2;
        if (str != null) {
          str2 = str.toString();
        }
        const obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
        const obj5 = { name: str2 };
        obj.accessibilityLabel = intl.formatToPlainString(tmp2(2396).jc1Ip7, obj5);
        obj.onPress = function onPress() {
          ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14980, dependencyMap.paths), { otherUser: str });
        };
        const items = [, ];
        ({ actionButton: arr[0], actionButtonFirst: arr[1] } = tmp);
        obj.style = items;
        const obj6 = { size: tmp5(1178).Icon.Sizes.SMALL, disableColor: true, source: tmp2(9657) };
        obj.children = closure_5(tmp5(1178).Icon, obj6);
        tmp12Result = tmp12(tmp5(5174).PressableOpacity, obj);
      }
      const items1 = [tmp12Result, ];
      tmp14 = closure_5;
      const intl2 = tmp5(1114).intl;
      let str3;
      if (str != null) {
        str3 = str.toString();
      }
      const obj7 = { children: null };
      const obj8 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
      const obj9 = { name: str3 };
      obj8.accessibilityLabel = intl2.formatToPlainString(tmp2(2396)["4GtllP"], obj9);
      obj8.onPress = function onPress() {
        ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14981, dependencyMap.paths), { otherUser: str });
      };
      obj8.style = tmp.actionButton;
      const obj10 = { size: tmp5(1178).Icon.Sizes.SMALL, disableColor: true, source: tmp2(14978) };
      obj8.children = tmp14(tmp5(1178).Icon, obj10);
      items1[1] = tmp14(tmp5(5174).PressableOpacity, obj8);
      obj7.children = items1;
      tmp8Result = closure_6(closure_7, obj7);
    }
    const obj11 = { otherUser: str, actions: tmp8Result };
    return tmp14(tmp2(14973), obj11);
  }
  tmp4 = useIsInAdultAgeGroupDefault();
}
const View = fn(17).View;
const UserLinkStatus = fn(7611).UserLinkStatus;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
let createStyles = fn(4606);
let obj2 = { container: { marginTop: 24 }, content: { display: "flex", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md }, header: { marginBottom: 10 } };
let closure_8 = createStyles.createStyles(obj2);
createStyles = fn(4606);
let obj5 = { actionButton: null, actionButtonFirst: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
obj5.actionButton = size;
let obj3 = { display: "flex", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md };
obj5.actionButtonFirst = { marginRight: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj5);
size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterPendingLinks.tsx");

export default function FamilyCenterPendingLinks() {
  const tmp = closure_8();
  const usersForLinkStatus = useUserLinks.useUsersForLinkStatus(UserLinkStatus.PENDING);
  useAgeSpecificText;
  const intl = util.intl;
  intl.formatToPlainString(_modDef2396.IkAgkG, { count: usersForLinkStatus.length });
  const intl2 = util.intl;
  let tmp7 = null;
  if (0 !== usersForLinkStatus.length) {
    const obj3 = { style: tmp.container, children: null };
    const obj4 = { style: tmp.header, variant: "eyebrow", color: "text-default", children: tmp6 };
    const items = [hasOwnProperty(Text_Text.Text, obj4), ];
    const obj5 = { style: tmp.content, children: usersForLinkStatus.map((otherUser) => closure_1_5(FamilyCenterPendingLinkRow, { otherUser }, "pending-" + otherUser.id)) };
    items[1] = hasOwnProperty(View, obj5);
    obj3.children = items;
    tmp7 = timestampProducer(View, obj3);
  }
  return tmp7;
};
