// Module ID: 9616
// Function ID: 9617
// Name: isDiscordVisible
// Dependencies: [1895, 1074, 9615, 2]
// Exports: default

// Module 9616 (isDiscordVisible)
import closure_2 from "getState" /* 1895 */;
import { AppStates } from "ME" /* 1074 */;

const result = require("set").fileFinishedImporting("lib/WindowVisibilityUtils.native.tsx");

export default function isDiscordVisible() {
  const tmp = state.getState() === AppStates.BACKGROUND;
  let isInPipModeResult = !tmp;
  if (tmp) {
    isInPipModeResult = obj.isInPipMode();
  }
  return isInPipModeResult;
};
