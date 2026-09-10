// Module ID: 11035
// Function ID: 11036
// Name: showThreadBrowserModal
// Dependencies: [10988, 7832, 4463, 2]
// Exports: default

// Module 11035 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 4463 */;
import ThreadUtils from "ThreadUtils" /* 7832 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10988 */;
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
