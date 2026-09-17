// Module ID: 8523
// Function ID: 8524
// Name: isChangelogChannel
// Dependencies: [1958, 2011, 2]
// Exports: default

// Module 8523 (isChangelogChannel)
import ChannelStore from "ChannelStore" /* 1958 */;

const SYSTEM_UPDATES_USER_ID = fn(2011).SYSTEM_UPDATES_USER_ID;
const size = fn(2);
const result = size.fileFinishedImporting("modules/changelog/utils/isChangelogChannel.tsx");

export default function isChangelogChannel(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 === ChannelStore.getDMFromUserId(SYSTEM_UPDATES_USER_ID);
  }
  return tmp;
};
