// Module ID: 12635
// Function ID: 12636
// Name: getGuildPowerupFormattedDateString
// Dependencies: [2026, 2]
// Exports: default

// Module 12635 (getGuildPowerupFormattedDateString)
import LocaleStore from "LocaleStore" /* 2026 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupFormattedDateString.tsx");

export default function getGuildPowerupFormattedDateString(arg0) {
  let date = arg1;
  if (arg1 === undefined) {
    date = { month: "numeric", day: "numeric" };
  }
  return new Date(arg0).toLocaleDateString(LocaleStore.locale, date);
};
