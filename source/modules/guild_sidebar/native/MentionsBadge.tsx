// Module ID: 16233
// Function ID: 16234
// Name: MentionsBadge
// Dependencies: [19, 21, 1178, 2]
// Exports: default

// Module 16233 (MentionsBadge)
import noopAll from "noop" /* 19 */;
import Button from "Button" /* 1178 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/guild_sidebar/native/MentionsBadge.tsx");

export default function MentionsBadge(arg0) {
  ({ mentionsCount, isMentionLowImportance } = arg0);
  return jsx(Button.Badge, { value, isMentionLowImportance });
};
