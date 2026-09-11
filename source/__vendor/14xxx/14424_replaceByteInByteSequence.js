// Module ID: 14424
// Function ID: 14425
// Name: replaceByteInByteSequence
// Dependencies: [14425, 14429, 14432]

// Module 14424 (replaceByteInByteSequence)
import _mod14425 from "module_14425" /* 14425 */;
import _mod14429 from "module_14429" /* 14429 */;
import _mod14432 from "module_14432" /* 14432 */;

const obj = {};
const _URL = _mod14425.URL;
_URL.install(obj);
const _URLSearchParams = _mod14425.URLSearchParams;
_URLSearchParams.install(obj);
({ URL: exports.URL, URLSearchParams: exports.URLSearchParams } = obj);

export const parseURL = _mod14429.parseURL;
export const basicURLParse = _mod14429.basicURLParse;
export const serializeURL = _mod14429.serializeURL;
export const serializeHost = _mod14429.serializeHost;
export const serializeInteger = _mod14429.serializeInteger;
export const serializeURLOrigin = _mod14429.serializeURLOrigin;
export const setTheUsername = _mod14429.setTheUsername;
export const setThePassword = _mod14429.setThePassword;
export const cannotHaveAUsernamePasswordPort = _mod14429.cannotHaveAUsernamePasswordPort;
export const percentDecode = _mod14432.percentDecode;
