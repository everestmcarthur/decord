// Module ID: 12384
// Function ID: 12385
// Name: renderChannelBadge
// Dependencies: [2, 12385, 12386, 12388, 12389, 12390]

// Module 12384 (renderChannelBadge)
import components_ChannelBadge from "components/ChannelBadge" /* 12385 */;
import VocalChannelJoinButtonDefault from "VocalChannelJoinButton" /* 12386 */;
import Divider from "Divider" /* 12388 */;
import NewBadgeDefault from "NewBadge" /* 12389 */;
import GuildSearchAndInviteDefault from "GuildSearchAndInvite" /* 12390 */;
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
