// Module ID: 4507
// Function ID: 4508
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4287, 4508, 4286, 4509, 4510, 4512, 4513, 4514]

// Module 4507 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 4286 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4287 */;
import APIErrorDefault from "APIError" /* 4508 */;
import StripeErrorDefault from "StripeError" /* 4509 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 4510 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 4512 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 4513 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 4514 */;
import size from "module_2" /* 2 */;

const UploadVoiceDebugLogsErrorDefault = UploadVoiceDebugLogsError;

const result = size.fileFinishedImporting("errors/index.tsx");

export const V6OrEarlierAPIError = errors_V6OrEarlierAPIErrorDefault;
export const APIError = APIErrorDefault;
export const BillingError = BillingErrorDefault;
export const StripeError = StripeErrorDefault;
export const NativeDispatchError = NativeDispatchErrorDefault;
export const AppliedGuildBoostError = AppliedGuildBoostErrorDefault;
export const ClientOutdatedAcceptGiftError = ClientOutdatedAcceptGiftErrorDefault;
export const UploadVoiceDebugLogsError = UploadVoiceDebugLogsErrorDefault;
export const UploadErrorCodes = UploadVoiceDebugLogsError.UploadErrorCodes;
