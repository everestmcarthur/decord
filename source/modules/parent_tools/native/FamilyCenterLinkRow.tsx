// Module ID: 14921
// Function ID: 14922
// Name: FamilyCenterLinkRow
// Dependencies: [19, 17, 7538, 21, 4560, 14922, 14923, 2]
// Exports: default

// Module 14921 (FamilyCenterLinkRow)
import noopAll from "noop" /* 19 */;
import FamilyCenterLinkRowWrapperDefault from "FamilyCenterLinkRowWrapper" /* 14922 */;
import FamilyCenterRequestorDetailsDefault from "FamilyCenterRequestorDetails" /* 14923 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { UserLinkStatus } from "items" /* 7538 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ actionContainer: { flexDirection: "row", alignItems: "center", justifyContent: "flex-end", height: "100%" } });
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkRow.tsx");

export default function FamilyCenterLinkRow(children) {
  const otherUser = children.otherUser;
  let obj = { userId: otherUser.id, children: null };
  const tmp = callback3();
  obj = { otherUser, status: UserLinkStatus.PENDING };
  const items = [callback(FamilyCenterRequestorDetailsDefault, obj), ];
  obj = { style: tmp.actionContainer, children: children.actions };
  items[1] = callback(View, obj);
  obj[1] = items;
  return callback2(FamilyCenterLinkRowWrapperDefault, obj);
};
