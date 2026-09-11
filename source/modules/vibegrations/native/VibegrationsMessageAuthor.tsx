// Module ID: 16682
// Function ID: 16683
// Name: VibegrationsMessageAuthor
// Dependencies: [19, 17, 1371, 21, 4607, 576, 16683, 504, 4451, 1178, 4603, 2]
// Exports: default

// Module 16682 (VibegrationsMessageAuthor)
import nativeDefault from "native" /* 576 */;
import vibegrationsMessageAuthors from "vibegrationsMessageAuthors" /* 16683 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4607);
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
  userId(4451);
  let tmp8 = null;
  if (null != stateFromStores) {
    const obj2 = { style: tmp.author, children: null };
    const obj3 = { size: tmp3(1178).AvatarSizes.SIZE_16, user: stateFromStores, guildId: "Array" };
    const items3 = [closure_5(tmp3(1178).Avatar, obj3), ];
    const obj4 = { variant: "text-xs/semibold", color: "text-muted", children: tmp7 };
    items3[1] = closure_5(tmp3(4603).Text, obj4);
    obj2.children = items3;
    tmp8 = closure_6(View, obj2);
  }
  return tmp8;
};
