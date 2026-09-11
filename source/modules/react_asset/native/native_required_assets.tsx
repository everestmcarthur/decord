// Module ID: 17990
// Function ID: 17991
// Name: native_required_assets
// Dependencies: [17991, 17998, 2]

// Module 17990 (native_required_assets)
import native_required_assets_icons from "native_required_assets_icons" /* 17991 */;
import native_required_assets_misc from "native_required_assets_misc" /* 17998 */;
import size from "module_2" /* 2 */;

const merged = Object.assign(native_required_assets_icons.NATIVE_REQUIRED_ASSETS_ICONS);
const merged1 = Object.assign(native_required_assets_misc.NATIVE_REQUIRED_ASSETS_MISC);
const result = size.fileFinishedImporting("modules/react_asset/native/native_required_assets.tsx");

export const NATIVE_REQUIRED_ASSETS = {};
