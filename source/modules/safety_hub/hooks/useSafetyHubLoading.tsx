// Module ID: 14772
// Function ID: 14773
// Name: useIsSafetyHubLoading
// Dependencies: [8430, 504, 2]
// Exports: default

// Module 14772 (useIsSafetyHubLoading)
import initialize from "initialize" /* 504 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 8430 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => fetching.isFetching());
};
