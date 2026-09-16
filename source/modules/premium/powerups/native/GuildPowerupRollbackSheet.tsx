// Module ID: 12658
// Function ID: 12659
// Name: GuildPowerupRollbackSheet
// Dependencies: [21, 10369, 5060, 2]
// Exports: default

// Module 12658 (GuildPowerupRollbackSheet)
import jsxProd from "jsxProd" /* 21 */;
import components_Button_Button from "components/Button/Button" /* 5060 */;
import PromoSheet from "PromoSheet" /* 10369 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupRollbackSheet.tsx");

export default function GuildPowerupRollbackSheet(arg0) {
  ({ header, body, ctaText, onCtaPress, onDismiss } = arg0);
  return jsx(PromoSheet.PromoSheet, { title: header, description: body, onDismiss, actions: jsx(components_Button_Button.Button, { variant: "primary", text: ctaText, onPress: onCtaPress }) });
};
