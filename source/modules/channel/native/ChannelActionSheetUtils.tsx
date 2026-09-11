// Module ID: 11050
// Function ID: 11051
// Name: ChannelActionSheetUtils
// Dependencies: [4752, 7263, 4304, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 11050 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4304 */;
import ChannelUtils from "ChannelUtils" /* 4752 */;
import ClipboardUtils from "ClipboardUtils" /* 7263 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
};
