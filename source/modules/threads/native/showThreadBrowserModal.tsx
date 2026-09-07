// Module ID: 10968
// Function ID: 10969
// Name: showThreadBrowserModal
// Dependencies: [10921, 7781, 4418, 2]
// Exports: default

// Module 10968 (showThreadBrowserModal)
import set from "set" /* 2 */;
import getRootNavigationRef from "getRootNavigationRef" /* 4418 */;
import getAccessibilityLabelFormatter from "getAccessibilityLabelFormatter" /* 7781 */;
import ChannelDetailsNavigatorScreens from "ChannelDetailsNavigatorScreens" /* 10921 */;

let closure_2 = ChannelDetailsNavigatorScreens.ChannelDetailsNavigatorScreens;
let result = set.fileFinishedImporting("modules/threads/native/showThreadBrowserModal.tsx");

export default function showThreadBrowserModal(id) {
  let obj = getAccessibilityLabelFormatter;
  const result = obj.trackThreadBrowserOpened();
  const rootNavigationRef = getRootNavigationRef.getRootNavigationRef();
  const obj2 = getRootNavigationRef;
  if (tmp2) {
    obj = { channelId: null, initialRouteName: null };
    obj[0] = id.id;
    obj[1] = constants.THREADS;
    rootNavigationRef.navigate("sidebar", obj);
  }
};
