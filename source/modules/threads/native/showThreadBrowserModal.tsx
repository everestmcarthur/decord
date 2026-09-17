// Module ID: 11122
// Function ID: 11123
// Name: showThreadBrowserModal
// Dependencies: [11073, 7901, 4498, 2]
// Exports: default

// Module 11122 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 4498 */;
import ThreadUtils from "ThreadUtils" /* 7901 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11073 */;
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
