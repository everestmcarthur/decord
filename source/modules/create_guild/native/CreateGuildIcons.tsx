// Module ID: 12806
// Function ID: 12807
// Name: CreateGuildIcons
// Dependencies: [12421, 12425, 12423, 12424, 12426, 12427, 12422, 5744, 2]

// Module 12806 (CreateGuildIcons)
import native from "native" /* 5744 */;
import _modDef12421 from "module_12421" /* 12421 */;
import _modDef12422 from "module_12422" /* 12422 */;
import _modDef12423 from "module_12423" /* 12423 */;
import _modDef12424 from "module_12424" /* 12424 */;
import _modDef12425 from "module_12425" /* 12425 */;
import _modDef12426 from "module_12426" /* 12426 */;
import _modDef12427 from "module_12427" /* 12427 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef12421, GAMING: _modDef12425, FRIENDS: _modDef12423, STUDY: _modDef12424, CLUBS: _modDef12426, CREATORS: _modDef12427, LOCAL_COMMUNITY: _modDef12422, SCHOOL_CLUB: _modDef12426 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: native.PencilIllocon, GAMING: native.ControllerIllocon, FRIENDS: native.HeartIllocon, STUDY: native.AppleIllocon, CLUBS: native.BookIllocon, CREATORS: native.PaintIllocon, LOCAL_COMMUNITY: native.LeafIllocon, SCHOOL_CLUB: native.BookIllocon };
