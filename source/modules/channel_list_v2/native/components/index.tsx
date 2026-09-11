// Module ID: 12386
// Function ID: 12387
// Name: renderChannelBadge
// Dependencies: [2, 12387, 12388, 12390, 12391, 12392]

// Module 12386 (renderChannelBadge)
import components_ChannelBadge from "components/ChannelBadge" /* 12387 */;
import VocalChannelJoinButtonDefault from "VocalChannelJoinButton" /* 12388 */;
import Divider from "Divider" /* 12390 */;
import NewBadgeDefault from "NewBadge" /* 12391 */;
import GuildSearchAndInviteDefault from "GuildSearchAndInvite" /* 12392 */;
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
