// Module ID: 15773
// Function ID: 15774
// Name: CaptchaTestUtils
// Dependencies: [15774, 2]

// Module 15773 (CaptchaTestUtils)
import CaptchaTestActionCreators from "CaptchaTestActionCreators" /* 15774 */;
import size from "module_2" /* 2 */;

const entries = Object.entries(CaptchaTestActionCreators.HCaptchaDifficulty);
const mapped = entries.map((item) => {
  [tmp, str] = item;
  return { id: str.toString(), label: tmp, value: str };
});
const found = mapped.filter(function isHCaptchaDifficulty(value) {
  return typeof value.value !== "string";
});
const entries1 = Object.entries(CaptchaTestActionCreators.CaptchaDeciderType);
const mapped1 = entries1.map((item) => {
  [tmp, tmp2] = item;
  return { id, label, value: id };
});
const result = size.fileFinishedImporting("modules/captcha/tooling/CaptchaTestUtils.tsx");

export const HCAPTCHA_DIFFICULTY_OPTIONS = found;
export const CAPTCHA_DECIDER_TYPE_OPTIONS = mapped1;
