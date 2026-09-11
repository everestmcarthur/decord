// Module ID: 14841
// Function ID: 14842
// Name: TwoFASetupStyles
// Dependencies: [1074, 4607, 5576, 576, 2]

// Module 14841 (TwoFASetupStyles)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import createStyles from "createStyles" /* 4607 */;
import TextStyles from "TextStyles" /* 5576 */;
import size from "module_2" /* 2 */;

const obj = { text: { textAlign: "center", marginLeft: 20, marginRight: 20 }, modalHeader: null, modalBody: null };
const merged = Object.assign(TextStyles(Constants.Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj.modalHeader = {};
obj.modalBody = { color: nativeDefault.colors.TEXT_SUBTLE, marginTop: 8 };
const styles = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupStyles.tsx");

export const useTwoFASetupStyles = styles;
