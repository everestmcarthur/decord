// Module ID: 11706
// Function ID: 11707
// Name: useAppChannelApplication
// Dependencies: [1074, 7237, 2]
// Exports: useAppChannelApplication

// Module 11706 (useAppChannelApplication)
import Constants from "Constants" /* 1074 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 7237 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/app_channels/useAppChannelApplication.tsx");

export const useAppChannelApplication = function useAppChannelApplication(stateFromStores) {
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  let application_id;
  if (type === ChannelTypes.GUILD_APP) {
    application_id = stateFromStores.application_id;
  }
  return ApplicationActionCreators.useApplication(application_id).data;
};
