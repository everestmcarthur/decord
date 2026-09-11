// Module ID: 9940
// Function ID: 9941
// Name: InviteSuggestionsActionCreators
// Dependencies: [9926, 9941, 573, 2]
// Exports: loadInviteSuggestions, searchInviteSuggestions

// Module 9940 (InviteSuggestionsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import UserAffinitiesActionCreators from "UserAffinitiesActionCreators" /* 9941 */;
import InviteSuggestionsStore from "InviteSuggestionsStore" /* 9926 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/InviteSuggestionsActionCreators.tsx");

export const loadInviteSuggestions = function loadInviteSuggestions(arg0) {
  ({ omitUserIds: require, guild: importDefault, channel: dependencyMap, applicationId: closure_3, inviteTargetType: closure_4 } = arg0);
  const userAffinitiesV2 = UserAffinitiesActionCreators.fetchUserAffinitiesV2();
  return userAffinitiesV2.then(() => {
    let set = require;
    if (require == null) {
      const _Set = Set;
      set = new Set();
    }
    DispatcherDefault.dispatch({ type: "LOAD_INVITE_SUGGESTIONS", omitUserIds: set, guild, channel, applicationId, inviteTargetType });
  });
};
export const searchInviteSuggestions = function searchInviteSuggestions(query) {
  DispatcherDefault.dispatch({ type: "INVITE_SUGGESTIONS_SEARCH", query });
};
