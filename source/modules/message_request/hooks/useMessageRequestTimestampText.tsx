// Module ID: 16917
// Function ID: 16918
// Name: useMessageRequestTimestampText
// Dependencies: [4589, 11, 12624, 504, 4166, 7795, 2]
// Exports: useMessageRequestRelativeTimestampText, useMessageRequestTimestampText

// Module 16917 (useMessageRequestTimestampText)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef4166 from "module_4166" /* 4166 */;
import ReadStateStore from "ReadStateStore" /* 4589 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useMessageRequestTimestampText.tsx");

export const useMessageRequestTimestampText = function useMessageRequestTimestampText(channel) {
  _require = channel;
  const messageRequestPreview = require("useMessageRequestPreview").useMessageRequestPreview(channel);
  const obj2 = { lastMessageId: null };
  const obj = require("useMessageRequestPreview");
  const items = [ReadStateStore];
  obj2.lastMessageId = require("initialize").useStateFromStores(items, () => ReadStateStore.lastMessageId(id.id));
  const merged = Object.assign(messageRequestPreview);
  ({ lastMessageId, message } = obj2);
  if (obj2.loaded) {
    if (null != message) {
      let extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(message.id);
    }
    let str = "";
    if (null != extractTimestampResult) {
      str = _modDef4166(extractTimestampResult).calendar();
      const obj6 = _modDef4166(extractTimestampResult);
    }
    return str;
  }
  extractTimestampResult = null;
  if (null != lastMessageId) {
    extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(lastMessageId);
  }
};
export const useMessageRequestRelativeTimestampText = function useMessageRequestRelativeTimestampText(channel) {
  _require = channel;
  const messageRequestPreview = require("useMessageRequestPreview").useMessageRequestPreview(channel);
  const obj2 = { lastMessageId: null };
  const obj = require("useMessageRequestPreview");
  const tmp = _require;
  const items = [ReadStateStore];
  obj2.lastMessageId = require("initialize").useStateFromStores(items, () => ReadStateStore.lastMessageId(id.id));
  const merged = Object.assign(messageRequestPreview);
  ({ lastMessageId, message } = obj2);
  if (obj2.loaded) {
    if (null != message) {
      let extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(message.id);
    }
    let str = "";
    if (null != extractTimestampResult) {
      str = tmp(7795).getTimestampString(extractTimestampResult);
      const tmpResult = tmp(7795);
    }
    return str;
  }
  extractTimestampResult = null;
  if (null != lastMessageId) {
    extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(lastMessageId);
  }
};
