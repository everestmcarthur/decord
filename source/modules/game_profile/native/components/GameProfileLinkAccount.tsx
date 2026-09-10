// Module ID: 8766
// Function ID: 8767
// Name: GameProfileLinkAccount
// Dependencies: [19, 17, 1371, 21, 4574, 576, 7179, 504, 8719, 4570, 1114, 5601, 1178, 4989, 8767, 2]
// Exports: default

// Module 8766 (GameProfileLinkAccount)
import nativeDefault from "native" /* 576 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8719 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4574);
let obj2 = { container: { gap: nativeDefault.space.PX_8 }, headerText: null, card: null, cardImagesContainer: null, ellipseGroup: null, ellipse: null, cardImageApplication: null, cardContent: null, cardText: null };
let obj3 = { gap: nativeDefault.space.PX_8 };
obj2.headerText = { paddingHorizontal: nativeDefault.space.PX_8 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_8 };
obj2.card = { borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
let obj5 = { borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.cardImagesContainer = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center", alignSelf: "center" };
let obj6 = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center", alignSelf: "center" };
obj2.ellipseGroup = { flexDirection: "row", justifyContent: "space-between", gap: nativeDefault.space.PX_4 };
let size = { width: 4, height: 4, backgroundColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, opacity: 0.3, borderRadius: nativeDefault.radii.round };
obj2.ellipse = size;
const size1 = { width: 48, height: 48, borderRadius: nativeDefault.radii.sm };
obj2.cardImageApplication = size1;
let obj7 = { flexDirection: "row", justifyContent: "space-between", gap: nativeDefault.space.PX_4 };
obj2.cardContent = { gap: nativeDefault.space.PX_4, alignSelf: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_24 };
obj2.cardText = { textAlign: "center" };
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileLinkAccount.tsx");

export default function GameProfileLinkAccount(trackAction) {
  trackAction = trackAction.trackAction;
  const analyticsLocations = trackAction.analyticsLocations;
  let startAuthorization;
  const tmp = closure_8();
  const tmp4 = analyticsLocations(startAuthorization[6])(trackAction.game);
  startAuthorization = tmp4.startAuthorization;
  const connectionApp = tmp4.connectionApp;
  ({ fetched, hasAlreadyLinked, canStartAuthorization } = tmp4);
  const items = [UserStore];
  const stateFromStores = trackAction(startAuthorization[7]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [trackAction, startAuthorization, analyticsLocations];
  if (fetched) {
    if (null != connectionApp) {
      if (canStartAuthorization) {
        if (!hasAlreadyLinked) {
          if (null != stateFromStores) {
            const iconSource = connectionApp.getIconSource(48);
            const obj2 = { style: tmp.container, children: null };
            const obj3 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: tmp.headerText, children: null };
            const intl4 = tmp5(tmp3[10]).intl;
            obj3.children = intl4.string(tmp5(tmp3[10]).t["VDAhr+"]);
            const items2 = [closure_6(tmp5(tmp3[9]).Text, obj3), ];
            const obj4 = { style: tmp.card, children: null };
            let tmp11Result = null;
            if (null != iconSource) {
              const obj5 = { style: tmp.cardImagesContainer, children: null };
              const obj6 = { source: iconSource, style: tmp.cardImageApplication };
              const items3 = [tmp13(analyticsLocations(tmp3[11]), obj6), , ];
              const obj7 = { style: tmp.ellipseGroup, children: null };
              const obj8 = { style: tmp.ellipse };
              const items4 = [tmp13(tmp12, obj8), , ];
              const obj9 = { style: tmp.ellipse };
              items4[1] = tmp13(tmp12, obj9);
              const obj10 = { style: tmp.ellipse };
              items4[2] = tmp13(tmp12, obj10);
              obj7.children = items4;
              items3[1] = tmp11(tmp12, obj7);
              const obj11 = { size: tmp5(tmp3[12]).AvatarSizes.LARGE_48, user: stateFromStores, guildId: "Array" };
              items3[2] = tmp13(tmp5(tmp3[12]).Avatar, obj11);
              obj5.children = items3;
              tmp11Result = tmp11(tmp12, obj5);
            }
            const items5 = [tmp11Result, , ];
            const obj12 = { style: tmp.cardContent, children: null };
            const obj13 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", style: tmp.cardText, children: null };
            const intl = tmp5(tmp3[10]).intl;
            const obj14 = { gameName: connectionApp.name };
            obj13.children = intl.formatToPlainString(tmp5(tmp3[10]).t.hUbQT2, obj14);
            const items6 = [closure_6(tmp5(tmp3[9]).Text, obj13), ];
            const obj15 = { variant: "text-sm/medium", color: "text-default", style: tmp.cardText, children: null };
            const intl2 = tmp5(tmp3[10]).intl;
            obj15.children = intl2.string(tmp5(tmp3[10]).t["JKqu+4"]);
            items6[1] = closure_6(tmp5(tmp3[9]).Text, obj15);
            obj12.children = items6;
            items5[1] = closure_7(View, obj12);
            const obj16 = { variant: "secondary", size: "md", text: null, onPress: null, icon: null };
            const intl3 = tmp5(tmp3[10]).intl;
            obj16.text = intl3.string(tmp5(tmp3[10]).t.jynBQ5);
            obj16.onPress = tmp7;
            obj16.icon = closure_6(tmp5(tmp3[14]).ExperimentalGameControllerLinkIcon, { size: "sm" });
            items5[2] = closure_6(tmp5(tmp3[13]).Button, obj16);
            obj4.children = items5;
            items2[1] = closure_7(View, obj4);
            obj2.children = items2;
            return closure_7(View, obj2);
          }
        }
      }
    }
  }
  return null;
};
