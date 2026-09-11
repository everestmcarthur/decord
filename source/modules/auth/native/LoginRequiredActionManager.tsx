// Module ID: 17498
// Function ID: 17499
// Name: LoginRequiredActionManager
// Dependencies: [1371, 1950, 1074, 7191, 7455, 6664, 2]

// Module 17498 (LoginRequiredActionManager)
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6664 */;
import UserStore from "UserStore" /* 1371 */;
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 1950 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7191 */;

const require = fn;
const Constants = fn(1074);
({ LoginRequiredActions: hasOwnProperty, Routes: metroRequire, UserSettingsSections: closure_7 } = Constants);
class LoginRequiredActionManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handleConnectionOpen };
    return applyArgumentsResult;
  }
}
LoginRequiredActionManager.prototype["handleConnectionOpen"] = function handleConnectionOpen() {
  const currentUser = UserStore.getCurrentUser();
  if (null != currentUser) {
    let items = [constants.UPDATE_PASSWORD];
    const result = LoginRequiredActionStore.wasLoginAttemptedInSession(currentUser.id);
    const result1 = LoginRequiredActionStore.requiredActionsIncludes(currentUser.id, items);
    if (result) {
      if (result1) {
        const obj3 = {
          screen: constants3.ACCOUNT_CHANGE_PASSWORD,
          params: { isLoginRequiredAction: true },
          onClose() {
                  const items = [constants.UPDATE_PASSWORD];
                  if (LoginRequiredActionStore.requiredActionsIncludes(currentUser.id, items)) {
                    AuthenticationActionCreatorsDefault.logout("login_required_account_manager", constants2.LOGIN);
                  }
                }
        };
        currentUser(7455).openUserSettings(obj3);
        const obj2 = currentUser(7455);
      }
    }
    if (result1) {
      AuthenticationActionCreatorsDefault.logout("login_required_account_manager", constants2.LOGIN);
    }
  }
};
const loginRequiredActionManager = new LoginRequiredActionManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/auth/native/LoginRequiredActionManager.tsx");

export default loginRequiredActionManager;
