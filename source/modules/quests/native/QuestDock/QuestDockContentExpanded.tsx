// Module ID: 15217
// Function ID: 15218
// Name: QuestDockContentExpanded
// Dependencies: [19, 17, 5458, 15125, 21, 4574, 15126, 4310, 4988, 7087, 2]

// Module 15217 (QuestDockContentExpanded)
import spring from "spring" /* 4988 */;
import noop from "module_19" /* 19 */;

require = fn;
const QuestDockMode = fn(5458).QuestDockMode;
const QuestDockConstants = fn(15125);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS: hasOwnProperty, QUEST_DOCK_EXPANDED_HEIGHT: metroRequire } = QuestDockConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4574);
let obj = { wrapper: null };
let obj3 = {};
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj3.bottom = undefined;
obj3.display = "flex";
obj3.zIndex = 1;
obj.wrapper = obj3;
let closure_8 = createStyles.createStyles(obj);
const __initData = { code: "function QuestDockContentExpandedTsx1(){const{expandedHeight,QUEST_DOCK_EXPANDED_HEIGHT,windowDimensions,withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,questDockWrapperSpecs}=this.__closure;return{height:expandedHeight==='content'?undefined:QUEST_DOCK_EXPANDED_HEIGHT,width:windowDimensions.get().width,opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring((questDockWrapperSpecs.get().width-windowDimensions.get().width)/2,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContentExpanded.tsx");

export default noop.memo(function QuestDockContentExpanded(children) {
  const expandedHeight = children.expandedHeight;
  const context = windowDimensions.useContext(expandedHeight(questDockWrapperSpecs[6]).QuestDockGestureContext);
  const activeQuestDockMode = context.activeQuestDockMode;
  questDockWrapperSpecs = context.questDockWrapperSpecs;
  windowDimensions = context.windowDimensions;
  let tmp = closure_8();
  const fn = function s() {
    let tmp;
    if ("content" !== expandedHeight) {
      tmp = QUEST_DOCK_EXPANDED_HEIGHT;
    }
    const size = { height: tmp, width: windowDimensions.get().width, opacity: null, transform: null };
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 1;
    }
    size.opacity = spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS);
    const obj = { translateX: null };
    const obj2 = windowDimensions;
    obj.translateX = spring.withSpring((questDockWrapperSpecs.get().width - obj2.get().width) / 2, QUEST_DOCK_MODE_CHANGE_PHYSICS);
    const items = [obj];
    size.transform = items;
    return size;
  };
  let obj = expandedHeight(questDockWrapperSpecs[7]);
  fn.__closure = { expandedHeight, QUEST_DOCK_EXPANDED_HEIGHT, windowDimensions, withSpring: expandedHeight(questDockWrapperSpecs[8]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS, questDockWrapperSpecs };
  fn.__workletHash = 2568599305841;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj3 = { style: null, children: children.children };
  let items = [tmp.wrapper, animatedStyle];
  obj3.style = items;
  return jsx(activeQuestDockMode(questDockWrapperSpecs[9]), { style: null, children: children.children });
});
