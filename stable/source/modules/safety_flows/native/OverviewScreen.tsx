// Module ID: 17874
// Function ID: 17875
// Name: OverviewScreen
// Dependencies: [19, 21, 4560, 17875, 1483, 17876, 8422, 8423, 4973, 576, 4556, 1114, 2690, 5687, 8583, 17870, 11931, 17877, 11001, 2]
// Exports: default

// Module 17874 (OverviewScreen)
import SafetyFlowsUtils from "SafetyFlowsUtils" /* 17876 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ content: { margin: "auto", overflow: "visible", justifyContent: "center", textAlign: "center", alignItems: "center" }, title: { textAlign: "center", textTransform: "uppercase", lineHeight: 50 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/native/OverviewScreen.tsx");

export default function OverviewScreen() {
  let tmp = closure_6();
  task = task(17875).useSafetyFlowTask().task;
  let obj = task(17875);
  const navigation = task(1483).useNavigation();
  const items = [task, navigation];
  const callback = noop.useCallback(() => {
    const screensForTaskType = SafetyFlowsUtils.getScreensForTaskType(task.task_type);
    let tmp = null != screensForTaskType;
    if (tmp) {
      tmp = screensForTaskType.length > 0;
    }
    if (tmp) {
      tmp = null != screensForTaskType[0];
    }
    if (tmp) {
      navigation.push(screensForTaskType[0]);
    }
  }, items);
  const obj3 = { spacing: navigation(576).space.PX_16, style: tmp.content, children: null };
  const obj4 = { variant: "display-lg", style: tmp.title, children: null };
  const intl = task(1114).intl;
  obj4.children = intl.string(navigation(2690).RRamMH);
  const items1 = [closure_4(task(4556).Text, obj4), , ];
  const obj5 = { variant: "text-md/medium", color: "text-strong", children: null };
  const intl2 = task(1114).intl;
  obj5.children = intl2.string(navigation(2690).I2Ctk1);
  items1[1] = closure_4(task(4556).Text, obj5);
  const obj6 = { spacing: navigation(576).space.PX_8, children: null };
  const flow_context = task.flow_context;
  let mapped;
  if (flow_context != null) {
    const tasks = flow_context.tasks;
    if (tasks != null) {
      mapped = tasks.map((task_type, index) => {
        const obj = { tip: task(17870).TASK_TYPE_TO_TITLE[task_type.task_type], index: index + 1 };
        return closure_1_4(navigation(8583), obj, task_type.task_type);
      });
    }
  }
  const obj7 = { children: null };
  const obj8 = { children: null };
  const items2 = [closure_4(task(5687).TableRowGroup, { hasIcons: true, children: mapped }), ];
  const obj9 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl3 = tmp2(1114).intl;
  obj9.children = intl3.string(navigation(2690)["0TnUrG"]);
  items2[1] = closure_4(task(4556).Text, obj9);
  obj6.children = items2;
  items1[2] = closure_5(task(4973).Stack, obj6);
  obj3.children = items1;
  obj8.children = closure_5(task(4973).Stack, obj3);
  const items3 = [closure_4(task(8423).ModalContent, obj8), ];
  const obj10 = { children: null };
  const items4 = [closure_4(navigation(17877), {}), ];
  const obj11 = { variant: "primary", text: null, onPress: null };
  const intl4 = tmp2(1114).intl;
  obj11.text = intl4.string(navigation(2690).Ks6opt);
  obj11.onPress = callback;
  items4[1] = closure_4(task(11001).ModalActionButton, obj11);
  obj10.children = items4;
  items3[1] = closure_5(task(11931).ModalFooter, obj10);
  obj7.children = items3;
  return closure_5(task(8422).ModalScreen, obj7);
};
