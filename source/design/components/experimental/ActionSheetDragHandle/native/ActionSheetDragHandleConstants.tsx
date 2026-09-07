// Module ID: 8908
// Function ID: 8909
// Name: PX_4
// Dependencies: [576, 2]

// Module 8908 (PX_4)
import ThemesDefault from "Themes" /* 576 */;

const PX_4 = ThemesDefault.space.PX_4;
const PX_8 = ThemesDefault.space.PX_8;
const sum = 2 * PX_8 + PX_4;
const result = require("set").fileFinishedImporting("design/components/experimental/ActionSheetDragHandle/native/ActionSheetDragHandleConstants.tsx");

export const DRAG_HANDLE_BAR_HEIGHT = PX_4;
export const DRAG_HANDLE_PADDING = PX_8;
export const DRAG_HANDLE_HEIGHT = sum;
