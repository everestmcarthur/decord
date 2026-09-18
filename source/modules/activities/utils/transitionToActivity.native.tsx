// Module ID: 9783
// Function ID: 9784
// Name: transitionToActivity
// Dependencies: [9705, 1957, 9743, 9706, 4351, 4579, 9704, 9776, 9784, 4923, 9714, 4689, 9742, 2]
// Exports: default

// Module 9783 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4351 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 9704 */;
import ChannelCallStore from "ChannelCallStore" /* 9705 */;
import ChannelCallConstants from "ChannelCallConstants" /* 9706 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 9743 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1957 */;
import size from "module_2" /* 2 */;

const setVoiceChatDrawerState = ChannelCallStore.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
let result = size.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    const isModalOpenResult = tmp(4579).isModalOpen(ChannelCallModalDefault);
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(9776)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(9784)(embeddedActivityLocationChannelId);
    }
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(9776)(embeddedActivityLocationChannelId)) {
        const tmp15Result = tmp15(4923);
        ({ applicationId: obj5.applicationId, compositeInstanceId: obj5.instanceId } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmp(9714).getEmbeddedActivityParticipantId({ applicationId: null, instanceId: null }));
        const obj2 = { applicationId: null, instanceId: null };
        const tmpResult3 = tmp(9714);
        tmp15(4689).hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
        const tmp15Result2 = tmp15(4689);
      } else {
        const result = tmp(9742).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult4 = tmp(9742);
      }
    }
    const tmpResult = tmp(4579);
  }
};
