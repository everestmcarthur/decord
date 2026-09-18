// Module ID: 13148
// Function ID: 13149
// Name: OrbBadgePreview
// Dependencies: [19, 17, 21, 4560, 8179, 11114, 8854, 1114, 2]
// Exports: OrbBadgePreview

// Module 13148 (OrbBadgePreview)
import util from "util" /* 1114 */;
import useCurrentUser from "useCurrentUser" /* 8179 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 8854 */;
import UserProfilePreviewDefault from "UserProfilePreview" /* 11114 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/OrbBadgePreview.tsx");

export const OrbBadgePreview = function OrbBadgePreview() {
  const tmp = closure_5();
  const obj2 = { style: tmp.container, children: null };
  const currentUser = useCurrentUser.useCurrentUser();
  const obj3 = { compact: true, user: currentUser, additionalBadges: null, accessibilityLabel: null };
  const items = [collectibles_CollectiblesUtils.createOrbProfileBadge()];
  obj3.additionalBadges = items;
  const intl = util.intl;
  obj3.accessibilityLabel = intl.string(util.t.bxcI6Y);
  obj2.children = <tmp3 compact user={currentUser} additionalBadges={null} accessibilityLabel={null} />;
  return <View style={tmp.container}>{null}</View>;
};
