// Module ID: 14885
// Function ID: 14886
// Name: useAccountStandingStatusLabel
// Dependencies: [12034, 12062, 14886, 1115, 14887, 2]
// Exports: useAccountStandingStatusLabel

// Module 14885 (useAccountStandingStatusLabel)
import util from "util" /* 1115 */;
import useSafetyHubAccountStanding from "useSafetyHubAccountStanding" /* 12034 */;
import useSafetyHubInitialized from "useSafetyHubInitialized" /* 12062 */;
import useSafetyHubFetchError from "useSafetyHubFetchError" /* 14886 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useAccountStandingStatusLabel.tsx");

export const useAccountStandingStatusLabel = function useAccountStandingStatusLabel() {
  const safetyHubAccountStanding = useSafetyHubAccountStanding.useSafetyHubAccountStanding();
  const safetyHubInitialized = useSafetyHubInitialized.useSafetyHubInitialized();
  const safetyHubFetchError = useSafetyHubFetchError.useSafetyHubFetchError();
  const intl = util.intl;
  if (safetyHubInitialized) {
    const obj4 = {
      hook(arg0) {
          return arg0;
        }
    };
    let formatToPlainStringResult = intl.formatToPlainString(tmp(14887).ACCOUNT_STANDING_SHORT_STATUS[safetyHubAccountStanding.state], obj4);
  } else {
    if (null != safetyHubFetchError) {
      let ZTNur7 = tmp(1115).t.TDRvqs;
    } else {
      ZTNur7 = tmp(1115).t.ZTNur7;
    }
    formatToPlainStringResult = intl.string(ZTNur7);
  }
  return formatToPlainStringResult;
};
