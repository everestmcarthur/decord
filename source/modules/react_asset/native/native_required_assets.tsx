// Module ID: 17998
// Function ID: 17999
// Name: native_required_assets
// Dependencies: [17999, 18006, 2]

// Module 17998 (native_required_assets)
import native_required_assets_icons from "native_required_assets_icons" /* 17999 */;
import native_required_assets_misc from "native_required_assets_misc" /* 18006 */;
import size from "module_2" /* 2 */;

const merged = Object.assign(native_required_assets_icons.NATIVE_REQUIRED_ASSETS_ICONS);
const merged1 = Object.assign(native_required_assets_misc.NATIVE_REQUIRED_ASSETS_MISC);
const result = size.fileFinishedImporting("modules/react_asset/native/native_required_assets.tsx");

export const NATIVE_REQUIRED_ASSETS = {};
