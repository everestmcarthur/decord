// Module ID: 11282
// Function ID: 11283
// Name: OrbsBadgeCoachmark
// Dependencies: [19, 17, 21, 4606, 11283, 1114, 4465, 11222, 2]
// Exports: default, useOrbsBadgeCoachmark

// Module 11282 (OrbsBadgeCoachmark)
import util from "util" /* 1114 */;
import useCoachmark from "useCoachmark" /* 11222 */;
import _modDef11283 from "module_11283" /* 11283 */;
import noop from "module_19" /* 19 */;

require = fn;
function OrbsBadgeCoachmarkImg() {
  const tmp = closure_7();
  const obj = { style: tmp.coachmarkImageContainer, children: null };
  const obj2 = { source: { uri: _modDef11283 }, style: tmp.coachmarkImage };
  obj.children = <hasOwnProperty source={{ uri: _modDef11283 }} style={tmp.coachmarkImage} />;
  return <React4 style={tmp.coachmarkImageContainer}>{null}</React4>;
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4606);
let closure_7 = createStyles.createStyles({ coachmarkImageContainer: { alignItems: "center", justifyContent: "center" }, coachmarkImage: { width: 80, height: 80 }, coachmarkDescription: { marginBottom: -10 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/OrbsBadgeCoachmark.tsx");

export default function OrbsBadgeCoachmark(badgeRef) {
  const merged = Object.assign(badgeRef, Object.assign({ badgeRef: 0 }));
  const coachmark = useCoachmark.useCoachmark(badgeRef.badgeRef, merged);
  return null;
};
export const useOrbsBadgeCoachmark = function useOrbsBadgeCoachmark(disabled) {
  disabled = disabled.disabled;
  const tmp = closure_7();
  const coachmarkDescription = tmp;
  const items = [disabled, tmp.coachmarkDescription];
  let tmp3 = null;
  if (!disabled) {
    let obj = { props: tmp2 };
    tmp3 = obj;
  }
  return tmp3;
};
