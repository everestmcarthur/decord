// Module ID: 12084
// Function ID: 12085
// Name: PrivateChannelRecipientActionCreators
// Dependencies: [1074, 1272, 2]

// Module 12084 (PrivateChannelRecipientActionCreators)
import Constants from "Constants" /* 1074 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/private_channel_recipient/PrivateChannelRecipientActionCreators.tsx");

export default {
  updatePrivateChannelRecipientFlags(id, setFlagResult) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.CHANNEL_RECIPIENT_ME(id), body: { flags: setFlagResult }, rejectWithError: false };
    return HTTP.patch(request);
  }
};
