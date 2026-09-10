// Module ID: 9605
// Function ID: 9606
// Name: transitionToActivity
// Dependencies: [9537, 1956, 9575, 9538, 4233, 4462, 9536, 9598, 9606, 4806, 9546, 4572, 9574, 2]
// Exports: default

// Module 9605 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4233 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 9536 */;
import ChannelCallStore from "ChannelCallStore" /* 9537 */;
import ChannelCallConstants from "ChannelCallConstants" /* 9538 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 9575 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import size from "module_2" /* 2 */;

const setVoiceChatDrawerState = ChannelCallStore.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
let result = size.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    const isModalOpenResult = tmp(4462).isModalOpen(ChannelCallModalDefault);
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(9598)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(9606)(embeddedActivityLocationChannelId);
    }
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(9598)(embeddedActivityLocationChannelId)) {
        const tmp15Result = tmp15(4806);
        ({ applicationId: obj5.applicationId, compositeInstanceId: obj5.instanceId } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmp(9546).getEmbeddedActivityParticipantId({ applicationId: null, instanceId: null }));
        const obj2 = { applicationId: null, instanceId: null };
        const tmpResult3 = tmp(9546);
        tmp15(4572).hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
        const tmp15Result2 = tmp15(4572);
      } else {
        const result = tmp(9574).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult4 = tmp(9574);
      }
    }
    const tmpResult = tmp(4462);
  }
};
