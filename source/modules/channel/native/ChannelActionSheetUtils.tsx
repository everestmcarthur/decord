// Module ID: 11027
// Function ID: 11028
// Name: ChannelActionSheetUtils
// Dependencies: [4750, 7241, 4302, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 11027 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4302 */;
import ChannelUtils from "ChannelUtils" /* 4750 */;
import ClipboardUtils from "ClipboardUtils" /* 7241 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
};
