// Module ID: 12665
// Function ID: 12666
// Name: GuildPowerupsSinglePerkCard
// Dependencies: [19, 21, 12615, 12594, 12591, 12614, 12662, 12666, 2]
// Exports: default

// Module 12665 (GuildPowerupsSinglePerkCard)
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled" /* 12591 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 12594 */;
import useCalculatePowerupCardStatus from "useCalculatePowerupCardStatus" /* 12614 */;
import useGetGuildPowerupBannerImageDefault from "useGetGuildPowerupBannerImage" /* 12615 */;
import useGuildPowerupOnShowMoreDefault from "useGuildPowerupOnShowMore" /* 12662 */;
import GuildPowerupsPerkCardDefault from "GuildPowerupsPerkCard" /* 12666 */;
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
