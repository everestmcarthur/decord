// Module ID: 10995
// Function ID: 10996
// Name: showThreadBrowserModal
// Dependencies: [10948, 7795, 4432, 2]
// Exports: default

// Module 10995 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 4432 */;
import ThreadUtils from "ThreadUtils" /* 7795 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10948 */;
import size from "module_2" /* 2 */;

const constants = ChannelDetailsConstants.ChannelDetailsNavigatorScreens;
let result = size.fileFinishedImporting("modules/threads/native/showThreadBrowserModal.tsx");

export default function showThreadBrowserModal(id) {
  const result = ThreadUtils.trackThreadBrowserOpened();
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (tmp2) {
    const obj3 = { channelId: id.id, initialRouteName: constants.THREADS };
    rootNavigationRef.navigate("sidebar", obj3);
  }
};
