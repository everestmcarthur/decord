// Module ID: 12715
// Function ID: 12716
// Name: GUILD_TEMPLATE_ICONS
// Dependencies: [12330, 12334, 12332, 12333, 12335, 12336, 12331, 5692, 2]

// Module 12715 (GUILD_TEMPLATE_ICONS)
import set from "set" /* 2 */;
import AccountAgeTier10LargeBadge from "AccountAgeTier10LargeBadge" /* 5692 */;
import registerAssetDefault from "registerAsset" /* 12330 */;
import registerAssetDefault2 from "registerAsset" /* 12331 */;
import registerAssetDefault3 from "registerAsset" /* 12332 */;
import registerAssetDefault4 from "registerAsset" /* 12333 */;
import registerAssetDefault5 from "registerAsset" /* 12334 */;
import registerAssetDefault6 from "registerAsset" /* 12335 */;
import registerAssetDefault7 from "registerAsset" /* 12336 */;

let obj = { CREATE: registerAssetDefault, GAMING: registerAssetDefault5, FRIENDS: registerAssetDefault3, STUDY: registerAssetDefault4, CLUBS: registerAssetDefault6, CREATORS: registerAssetDefault7, LOCAL_COMMUNITY: registerAssetDefault2, SCHOOL_CLUB: registerAssetDefault6 };
obj = { CREATE: AccountAgeTier10LargeBadge.PencilIllocon, GAMING: AccountAgeTier10LargeBadge.ControllerIllocon, FRIENDS: AccountAgeTier10LargeBadge.HeartIllocon, STUDY: AccountAgeTier10LargeBadge.AppleIllocon, CLUBS: AccountAgeTier10LargeBadge.BookIllocon, CREATORS: AccountAgeTier10LargeBadge.PaintIllocon, LOCAL_COMMUNITY: AccountAgeTier10LargeBadge.LeafIllocon, SCHOOL_CLUB: AccountAgeTier10LargeBadge.BookIllocon };
const result = set.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj;
