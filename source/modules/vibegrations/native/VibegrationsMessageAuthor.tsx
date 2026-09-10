// Module ID: 16639
// Function ID: 16640
// Name: VibegrationsMessageAuthor
// Dependencies: [19, 17, 1371, 21, 4574, 576, 16640, 504, 4418, 1178, 4570, 2]
// Exports: default

// Module 16639 (VibegrationsMessageAuthor)
import nativeDefault from "native" /* 576 */;
import vibegrationsMessageAuthors from "vibegrationsMessageAuthors" /* 16640 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4574);
let obj2 = { author: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsMessageAuthor.tsx");

export default function VibegrationsMessageAuthor(userId) {
  userId = userId.userId;
  const items = [userId];
  const effect = noop.useEffect(() => vibegrationsMessageAuthors.requestMessageAuthor(userId), items);
  const tmp = closure_7();
  const items1 = [UserStore];
  const items2 = [userId];
  const stateFromStores = userId(504).useStateFromStores(items1, () => {
    let user = null;
    if (null != userId) {
      user = UserStore.getUser(tmp);
    }
    return vibegrationsMessageAuthors.resolveMessageAuthor(userId, user, UserStore.getCurrentUser());
  }, items2);
  userId(4418);
  let tmp8 = null;
  if (null != stateFromStores) {
    const obj2 = { style: tmp.author, children: null };
    const obj3 = { size: tmp3(1178).AvatarSizes.SIZE_16, user: stateFromStores, guildId: "Array" };
    const items3 = [closure_5(tmp3(1178).Avatar, obj3), ];
    const obj4 = { variant: "text-xs/semibold", color: "text-muted", children: tmp7 };
    items3[1] = closure_5(tmp3(4570).Text, obj4);
    obj2.children = items3;
    tmp8 = closure_6(View, obj2);
  }
  return tmp8;
};
