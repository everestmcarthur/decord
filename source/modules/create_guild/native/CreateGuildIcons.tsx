// Module ID: 12741
// Function ID: 12742
// Name: CreateGuildIcons
// Dependencies: [12356, 12360, 12358, 12359, 12361, 12362, 12357, 5706, 2]

// Module 12741 (CreateGuildIcons)
import native from "native" /* 5706 */;
import _modDef12356 from "module_12356" /* 12356 */;
import _modDef12357 from "module_12357" /* 12357 */;
import _modDef12358 from "module_12358" /* 12358 */;
import _modDef12359 from "module_12359" /* 12359 */;
import _modDef12360 from "module_12360" /* 12360 */;
import _modDef12361 from "module_12361" /* 12361 */;
import _modDef12362 from "module_12362" /* 12362 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef12356, GAMING: _modDef12360, FRIENDS: _modDef12358, STUDY: _modDef12359, CLUBS: _modDef12361, CREATORS: _modDef12362, LOCAL_COMMUNITY: _modDef12357, SCHOOL_CLUB: _modDef12361 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: native.PencilIllocon, GAMING: native.ControllerIllocon, FRIENDS: native.HeartIllocon, STUDY: native.AppleIllocon, CLUBS: native.BookIllocon, CREATORS: native.PaintIllocon, LOCAL_COMMUNITY: native.LeafIllocon, SCHOOL_CLUB: native.BookIllocon };
