// Module ID: 12610
// Function ID: 12611
// Name: GuildPowerupRollbackSheet
// Dependencies: [21, 10321, 5027, 2]
// Exports: default

// Module 12610 (GuildPowerupRollbackSheet)
import jsxProd from "jsxProd" /* 21 */;
import components_Button_Button from "components/Button/Button" /* 5027 */;
import PromoSheet from "PromoSheet" /* 10321 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupRollbackSheet.tsx");

export default function GuildPowerupRollbackSheet(arg0) {
  ({ header, body, ctaText, onCtaPress, onDismiss } = arg0);
  return jsx(PromoSheet.PromoSheet, { title: header, description: body, onDismiss, actions: jsx(components_Button_Button.Button, { variant: "primary", text: ctaText, onPress: onCtaPress }) });
};
