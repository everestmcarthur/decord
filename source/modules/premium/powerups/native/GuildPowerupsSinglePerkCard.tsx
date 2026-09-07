// Module ID: 12574
// Function ID: 12575
// Name: GuildPowerupsSinglePerkCard
// Dependencies: [19, 21, 12524, 12503, 12500, 12523, 12571, 12575, 2]
// Exports: default

// Module 12574 (GuildPowerupsSinglePerkCard)
import noopAll from "noop" /* 19 */;
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled" /* 12500 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 12503 */;
import useCalculatePowerupCardStatus from "useCalculatePowerupCardStatus" /* 12523 */;
import useGetGuildPowerupBannerImageDefault from "useGetGuildPowerupBannerImage" /* 12524 */;
import useGuildPowerupOnShowMoreDefault from "useGuildPowerupOnShowMore" /* 12571 */;
import GuildPowerupsPerkCardDefault from "GuildPowerupsPerkCard" /* 12575 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx");

export default function GuildPowerupsSinglePerkCard(badge) {
  ({ guildId, powerup } = badge);
  let str = useGetGuildPowerupBannerImageDefault(powerup, true);
  const tmp = usePowerupActiveStatusDefault(guildId, powerup);
  let obj = useCalculatePowerupCardStatus;
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(powerup, tmp, useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsSinglePerkCard"));
  const tmp2 = useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsSinglePerkCard");
  obj = { title: powerup.title, description: powerup.description, cost: powerup.cost, imageUrl: null, status: null, onPress: null, badge: null };
  const tmp4 = useGuildPowerupOnShowMoreDefault(guildId, powerup);
  const tmp5 = jsx;
  if (str == null) {
    str = "";
  }
  obj[3] = str;
  obj[4] = calculatePowerupCardStatus;
  obj[5] = tmp4;
  obj[6] = badge.badge;
  return tmp5(GuildPowerupsPerkCardDefault, obj);
};
