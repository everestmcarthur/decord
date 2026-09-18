// Module ID: 14484
// Function ID: 14485
// Name: links
// Dependencies: [5, 1956, 4788, 4465, 1074, 1920, 9563, 9565, 14465, 14485, 1115, 4554, 1242, 9540, 4189, 14486, 4249, 8371, 14487, 9560, 7382, 14479, 8862, 14488, 2]

// Module 14484 (links)
import RPCErrorDefault from "RPCError" /* 9560 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 9563 */;
import RPCHelpers from "RPCHelpers" /* 9565 */;
import openActivityShareLinkModal from "openActivityShareLinkModal" /* 14488 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;

const openUserSettings = tmp(7382);
const ApplicationFlagUtils = tmp(8862);
require = fn;
let Constants = fn(4465);
({ RPC_AUTHENTICATED_SCOPE, RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = Constants);
Constants = fn(1074);
({ ApplicationFlags: metroRequire, PopoutWindowKeys: closure_7, RPCCommands, RPCErrors: closure_8, UserSettingsSections: closure_9, AnalyticEvents: c10 } = Constants);
Constants = fn(1920);
const items = [, ];
({ AM_HARMONY_PRD_APPLICATION_ID: arr[0], AM_HARMONY_STG_APPLICATION_ID: arr[1] } = Constants);
const set = new Set(items);
let obj = { [RPCCommands.OPEN_EXTERNAL_LINK]: obj2, [RPCCommands.NAVIGATE_TO_CONNECTIONS]: obj3 };
obj2 = {
  scope: null,
  validation(string) {
    const obj = createRpcJoiSchemaObjectDefault(string);
    const obj2 = { url: null };
    const requiredResult = createRpcJoiSchemaObjectDefault(string).required();
    obj2.url = string.string().required();
    return requiredResult.keys(obj2);
  },
  handler(socket) {
    socket = socket.socket;
    const url = socket.args.url;
    return (async (arg0, value) => {
      if (application === 2) {
        application = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          application = 2;
          if (0 === currentEmbeddedActivity) {
            if (arg0 === 1) {
              application = 3;
              throw value;
            } else if (arg0 === 2) {
              application = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              let embeddedActivityLocationChannelId;
              const result = tmp5(tmp75[7]).validatePostMessageTransport(socket.transport);
              const obj18 = tmp5(tmp75[7]);
              let internalDeepLink = null;
              if (null != obj19.tryValidateEmbeddedAppFrame(socket)) {
                internalDeepLink = tmp85(tmp75[9]).resolveInternalDeepLink(url);
                const tmp85Result = tmp85(tmp75[9]);
              }
              if (null != internalDeepLink) {
                if (tmp85(tmp75[10]).isPlatformEmbedded) {
                  tmp3(tmp75[11]).focus(null, true);
                  const obj6 = tmp3(tmp75[11]);
                }
                if (tmp85Result5.openInternalDeepLink(internalDeepLink)) {
                  const application3 = socket.application;
                  let id;
                  if (application3 != null) {
                    id = application3.id;
                  }
                  const obj4 = { application_id: id, url, opened: true };
                  tmp3(tmp75[12]).track(constants3.RPC_OPEN_EXTERNAL_LINK_CALLED, obj4);
                  application = 3;
                  const obj5 = { value: { opened: true }, done: true };
                  return obj5;
                }
                tmp85Result5 = tmp85(tmp75[9]);
              }
              currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
              c3 = 1;
              const _URL = URL;
              const str = new URL(url);
              const str1 = str.toString();
              closure_128_0 = str1;
              if (tmp5(tmp75[10]).isPlatformEmbedded) {
                let ACTIVITY_POPOUT = null;
                if (tmp85Result6.shouldOpenActivityInPopoutWindow()) {
                  ACTIVITY_POPOUT = constants.ACTIVITY_POPOUT;
                }
                tmp85Result6 = tmp85(tmp75[13]);
                tmp3(tmp75[11]).focus(ACTIVITY_POPOUT, true);
                const obj9 = tmp3(tmp75[11]);
              }
              const application2 = socket.application;
              let id1;
              if (application2 != null) {
                id1 = application2.id;
              }
              const application1 = application.getApplication(id1);
              closure_128_1 = application1;
              obj19 = tmp5(tmp75[8]);
              let _location;
              if (currentEmbeddedActivity != null) {
                _location = currentEmbeddedActivity.location;
              }
              embeddedActivityLocationChannelId = tmp5(tmp75[14]).getEmbeddedActivityLocationChannelId(_location);
              const tmp85Result7 = tmp5(tmp75[14]);
              let id2;
              if (application1 != null) {
                id2 = application1.id;
              }
              currentEmbeddedActivity = 2;
              application = 1;
              const obj7 = { value: tmp5(tmp75[15]).fetchIsLinkTrusted(id2, str1), done: false };
              return obj7;
            }
          } else if (1 === tmp8) {
            c3 = 0;
            const obj8 = { errorCode: constants2.INVALID_COMMAND };
            const _HermesInternal = HermesInternal;
            const tmp302 = new tmp3(tmp75[19])(obj8, "Invalid URL: " + closure_129_1);
            throw tmp302;
          } else if (arg0 === 1) {
            application = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            application = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            if (value) {
              tmp3(tmp75[16])(closure_128_0);
              application = closure_129_0.application;
              let id3;
              if (application != null) {
                id3 = application.id;
              }
              const obj11 = { application_id: id3, url: closure_128_0, opened: true };
              tmp3(tmp75[12]).track(constants3.RPC_OPEN_EXTERNAL_LINK_CALLED, obj11);
              const resolved = Promise.resolve({ opened: true });
              let obj = tmp3(tmp75[12]);
            } else {
              new Promise((arg0) => {
                const href = arg0;
                const obj = href(channelId[17]);
                const obj2 = {
                  href,
                  shouldConfirm: true,
                  onClick() {
                    return false;
                  },
                  onConfirm() {
                    url(4249)(url);
                    application = closure_0.application;
                    let id;
                    if (application != null) {
                      id = application.id;
                    }
                    url(1242).track(constants.RPC_OPEN_EXTERNAL_LINK_CALLED, { application_id: id, url, opened: true });
                    closure_0({ opened: true });
                  },
                  onCancel() {
                    application = closure_0.application;
                    let id;
                    if (application != null) {
                      id = application.id;
                    }
                    url(1242).track(constants.RPC_OPEN_EXTERNAL_LINK_CALLED, { application_id: id, url, opened: false });
                    closure_0({ opened: false });
                  }
                };
                return obj.handleClick(obj2, undefined, undefined, href(channelId[18]).getActivitiesModalContextKey({ application, channelId }));
              });
            }
            c3 = 0;
            application = 3;
          }
        } catch (tmp75) {
          if (tmp4 === c3) {
            application = tmp2;
            throw tmp75;
          } else {
            currentEmbeddedActivity = tmp;
          }
        }
      }
    })();
  }
};
const items1 = [RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE];
obj2.scope = { [RPC_SCOPE_CONFIG.ANY]: items1 };
obj3 = {
  validation(arg0) {
    return createRpcJoiSchemaObjectDefault(arg0);
  },
  scope: null,
  handler(socket) {
    socket = socket.socket;
    const result = RPCHelpers.validatePostMessageTransport(socket.transport);
    if (set.has(obj2.validateApplication(socket.application))) {
      const obj3 = { screen: constants3.CONNECTIONS };
      openUserSettings.openUserSettings(obj3);
    } else {
      const obj4 = { errorCode: constants2.UNAUTHORIZED_FOR_APPLICATION };
      const tmp9 = new RPCErrorDefault(obj4, "Command not available for this application");
      throw tmp9;
    }
    obj2 = RPCHelpers;
  }
};
const items2 = [RPC_AUTHENTICATED_SCOPE];
obj3.scope = { [RPC_SCOPE_CONFIG.ANY]: items2 };
const CONTEXT_MENU_ICON_NAMES = fn(14479);
let obj5 = {
  scope: null,
  handler(arg0) {
    ({ socket, args } = arg0);
    ({ custom_id: require, message: importDefault, link_id: dependencyMap } = args);
    let result = RPCHelpers.validatePostMessageTransport(socket.transport);
    const validateApplicationResult = RPCHelpers.validateApplication(socket.application);
    c3 = validateApplicationResult;
    if (null == validateApplicationResult) {
      const obj3 = { errorCode: constants2.INVALID_COMMAND };
      const tmp22 = new RPCErrorDefault(obj3, "No application.");
      throw tmp22;
    } else {
      if (tmpResult.hasApplicationFlag(socket.application, constants.EMBEDDED)) {
        const promise = new Promise((arg0) => {
          closure_0 = arg0;
          const result = openActivityShareLinkModal.openActivityShareLinkModal({
            applicationId,
            customId,
            linkId,
            message,
            onShare(stateFromStores, didCopyLink) {
              let tmp2 = didCopyLink;
              if (!didCopyLink) {
                tmp2 = stateFromStores;
              }
              closure_0({ success: tmp2, didCopyLink, didSendMessage: stateFromStores });
            }
          });
        });
        return promise;
      } else {
        const obj4 = { errorCode: constants2.INVALID_COMMAND };
        const tmp10 = new RPCErrorDefault(obj4, "This application cannot access this API");
        throw tmp10;
      }
      tmpResult = ApplicationFlagUtils;
    }
  }
};
const items3 = [RPC_AUTHENTICATED_SCOPE];
obj5.scope = { [RPC_SCOPE_CONFIG.ANY]: items3 };
obj[RPCCommands.SHARE_LINK] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.SHARE_LINK, obj5);
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/links.tsx");

export default obj;
