// Module ID: 10960
// Function ID: 10961
// Name: ChannelActionSheetUtils
// Dependencies: [4705, 7190, 4258, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10960 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4258 */;
import ChannelUtils from "ChannelUtils" /* 4705 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
};
