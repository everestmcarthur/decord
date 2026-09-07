// Module ID: 17873
// Function ID: 17874
// Name: SafetyFlowsModal
// Dependencies: [32, 19, 21, 7000, 17870, 17874, 17878, 5624, 17880, 17882, 17883, 17884, 17885, 17890, 17891, 17876, 17875, 14177, 2]
// Exports: default

// Module 17873 (SafetyFlowsModal)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_flows/native/SafetyFlowsModal.tsx");

export default function SafetyFlowsModal(initialRouteName) {
  let first;
  closure_1 = undefined;
  const tmp = callback(React.useState(initialRouteName.task), 2);
  first = tmp[0];
  closure_1 = tmp[1];
  let obj = first(7000);
  const items = [first];
  const navigatorScreens = obj.useNavigatorScreens(() => {
    obj = { [closure_0(closure_2[4]).SafetyFlowScreens.OVERVIEW]: obj, [closure_0(closure_2[4]).SafetyFlowScreens.ENTER_EMAIL]: obj };
    obj = {
      headerLeft() {
        return null;
      },
      headerShown: false,
      render() {
        return callback3(callback2(17874), {});
      }
    };
    obj = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(17878), {});
      }
    };
    obj1 = {
      headerLeft: first(5624).getHeaderBackButton(),
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(17880), {});
      }
    };
    obj[first(17870).SafetyFlowScreens.VERIFY_EMAIL] = obj1;
    obj[first(17870).SafetyFlowScreens.UPDATE_APP] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(17882), {});
      }
    };
    obj[first(17870).SafetyFlowScreens.AGE_VERIFICATION] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(17883), {});
      }
    };
    obj[first(17870).SafetyFlowScreens.PARENTAL_CONSENT_CONNECTION] = {
      headerShown: false,
      customNavbar() {
        return callback3(callback(17884).ParentalConsentConnectionNavbar, {});
      },
      render() {
        return callback3(callback2(17885), {});
      }
    };
    obj[first(17870).SafetyFlowScreens.APP_STORE_PARENTAL_REVOCATION] = {
      headerShown: false,
      render() {
        return callback3(callback2(17890), {});
      }
    };
    obj[first(17870).SafetyFlowScreens.ERROR] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(17891), {});
      }
    };
    return obj;
  }, []);
  const items1 = [first];
  const memo = React.useMemo(() => {
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
        const mapped = tasks1.map((task_type) => callback(table[15]).getScreensForTaskType(task_type.task_type));
        const found = mapped.filter((arg0) => null != arg0);
        let flatResult = found.flat();
      } else {
        flatResult = [];
        const tmp3 = first;
        const tmp4 = closure_1_2;
      }
      return flatResult;
    }
  }, items);
  const memo1 = React.useMemo(() => ({ task: first, setTask: closure_1 }), items1);
  obj = { value: memo1, children: jsx(first(14177).StepModal, { initialRouteName: initialRouteName.initialScreen, screens: navigatorScreens, steps: memo }) };
  return jsx(first(17875).SafetyFlowTaskContext.Provider, { value: memo1, children: jsx(first(14177).StepModal, { initialRouteName: initialRouteName.initialScreen, screens: navigatorScreens, steps: memo }) });
};
