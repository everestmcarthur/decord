// Module ID: 12959
// Function ID: 12960
// Name: trustDomain
// Dependencies: [573, 2]
// Exports: trustDomain, trustProtocol

// Module 12959 (trustDomain)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 573 */;

const result = set.fileFinishedImporting("actions/MaskedLinkActionCreators.tsx");

export const trustDomain = function trustDomain(url) {
  let obj = dispatcherDefault;
  obj = { type: "MASKED_LINK_ADD_TRUSTED_DOMAIN", url };
  obj.dispatch(obj);
};
export const trustProtocol = function trustProtocol(url) {
  let obj = dispatcherDefault;
  obj = { type: "MASKED_LINK_ADD_TRUSTED_PROTOCOL", url };
  obj.dispatch(obj);
};
