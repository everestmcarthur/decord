// Module ID: 11056
// Function ID: 11057
// Name: showThreadBrowserModal
// Dependencies: [11008, 7853, 4465, 2]
// Exports: default

// Module 11056 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 4465 */;
import ThreadUtils from "ThreadUtils" /* 7853 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11008 */;
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
