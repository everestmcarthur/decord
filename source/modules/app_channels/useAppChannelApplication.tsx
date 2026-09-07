// Module ID: 11616
// Function ID: 11617
// Name: useAppChannelApplication
// Dependencies: [1074, 7163, 2]
// Exports: useAppChannelApplication

// Module 11616 (useAppChannelApplication)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import fetchApplication from "fetchApplication" /* 7163 */;

const ChannelTypes = ME.ChannelTypes;
const result = set.fileFinishedImporting("modules/app_channels/useAppChannelApplication.tsx");

export const useAppChannelApplication = function useAppChannelApplication(stateFromStores) {
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  let application_id;
  if (type === ChannelTypes.GUILD_APP) {
    application_id = stateFromStores.application_id;
  }
  return fetchApplication.useApplication(application_id).data;
};
