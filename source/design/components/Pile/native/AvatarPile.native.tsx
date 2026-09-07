// Module ID: 13031
// Function ID: 13032
// Name: AvatarPile
// Dependencies: [19, 21, 13032, 11005, 12623, 8818, 11006, 2]
// Exports: AvatarPile

// Module 13031 (AvatarPile)
import SolidCutout from "SolidCutout" /* 8818 */;
import Pile from "Pile" /* 11005 */;
import map from "map" /* 11006 */;
import getListSummaryLabel from "getListSummaryLabel" /* 12623 */;
import StaticNativeCutoutAvatarImage from "StaticNativeCutoutAvatarImage" /* 13032 */;
import closure_2 from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("set").fileFinishedImporting("design/components/Pile/native/AvatarPile.native.tsx");

export const AvatarPile = function AvatarPile(arg0) {
  ({ totalCount, children } = arg0);
  const Children = React.Children;
  ({ size, names } = arg0);
  const countResult = Children.count(children);
  const tmp4 = StaticNativeCutoutAvatarImage.AVATAR_SIZE_MAP[size];
  let obj = { "aria-label": getListSummaryLabel.getListSummaryLabel(names, totalCount), shape: SolidCutout.CutoutShape.Circle, size: tmp4, gap: null, depthX: 0.4, children: null };
  let num = 3;
  if (tmp4 <= 40) {
    num = 2;
  }
  obj[3] = num;
  const items = [children, ];
  let tmp6 = null != totalCount && countResult < totalCount;
  if (tmp6) {
    obj = { size: null, borderRadius: null, value: null };
    obj[0] = tmp4;
    obj[1] = tmp4 / 2;
    obj[2] = totalCount - countResult;
    tmp6 = callback(map.PileOverflow, obj);
  }
  items[1] = tmp6;
  obj[5] = items;
  return closure_4(Pile.Pile, obj);
};
