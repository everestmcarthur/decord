// Module ID: 12421
// Function ID: 12422
// Name: renderChannelBadge
// Dependencies: [2, 12422, 12423, 12425, 12426, 12427]

// Module 12421 (renderChannelBadge)
import components_ChannelBadge from "components/ChannelBadge" /* 12422 */;
import VocalChannelJoinButtonDefault from "VocalChannelJoinButton" /* 12423 */;
import Divider from "Divider" /* 12425 */;
import NewBadgeDefault from "NewBadge" /* 12426 */;
import GuildSearchAndInviteDefault from "GuildSearchAndInvite" /* 12427 */;
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
