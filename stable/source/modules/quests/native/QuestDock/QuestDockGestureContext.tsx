// Module ID: 15099
// Function ID: 15100
// Name: QuestDockGestureContext
// Dependencies: [19, 15096, 5444, 15098, 21, 7074, 1477, 4296, 15100, 15097, 12038, 2]

// Module 15099 (QuestDockGestureContext)
import subscribeToWindowDimensionsDefault from "subscribeToWindowDimensions" /* 12038 */;
import noop from "module_19" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 15096 */;

const require = fn;
const QuestDockMode = fn(5444).QuestDockMode;
const QuestDockConstants = fn(15098);
({ QUEST_DOCK_COLLAPSED_HEIGHT: metroRequire, QUEST_DOCK_EXPANDED_HEIGHT: closure_7 } = QuestDockConstants);
const jsx = fn(21).jsx;
const obj = { questDockWrapperSpecs: null, windowDimensions: null, activeQuestDockMode: null, minExpandedContentHeight: null };
let ReanimatedHelperTypes = fn(7074);
obj.questDockWrapperSpecs = ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0, x: 0, y: 0, prevDeltaY: 0 });
ReanimatedHelperTypes = fn(7074);
obj.windowDimensions = ReanimatedHelperTypes.createFakeSharedValue({ width: 0, height: 0, maxContentHeight: 0, landscape: false });
ReanimatedHelperTypes = fn(7074);
obj.activeQuestDockMode = ReanimatedHelperTypes.createFakeSharedValue(QuestDockMode.COLLAPSED);
ReanimatedHelperTypes = fn(7074);
obj.minExpandedContentHeight = ReanimatedHelperTypes.createFakeSharedValue(0);
const context = noop.createContext(obj);
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockGestureContext.tsx");

export const QuestDockGestureContext = context;
export const QuestDockGestureContextProvider = noop.memo(function QuestDockGestureContextProviderInner(children) {
  let size = sharedValue3.useMemo(sharedValue(sharedValue2[6]).getWindowDimensions, []);
  const size1 = { width: size.width, height: size.height, landscape: size.width > size.height, maxContentHeight: size.height };
  sharedValue = sharedValue(sharedValue2[7]).useSharedValue(size1);
  const obj2 = sharedValue(sharedValue2[7]);
  const tmp = sharedValue;
  const tmp2 = sharedValue2;
  const youBarHorizontalMargin = sharedValue(sharedValue2[8]).useYouBarHorizontalMargin();
  const obj4 = sharedValue(sharedValue2[8]);
  const size2 = { width: null, height: null, x: 0, y: -8, prevDeltaY: 0 };
  const obj5 = sharedValue(sharedValue2[7]);
  size2.width = sharedValue(sharedValue2[9]).getQuestDockCollapsedWidth(size.width, youBarHorizontalMargin, youBarHorizontalMargin);
  size2.height = height;
  const sharedValue1 = obj5.useSharedValue(size2);
  const obj7 = sharedValue(sharedValue2[9]);
  const obj8 = sharedValue(sharedValue2[7]);
  sharedValue2 = obj8.useSharedValue(sharedValue(sharedValue2[9]).isSoftDismissed(QuestDockStore.questDockSoftDismissedAt) ? tmp6.SOFT_DISMISSED : tmp6.COLLAPSED);
  const obj9 = sharedValue(sharedValue2[9]);
  sharedValue3 = tmp(tmp2[7]).useSharedValue(closure_7);
  const items = [sharedValue];
  const effect = obj.useEffect(() => subscribeToWindowDimensionsDefault((arg0) => {
    ({ width, height } = arg0);
    const size = { width, height, landscape: width > height, maxContentHeight: height };
    const result = sharedValue.set(size);
  }), items);
  const items1 = [sharedValue, sharedValue1, sharedValue2, sharedValue3];
  const tmpResult = tmp(tmp2[7]);
  return <context.Provider value={sharedValue3.useMemo(() => ({ windowDimensions: sharedValue, questDockWrapperSpecs: sharedValue1, activeQuestDockMode: sharedValue2, minExpandedContentHeight: sharedValue3 }), items1)}>{arg0.children}</context.Provider>;
});
