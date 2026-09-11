// Module ID: 10391
// Function ID: 10392
// Name: CreatorRevenueButton
// Dependencies: [19, 21, 4607, 10392, 2]
// Exports: CreatorRevenueButton

// Module 10391 (CreatorRevenueButton)
import ShinyButtonDefault from "ShinyButton" /* 10392 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const createStyles = fn(4607);
let closure_3 = createStyles.createStyles({ container: { borderRadius: 3 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/CreatorRevenueButton.tsx");

export const CreatorRevenueButton = function CreatorRevenueButton(arg0) {
  ({ disabled, text, onPress, style, loading } = arg0);
  const obj = { style: null, loading, disabled, onPress, text };
  const items = [closure_3().container, style];
  obj.style = items;
  return jsx(ShinyButtonDefault, { style: null, loading, disabled, onPress, text });
};
