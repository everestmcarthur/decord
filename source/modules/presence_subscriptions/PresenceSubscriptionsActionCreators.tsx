// Module ID: 11480
// Function ID: 11481
// Name: subscribe
// Dependencies: [573, 2]
// Exports: subscribe

// Module 11480 (subscribe)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 573 */;

const result = set.fileFinishedImporting("modules/presence_subscriptions/PresenceSubscriptionsActionCreators.tsx");

export const subscribe = function subscribe(subscription) {
  let obj = dispatcherDefault;
  obj = { type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription };
  obj.dispatch(obj);
};
