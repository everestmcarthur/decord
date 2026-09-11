// Module ID: 17557
// Function ID: 17558
// Name: RelationshipManager
// Dependencies: [1074, 4458, 1114, 17558, 7191, 2]

// Module 17557 (RelationshipManager)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import shared from "shared" /* 4458 */;
import RelationshipUtilsAll from "RelationshipUtils" /* 17558 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7191 */;
import size from "module_2" /* 2 */;

function handleRelationshipAdd(relationship) {
  relationship = relationship.relationship;
  if (!tmp) {
    const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
    const intl = util.intl;
    const obj = { username: relationship.user.username };
    AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.zH0kC7, obj));
    const result = RelationshipUtilsAll.showPendingNotification(relationship.user);
  }
}
function handleFriendRequestAccepted(user) {
  user = user.user;
  const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
  const intl = util.intl;
  AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t["/+7xky"], { username: user.username }));
  const result = RelationshipUtilsAll.showAcceptedNotification(user);
}
const RelationshipTypes = Constants.RelationshipTypes;
const prototype = function RelationshipManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { RELATIONSHIP_ADD: handleRelationshipAdd, FRIEND_REQUEST_ACCEPTED: handleFriendRequestAccepted };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
let result = size.fileFinishedImporting("modules/relationships/RelationshipManager.tsx");

export default prototype1;
