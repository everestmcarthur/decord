// Module ID: 15136
// Function ID: 15137
// Name: FamilyCenterLinkRow
// Dependencies: [19, 17, 7734, 21, 4722, 15137, 15138, 2]
// Exports: default

// Module 15136 (FamilyCenterLinkRow)
import FamilyCenterLinkWrapperDefault from "FamilyCenterLinkWrapper" /* 15137 */;
import FamilyCenterRequestorDetailsDefault from "FamilyCenterRequestorDetails" /* 15138 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const UserLinkStatus = fn(7734).UserLinkStatus;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4722);
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
