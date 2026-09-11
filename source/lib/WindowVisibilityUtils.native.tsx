// Module ID: 9702
// Function ID: 9703
// Name: WindowVisibilityUtils
// Dependencies: [1895, 1074, 9701, 2]
// Exports: default

// Module 9702 (WindowVisibilityUtils)
import AppStateStore from "AppStateStore" /* 1895 */;

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
