// Module ID: 7773
// Function ID: 7774
// Name: AuthenticationUtils
// Dependencies: [1100, 7774, 2]
// Exports: getArtForPath, getToken, isAuthenticated

// Module 7773 (AuthenticationUtils)
import TokenManagerAll from "TokenManager" /* 1100 */;
import _mod7774 from "module_7774" /* 7774 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/AuthenticationUtils.tsx");

export const getToken = function getToken() {
  return TokenManagerAll.getToken();
};
export const isAuthenticated = function isAuthenticated() {
  return null != TokenManagerAll.getToken();
};
export const getArtForPath = function getArtForPath(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = null;
    if (obj.test(arg0)) {
      tmp = _mod7774;
    }
    obj = /^\/developers/;
  }
  return tmp;
};
