// Module ID: 9678
// Function ID: 9679
// Name: transitionToActivity
// Dependencies: [9610, 1957, 9648, 9611, 4266, 4495, 9609, 9671, 9679, 4839, 9619, 4605, 9647, 2]
// Exports: default

// Module 9678 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4266 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 9609 */;
import ChannelCallStore from "ChannelCallStore" /* 9610 */;
import ChannelCallConstants from "ChannelCallConstants" /* 9611 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 9648 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1957 */;
import size from "module_2" /* 2 */;

const setVoiceChatDrawerState = ChannelCallStore.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
let result = size.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    const isModalOpenResult = tmp(4495).isModalOpen(ChannelCallModalDefault);
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(9671)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(9679)(embeddedActivityLocationChannelId);
    }
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(9671)(embeddedActivityLocationChannelId)) {
        const tmp15Result = tmp15(4839);
        ({ applicationId: obj5.applicationId, compositeInstanceId: obj5.instanceId } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmp(9619).getEmbeddedActivityParticipantId({ applicationId: null, instanceId: null }));
        const obj2 = { applicationId: null, instanceId: null };
        const tmpResult3 = tmp(9619);
        tmp15(4605).hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
        const tmp15Result2 = tmp15(4605);
      } else {
        const result = tmp(9647).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult4 = tmp(9647);
      }
    }
    const tmpResult = tmp(4495);
  }
};
