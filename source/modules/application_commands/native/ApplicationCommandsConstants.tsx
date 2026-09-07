// Module ID: 10268
// Function ID: 10269
// Name: AUTOCOMPLETE_ROW_HEIGHT
// Dependencies: [1115, 2]

// Module 10268 (AUTOCOMPLETE_ROW_HEIGHT)
import set from "set" /* 1115 */;

let num = 56;
if (set.isAndroid()) {
  num = 64;
}
const result = set.fileFinishedImporting("modules/application_commands/native/ApplicationCommandsConstants.tsx");

export const AUTOCOMPLETE_ROW_HEIGHT = 48;
export const AUTOCOMPLETE_EMOJI_ROW_HEIGHT = num;
