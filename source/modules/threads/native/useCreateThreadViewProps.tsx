// Module ID: 11452
// Function ID: 11453
// Name: useCreateThreadViewProps
// Dependencies: [1957, 10342, 563, 2]
// Exports: default

// Module 11452 (useCreateThreadViewProps)
import useGetThreadDraftSettingsDefault from "useGetThreadDraftSettings" /* 10342 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/useCreateThreadViewProps.tsx");

export default function useCreateThreadViewProps(arg0) {
  const tmp = useGetThreadDraftSettingsDefault(arg0);
  _require = tmp;
  const items = [ChannelStore];
  const items1 = [tmp];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
    parentChannelId = undefined;
    if (parentChannelId != null) {
      parentChannelId = parentChannelId.parentChannelId;
    }
    return ChannelStore.getChannel(parentChannelId);
  }, items1);
  let tmp3 = null;
  if (null != tmp) {
    tmp3 = null;
    if (null != stateFromStores) {
      const obj2 = { threadSettingsDraft: tmp, parentChannel: stateFromStores };
      tmp3 = obj2;
    }
  }
  return tmp3;
};
