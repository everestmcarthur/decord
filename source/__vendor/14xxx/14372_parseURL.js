// Module ID: 14372
// Function ID: 14373
// Name: parseURL
// Dependencies: [14373, 14377, 14380]

// Module 14372 (parseURL)
import URL from "URL" /* 14373 */;
import parseIPv4Number from "parseIPv4Number" /* 14377 */;
import replaceByteInByteSequence from "replaceByteInByteSequence" /* 14380 */;

const obj = {};
const _URL = URL.URL;
_URL.install(obj);
const _URLSearchParams = URL.URLSearchParams;
_URLSearchParams.install(obj);
({ URL: exports.URL, URLSearchParams: exports.URLSearchParams } = obj);

export const parseURL = parseIPv4Number.parseURL;
export const basicURLParse = parseIPv4Number.basicURLParse;
export const serializeURL = parseIPv4Number.serializeURL;
export const serializeHost = parseIPv4Number.serializeHost;
export const serializeInteger = parseIPv4Number.serializeInteger;
export const serializeURLOrigin = parseIPv4Number.serializeURLOrigin;
export const setTheUsername = parseIPv4Number.setTheUsername;
export const setThePassword = parseIPv4Number.setThePassword;
export const cannotHaveAUsernamePasswordPort = parseIPv4Number.cannotHaveAUsernamePasswordPort;
export const percentDecode = replaceByteInByteSequence.percentDecode;
