// Module ID: 9856
// Function ID: 9857
// Name: WindowVisibilityUtils
// Dependencies: [1896, 1074, 9855, 2]
// Exports: default

// Module 9856 (WindowVisibilityUtils)
import AppStateStore from "AppStateStore" /* 1896 */;

const AppStates = fn(1074).AppStates;
const size = fn(2);
const result = size.fileFinishedImporting("lib/WindowVisibilityUtils.native.tsx");

export default function isDiscordVisible() {
  const tmp = AppStateStore.getState() === AppStates.BACKGROUND;
  let isInPipModeResult = !tmp;
  if (tmp) {
    isInPipModeResult = obj.isInPipMode();
  }
  return isInPipModeResult;
};
