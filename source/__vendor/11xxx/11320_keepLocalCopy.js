// Module ID: 11320
// Function ID: 11321
// Name: keepLocalCopy
// Dependencies: [11321, 11323, 11324, 11325, 11326, 11327, 11329, 11330]

// Module 11320 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11321 */;
import _mod11323 from "module_11323" /* 11323 */;
import _mod11324 from "module_11324" /* 11324 */;
import errorCodes from "errorCodes" /* 11325 */;
import _pickDirectory from "_pickDirectory" /* 11326 */;
import _pick from "_pick" /* 11327 */;
import _saveDocuments from "_saveDocuments" /* 11329 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11330 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11323.keepLocalCopy;
export const types = _mod11324.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
