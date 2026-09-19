// Module ID: 10040
// Function ID: 10041
// Name: useGameConsoleAccounts
// Dependencies: [5493, 1074, 504, 1370, 2]
// Exports: default

// Module 10040 (useGameConsoleAccounts)
import initialize from "initialize" /* 504 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5493 */;

require = fn;
const PlatformTypes = fn(1074).PlatformTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/useGameConsoleAccounts.tsx");

export default function useGameConsoleAccounts() {
  let items = [ConnectedAccountsStore];
  return initialize.useStateFromStoresArray(items, () => {
    const items = [ConnectedAccountsStore.getAccount(null, constants.XBOX), ConnectedAccountsStore.getAccount(null, constants.PLAYSTATION), ConnectedAccountsStore.getAccount(null, constants.PLAYSTATION_STAGING)];
    return items.filter(GlobalUtils.isNotNullish);
  });
};
