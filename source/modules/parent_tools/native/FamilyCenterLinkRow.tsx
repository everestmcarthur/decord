// Module ID: 14973
// Function ID: 14974
// Name: FamilyCenterLinkRow
// Dependencies: [19, 17, 7611, 21, 4606, 14974, 14975, 2]
// Exports: default

// Module 14973 (FamilyCenterLinkRow)
import FamilyCenterLinkWrapperDefault from "FamilyCenterLinkWrapper" /* 14974 */;
import FamilyCenterRequestorDetailsDefault from "FamilyCenterRequestorDetails" /* 14975 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const UserLinkStatus = fn(7611).UserLinkStatus;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4606);
let closure_6 = createStyles.createStyles({ actionContainer: { flexDirection: "row", alignItems: "center", justifyContent: "flex-end", height: "100%" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkRow.tsx");

export default function FamilyCenterLinkRow(children) {
  const otherUser = children.otherUser;
  const obj = { userId: otherUser.id, children: null };
  const tmp = closure_6();
  const items = [React4(FamilyCenterRequestorDetailsDefault, { otherUser, status: UserLinkStatus.PENDING }), React4(View, { style: tmp.actionContainer, children: children.actions })];
  obj.children = items;
  return hasOwnProperty(FamilyCenterLinkWrapperDefault, obj);
};
