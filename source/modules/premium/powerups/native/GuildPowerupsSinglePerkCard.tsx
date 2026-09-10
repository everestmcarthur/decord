// Module ID: 12600
// Function ID: 12601
// Name: GuildPowerupsSinglePerkCard
// Dependencies: [19, 21, 12550, 12529, 12526, 12549, 12597, 12601, 2]
// Exports: default

// Module 12600 (GuildPowerupsSinglePerkCard)
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled" /* 12526 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 12529 */;
import useCalculatePowerupCardStatus from "useCalculatePowerupCardStatus" /* 12549 */;
import useGetGuildPowerupBannerImageDefault from "useGetGuildPowerupBannerImage" /* 12550 */;
import useGuildPowerupOnShowMoreDefault from "useGuildPowerupOnShowMore" /* 12597 */;
import GuildPowerupsPerkCardDefault from "GuildPowerupsPerkCard" /* 12601 */;
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
