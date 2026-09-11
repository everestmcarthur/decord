// Module ID: 16870
// Function ID: 16871
// Name: YouSettingsCoachmark
// Dependencies: [16871, 11224, 2]
// Exports: default, useYouSettingsCoachmark

// Module 16870 (YouSettingsCoachmark)
import useCoachmark from "useCoachmark" /* 11224 */;
import useReferralProgramCoachmark from "useReferralProgramCoachmark" /* 16871 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouSettingsCoachmark.tsx");

export default function YouSettingsCoachmark(buttonRef) {
  const merged = Object.assign(buttonRef, Object.assign({ buttonRef: 0 }));
  const coachmark = useCoachmark.useCoachmark(buttonRef.buttonRef, merged);
  return null;
};
export const useYouSettingsCoachmark = function useYouSettingsCoachmark(disabled) {
  let referralProgramCoachmark = useReferralProgramCoachmark.useReferralProgramCoachmark({ disabled: disabled.disabled });
  if (referralProgramCoachmark == null) {
    referralProgramCoachmark = null;
  }
  return referralProgramCoachmark;
};
