// Module ID: 10968
// Function ID: 10969
// Name: showThreadBrowserModal
// Dependencies: [10921, 7781, 4418, 2]
// Exports: default

// Module 10968 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 4418 */;
import ThreadUtils from "ThreadUtils" /* 7781 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10921 */;
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
