// Module ID: 11088
// Function ID: 11089
// Name: ChannelActionSheetUtils
// Dependencies: [4781, 7292, 4334, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 11088 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4334 */;
import ChannelUtils from "ChannelUtils" /* 4781 */;
import ClipboardUtils from "ClipboardUtils" /* 7292 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
};
