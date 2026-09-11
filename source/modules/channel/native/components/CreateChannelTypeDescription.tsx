// Module ID: 9840
// Function ID: 9841
// Name: CreateChannelTypeDescription
// Dependencies: [19, 17, 9155, 1074, 21, 9277, 5602, 4602, 1114, 2]
// Exports: default

// Module 9840 (CreateChannelTypeDescription)
import useGuildProfile from "useGuildProfile" /* 9277 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const GuildProfileFetchStatus = fn(9155).GuildProfileFetchStatus;
const ChannelTypes = fn(1074).ChannelTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/native/components/CreateChannelTypeDescription.tsx");

export default function CreateChannelTypeDescription(guildId) {
  guildId = guildId.guildId;
  fetchGuildProfile = undefined;
  const guildProfile1 = useGuildProfile.useGuildProfile(guildId);
  ({ guildProfile, fetchGuildProfile } = guildProfile1);
  let hasItem = null != guildProfile;
  if (hasItem) {
    const VISIBLE = tmp(5602).GuildProfileVisibilitySets.VISIBLE;
    hasItem = VISIBLE.has(guildProfile.visibility);
  }
  let tmp6 = !tmp5;
  if (guildProfile1.fetchStatus === GuildProfileFetchStatus.FETCHED) {
    tmp6 = !hasItem;
  }
  if (tmp6) {
    tmp6 = guildId.channelType === ChannelTypes.GUILD_ANNOUNCEMENT;
  }
  const items = [guildId, fetchGuildProfile];
  const effect = noop.useEffect(() => {
    fetchGuildProfile();
  }, items);
  let tmp9 = null;
  if (tmp6) {
    const obj2 = { children: null };
    const obj3 = { variant: "text-sm/normal", color: "text-subtle", children: null };
    const intl = tmp(1114).intl;
    obj3.children = intl.string(tmp(1114).t["2Ab4Id"]);
    obj2.children = jsx(tmp(4602).Text, { variant: "text-sm/normal", color: "text-subtle", children: null });
    tmp9 = <View>{null}</View>;
  }
  return tmp9;
};
