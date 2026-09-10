// Module ID: 12321
// Function ID: 12322
// Name: renderChannelBadge
// Dependencies: [2, 12322, 12323, 12325, 12326, 12327]

// Module 12321 (renderChannelBadge)
import components_ChannelBadge from "components/ChannelBadge" /* 12322 */;
import VocalChannelJoinButtonDefault from "VocalChannelJoinButton" /* 12323 */;
import Divider from "Divider" /* 12325 */;
import NewBadgeDefault from "NewBadge" /* 12326 */;
import GuildSearchAndInviteDefault from "GuildSearchAndInvite" /* 12327 */;
import size from "module_2" /* 2 */;

const DividerDefault = Divider;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/index.tsx");

export const renderChannelBadge = components_ChannelBadge.renderChannelBadge;
export const VocalChannelJoinButton = VocalChannelJoinButtonDefault;
export const Divider = DividerDefault;
export const DIVIDER_MARGIN_BOTTOM = Divider.DIVIDER_MARGIN_BOTTOM;
export const DIVIDER_MARGIN_TOP = Divider.DIVIDER_MARGIN_TOP;
export const NewBadge = NewBadgeDefault;
export const GuildSearchAndInvite = GuildSearchAndInviteDefault;
