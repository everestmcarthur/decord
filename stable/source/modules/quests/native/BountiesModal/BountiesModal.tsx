// Module ID: 15006
// Function ID: 15007
// Name: BountiesModal
// Dependencies: [19, 5444, 21, 11525, 15007, 15064, 11790, 11933, 2]

// Module 15006 (BountiesModal)
import noop from "module_19" /* 19 */;

const require = fn;
const QuestsExperimentLocations = fn(5444).QuestsExperimentLocations;
const jsx = fn(21).jsx;
const bounty_main = "bounty_main";
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModal.tsx");

export default noop.memo(function BountiesModal(bountyId) {
  bountyId = bountyId.bountyId;
  const sourceQuestContent = bountyId.sourceQuestContent;
  let verticalScrollEnabled;
  verticalScrollEnabled = bountyId(verticalScrollEnabled[3]).useBountiesExperience(QuestsExperimentLocations.VIDEO_MODAL_MOBILE).verticalScrollEnabled;
  const items = [bountyId, sourceQuestContent, verticalScrollEnabled];
  const memo = noop.useMemo(() => ({
    [closure_2_6]: {
      fullscreen: true,
      headerLeft() {
        return null;
      },
      render() {
        return jsx(sourceQuestContent(closure_1_2 ? verticalScrollEnabled[4] : verticalScrollEnabled[5]), { bountyId, sourceQuestContent });
      }
    }
  }), items);
  const layoutEffect = noop.useLayoutEffect(() => {
    bountyId(verticalScrollEnabled[6]).applyOrientationLock("PORTRAIT");
    return bountyId(verticalScrollEnabled[6]).restoreDefaultOrientationLock;
  }, []);
  return jsx(bountyId(verticalScrollEnabled[7]).Modal, { hideTitle: true, initialRouteName: bounty_main, screens: memo, viewStyle: { backgroundColor: "#000000" } });
});
