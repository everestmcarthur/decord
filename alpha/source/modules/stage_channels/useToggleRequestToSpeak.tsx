// Module ID: 10187
// Function ID: 10188
// Name: useToggleRequestToSpeak
// Dependencies: [32, 19, 502, 504, 4903, 5634, 8681, 8683, 8668, 2]
// Exports: default

// Module 10187 (useToggleRequestToSpeak)
import useAudienceRequestToSpeakStateDefault from "useAudienceRequestToSpeakState" /* 4903 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8681 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/useToggleRequestToSpeak.tsx");

export default function useToggleRequestToSpeak(id) {
  _require = id;
  const items = [AuthenticationStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => id2.getId());
  const tmp4 = useAudienceRequestToSpeakStateDefault(stateFromStores, id.id);
  importDefault = tmp4;
  const tmp5 = tmp4 === require("useAudienceRequestToSpeakState").RequestToSpeakStates.REQUESTED_TO_SPEAK || tmp4 === require("useAudienceRequestToSpeakState").RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  dependencyMap = tmp5;
  const tmp6 = first(noop.useState(tmp5), 2);
  first = tmp6[0];
  noop = tmp6[1];
  const items1 = [tmp5];
  const effect = noop.useEffect(() => {
    closure_4(closure_2);
  }, items1);
  const items2 = [
    first,
    () => {
      if (obj.shouldAgeVerifyToSpeakForCurrentUser(id.id)) {
        const obj2 = { entryPoint: tmp(8683).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
        const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj2);
      } else {
        if (closure_1 === tmp(4903).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
          const result1 = tmp(8668).audienceAckRequestToSpeak(tmp3, true);
          const tmpResult = tmp(8668);
        } else {
          tmp(8668).toggleRequestToSpeak(tmp3, !first);
          const tmpResult2 = tmp(8668);
        }
        closure_4(!first);
      }
    }
  ];
  return items2;
};
