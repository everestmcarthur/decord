// Module ID: 14793
// Function ID: 14794
// Name: useAccountStandingStatusLabel
// Dependencies: [11913, 11941, 14794, 1114, 14795, 2]
// Exports: useAccountStandingStatusLabel

// Module 14793 (useAccountStandingStatusLabel)
import util from "util" /* 1114 */;
import useSafetyHubAccountStanding from "useSafetyHubAccountStanding" /* 11913 */;
import useSafetyHubInitialized from "useSafetyHubInitialized" /* 11941 */;
import useSafetyHubFetchError from "useSafetyHubFetchError" /* 14794 */;
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
    let formatToPlainStringResult = intl.formatToPlainString(tmp(14795).ACCOUNT_STANDING_SHORT_STATUS[safetyHubAccountStanding.state], obj4);
  } else {
    if (null != safetyHubFetchError) {
      let ZTNur7 = tmp(1114).t.TDRvqs;
    } else {
      ZTNur7 = tmp(1114).t.ZTNur7;
    }
    formatToPlainStringResult = intl.string(ZTNur7);
  }
  return formatToPlainStringResult;
};
