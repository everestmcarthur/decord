// Module ID: 13048
// Function ID: 13049
// Dependencies: [12967, 12988, 13013]
// Exports: getCurrentHub, getCurrentHubShim

// Module 13048
import _mod12967 from "module_12967" /* 12967 */;
import _flush from "_flush" /* 12988 */;
import _mod13013 from "module_13013" /* 13013 */;

require = arg1;
const dependencyMap = arg6;
function getCurrentHubShim() {
  return {
    bindClient(arg0) {
      const currentScope = _mod12967.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12967.withScope,
    getClient() {
      return _mod12967.getClient();
    },
    getScope: _mod12967.getCurrentScope,
    getIsolationScope: _mod12967.getIsolationScope,
    captureException(arg0, arg1) {
      const currentScope = _mod12967.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const currentScope = _mod12967.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _flush.captureEvent,
    addBreadcrumb: _mod13013.addBreadcrumb,
    setUser: _flush.setUser,
    setTags: _flush.setTags,
    setTag: _flush.setTag,
    setExtra: _flush.setExtra,
    setExtras: _flush.setExtras,
    setContext: _flush.setContext,
    getIntegration(id) {
      const client = _mod12967.getClient();
      let integrationByName = client;
      if (client) {
        integrationByName = client.getIntegrationByName(id.id);
      }
      if (!integrationByName) {
        integrationByName = null;
      }
      return integrationByName;
    },
    startSession: _flush.startSession,
    endSession: _flush.endSession,
    captureSession(arg0) {
      if (arg0) {
        return tmp(tmp2[1]).endSession();
      } else {
        const currentScope = tmp(tmp2[0]).getCurrentScope();
        const tmpResult3 = tmp(tmp2[0]);
        const client = tmp(tmp2[0]).getClient();
        const session = currentScope.getSession();
        let tmp4 = client;
        if (client) {
          tmp4 = session;
        }
        if (tmp4) {
          client.captureSession(session);
        }
      }
    }
  };
}

export const getCurrentHub = getCurrentHubShim;
export { getCurrentHubShim };
