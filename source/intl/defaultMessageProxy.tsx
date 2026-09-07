// Module ID: 14188
// Function ID: 14189
// Name: _defaultMessages
// Dependencies: [1155, 1119, 14189, 2]

// Module 14188 (_defaultMessages)
import set from "set" /* 2 */;
import messagesProxyDefault from "messagesProxy" /* 14189 */;
import module_1155 from "module_1155" /* 1155 */;
import importDefaultResult from "messagesProxy" /* 1119 */;

const chainMessagesObjectsResult = module_1155.chainMessagesObjects(importDefaultResult, messagesProxyDefault);
const result = set.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
