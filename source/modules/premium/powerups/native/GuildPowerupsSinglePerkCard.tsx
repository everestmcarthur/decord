// Module ID: 12699
// Function ID: 12700
// Name: GuildPowerupsSinglePerkCard
// Dependencies: [19, 21, 12649, 12628, 12625, 12648, 12696, 12700, 2]
// Exports: default

// Module 12699 (GuildPowerupsSinglePerkCard)
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled" /* 12625 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 12628 */;
import useCalculatePowerupCardStatus from "useCalculatePowerupCardStatus" /* 12648 */;
import useGetGuildPowerupBannerImageDefault from "useGetGuildPowerupBannerImage" /* 12649 */;
import useGuildPowerupOnShowMoreDefault from "useGuildPowerupOnShowMore" /* 12696 */;
import GuildPowerupsPerkCardDefault from "GuildPowerupsPerkCard" /* 12700 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx");

export default function GuildPowerupsSinglePerkCard(badge) {
  ({ guildId, powerup } = badge);
  let str = useGetGuildPowerupBannerImageDefault(powerup, true);
  const tmp = usePowerupActiveStatusDefault(guildId, powerup);
  const tmp2 = useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsSinglePerkCard");
  const calculatePowerupCardStatus = useCalculatePowerupCardStatus.useCalculatePowerupCardStatus(powerup, tmp, tmp2);
  const obj2 = { title: powerup.title, description: powerup.description, cost: powerup.cost, imageUrl: null, status: null, onPress: null, badge: null };
  const tmp4 = useGuildPowerupOnShowMoreDefault(guildId, powerup);
  const tmp5 = jsx;
  if (str == null) {
    str = "";
  }
  obj2.imageUrl = str;
  obj2.status = calculatePowerupCardStatus;
  obj2.onPress = tmp4;
  obj2.badge = badge.badge;
  return tmp5(GuildPowerupsPerkCardDefault, obj2);
};
