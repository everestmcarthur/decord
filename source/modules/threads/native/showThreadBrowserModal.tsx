// Module ID: 11058
// Function ID: 11059
// Name: showThreadBrowserModal
// Dependencies: [11010, 7854, 4465, 2]
// Exports: default

// Module 11058 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 4465 */;
import ThreadUtils from "ThreadUtils" /* 7854 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11010 */;
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
