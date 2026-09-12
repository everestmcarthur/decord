// Module ID: 14850
// Function ID: 14851
// Name: useAccountStandingStatusLabel
// Dependencies: [12012, 12040, 14851, 1114, 14852, 2]
// Exports: useAccountStandingStatusLabel

// Module 14850 (useAccountStandingStatusLabel)
import util from "util" /* 1114 */;
import useSafetyHubAccountStanding from "useSafetyHubAccountStanding" /* 12012 */;
import useSafetyHubInitialized from "useSafetyHubInitialized" /* 12040 */;
import useSafetyHubFetchError from "useSafetyHubFetchError" /* 14851 */;
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
    let formatToPlainStringResult = intl.formatToPlainString(tmp(14852).ACCOUNT_STANDING_SHORT_STATUS[safetyHubAccountStanding.state], obj4);
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
