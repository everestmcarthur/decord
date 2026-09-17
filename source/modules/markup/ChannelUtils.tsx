// Module ID: 5096
// Function ID: 5097
// Name: markup/ChannelUtils
// Dependencies: [1962, 2]
// Exports: isChannelTypeMentionable

// Module 5096 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 1962 */;
import size from "module_2" /* 2 */;

({ isGuildSelectableChannelType: closure_0, isGuildVocalChannelType: closure_1 } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export const isChannelTypeMentionable = function isChannelTypeMentionable(type) {
  let tmp = React(type);
  if (!tmp) {
    tmp = framebus(type);
  }
  return tmp;
};
