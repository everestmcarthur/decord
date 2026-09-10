// Module ID: 10849
// Function ID: 10850
// Name: SocialLayerStorefrontBadges
// Dependencies: [19, 17, 21, 4574, 576, 1115, 10850, 4570, 1114, 2]
// Exports: ExclusiveBadge

// Module 10849 (SocialLayerStorefrontBadges)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4570 */;
import ClydeIcon from "ClydeIcon" /* 10850 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4574);
const obj2 = { exclusiveBadge: { flexDirection: "row", alignItems: "center", textAlignVertical: "center", alignSelf: "flex-start", gap: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND }, exclusiveBadgeText: null };
const obj4 = { textTransform: "uppercase", fontSize: nativeDefault.space.PX_12, lineHeight: null };
let PlatformUtils = fn(1115);
PlatformUtils = PlatformUtils.isAndroid();
const space = nativeDefault.space;
obj4.lineHeight = PlatformUtils ? space.PX_12 : space.PX_16;
obj2.exclusiveBadgeText = obj4;
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontBadges.tsx");

export const ExclusiveBadge = function ExclusiveBadge() {
  const tmp = closure_6();
  const obj = { style: tmp.exclusiveBadge, children: null };
  const items = [React4(ClydeIcon.ClydeIcon, { size: "xs", color: nativeDefault.colors.WHITE }), ];
  const obj3 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.exclusiveBadgeText, children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.RiDMFz);
  items[1] = React4(Text_Text.Text, obj3);
  obj.children = items;
  return hasOwnProperty(View, obj);
};
