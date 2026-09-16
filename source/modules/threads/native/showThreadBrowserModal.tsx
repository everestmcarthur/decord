// Module ID: 11114
// Function ID: 11115
// Name: showThreadBrowserModal
// Dependencies: [11065, 7895, 4496, 2]
// Exports: default

// Module 11114 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 4496 */;
import ThreadUtils from "ThreadUtils" /* 7895 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11065 */;
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
