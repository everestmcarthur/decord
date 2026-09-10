// Module ID: 9567
// Function ID: 9568
// Name: transitionToActivity
// Dependencies: [9499, 1956, 9537, 9500, 4202, 4431, 9498, 9560, 9568, 4775, 9508, 4541, 9536, 2]
// Exports: default

// Module 9567 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4202 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 9498 */;
import ChannelCallStore from "ChannelCallStore" /* 9499 */;
import ChannelCallConstants from "ChannelCallConstants" /* 9500 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 9537 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import size from "module_2" /* 2 */;

const setVoiceChatDrawerState = ChannelCallStore.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
let result = size.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    const isModalOpenResult = tmp(4431).isModalOpen(ChannelCallModalDefault);
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(9560)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(9568)(embeddedActivityLocationChannelId);
    }
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(9560)(embeddedActivityLocationChannelId)) {
        const tmp15Result = tmp15(4775);
        ({ applicationId: obj5.applicationId, compositeInstanceId: obj5.instanceId } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmp(9508).getEmbeddedActivityParticipantId({ applicationId: null, instanceId: null }));
        const obj2 = { applicationId: null, instanceId: null };
        const tmpResult3 = tmp(9508);
        tmp15(4541).hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
        const tmp15Result2 = tmp15(4541);
      } else {
        const result = tmp(9536).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult4 = tmp(9536);
      }
    }
    const tmpResult = tmp(4431);
  }
};
