// Module ID: 16889
// Function ID: 16890
// Name: MessageRequestEmpty
// Dependencies: [19, 21, 1178, 16890, 2]
// Exports: default

// Module 16889 (MessageRequestEmpty)
import native from "native" /* 1178 */;
import Pending from "Pending" /* 16890 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestEmpty.tsx");

export default function MessageRequestEmpty(body) {
  return jsx(native.EmptyState, { Illustration: Pending.Pending, body: body.bodyText });
};
