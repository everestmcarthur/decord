// Module ID: 16889
// Function ID: 16890
// Name: MessageRequestEmpty
// Dependencies: [19, 21, 1178, 16890, 2]
// Exports: default

// Module 16889 (MessageRequestEmpty)
import noopAll from "noop" /* 19 */;
import Button from "Button" /* 1178 */;
import getPendingSource from "getPendingSource" /* 16890 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/message_request/native/MessageRequestEmpty.tsx");

export default function MessageRequestEmpty(body) {
  return jsx(Button.EmptyState, { Illustration: getPendingSource.Pending, body: body.bodyText });
};
