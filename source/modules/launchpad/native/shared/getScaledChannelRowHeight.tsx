// Module ID: 16869
// Function ID: 16870
// Name: getScaledChannelRowHeight
// Dependencies: [16867, 2]
// Exports: default

// Module 16869 (getScaledChannelRowHeight)
import getLayoutStylesDefault from "getLayoutStyles" /* 16867 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/launchpad/native/shared/getScaledChannelRowHeight.tsx");

export default function getScaledChannelRowHeight(arg0) {
  const tmp = getLayoutStylesDefault();
  return Math.max(Math.max(arg0, 1) * (tmp.channelName.height + (tmp.messagePreview.margin.marginTop + tmp.messagePreview.height)), tmp.icon.wrapper.size) + 2 * tmp.container.padding.paddingVertical + 2 * tmp.layout.margin.marginVertical + 4;
};
