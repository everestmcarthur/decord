// Module ID: 1610
// Function ID: 1611
// Name: ChatInputFocused
// Dependencies: [2]
// Exports: getIsAnyChatInputFocused, setIsAnyChatInputFocused

// Module 1610 (ChatInputFocused)
import size from "module_2" /* 2 */;

let global = false;
const result = size.fileFinishedImporting("modules/keyboard/native/ChatInputFocused.tsx");

export function setIsAnyChatInputFocused(arg0) {
  global = arg0;
}
export function getIsAnyChatInputFocused() {
  return global;
}
