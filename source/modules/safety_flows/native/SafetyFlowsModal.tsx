// Module ID: 17953
// Function ID: 17954
// Name: SafetyFlowsModal
// Dependencies: [32, 19, 21, 7074, 17950, 17954, 17958, 5676, 17960, 17962, 17963, 17964, 17965, 17970, 17971, 17956, 17955, 14229, 2]
// Exports: default

// Module 17953 (SafetyFlowsModal)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/native/SafetyFlowsModal.tsx");

export default function SafetyFlowsModal(initialRouteName) {
  task = undefined;
  setTask = undefined;
  [task, setTask] = noop.useState(initialRouteName.task);
  const items = [task];
  const navigatorScreens = task(7074).useNavigatorScreens(() => {
    const obj = { [closure_1_0(closure_1_2[4]).SafetyFlowScreens.OVERVIEW]: obj2, [closure_1_0(closure_1_2[4]).SafetyFlowScreens.ENTER_EMAIL]: obj3 };
    const obj4 = {
      headerLeft: first(5676).getHeaderBackButton(),
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(setTask(17960), {});
      }
    };
    obj[first(17950).SafetyFlowScreens.VERIFY_EMAIL] = obj4;
    obj[first(17950).SafetyFlowScreens.UPDATE_APP] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(setTask(17962), {});
      }
    };
    obj[first(17950).SafetyFlowScreens.AGE_VERIFICATION] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(setTask(17963), {});
      }
    };
    obj[first(17950).SafetyFlowScreens.PARENTAL_CONSENT_CONNECTION] = {
      headerShown: false,
      customNavbar() {
        return closure_1_5(task(17964).ParentalConsentConnectionNavbar, {});
      },
      render() {
        return closure_1_5(setTask(17965), {});
      }
    };
    obj[first(17950).SafetyFlowScreens.APP_STORE_PARENTAL_REVOCATION] = {
      headerShown: false,
      render() {
        return closure_1_5(setTask(17970), {});
      }
    };
    obj[first(17950).SafetyFlowScreens.ERROR] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(setTask(17971), {});
      }
    };
    return obj;
  }, []);
  const items1 = [task];
  const memo = noop.useMemo(() => {
    let flow_context;
    if (first != null) {
      flow_context = tmp.flow_context;
    }
    if (null == flow_context) {
      return [];
    } else {
      const tasks = tmp.flow_context.tasks;
      if (1 !== tasks.length) {
        const tasks1 = tmp.flow_context.tasks;
        const mapped = tasks1.map((task_type) => task(dependencyMap[15]).getScreensForTaskType(task_type.task_type));
        const found = mapped.filter((item) => null != item);
        let flatResult = found.flat();
      } else {
        flatResult = [];
      }
      return flatResult;
    }
  }, items);
  const memo1 = noop.useMemo(() => ({ task, setTask }), items1);
  let obj = task(7074);
  return jsx(task(17955).SafetyFlowTaskContext.Provider, { value: memo1, children: jsx(task(14229).StepModal, { initialRouteName: initialRouteName.initialScreen, screens: navigatorScreens, steps: memo }) });
};
