// Module ID: 7926
// Function ID: 7927
// Name: ConversationNavigator
// Dependencies: [19, 21, 4275, 576, 7877, 1115, 7927, 7014, 7937, 7938, 1114, 7939, 13277, 13278, 4432, 2]
// Exports: default, openConversationNavigator

// Module 7926 (ConversationNavigator)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import useToken from "useToken" /* 4275 */;
import RootNavigationRef from "RootNavigationRef" /* 4432 */;
import HeaderShared from "HeaderShared" /* 7877 */;
import ConversationNavigatorHeaderDefault from "ConversationNavigatorHeader" /* 7938 */;
import ConversationNavigatorMoreMenuDefault from "ConversationNavigatorMoreMenu" /* 13277 */;
import noop from "module_19" /* 19 */;

require = fn;
function HeaderWithBorder(arg0) {
  const token = useToken.useToken(nativeDefault.colors.BORDER_SUBTLE);
  const obj3 = {};
  const merged = Object.assign(arg0);
  const obj2 = HeaderShared;
  obj3.shouldHandleSafeArea = PlatformUtils.isAndroid();
  obj3.style = { borderColor: token };
  return obj2.renderHeader(obj3);
}
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const NativeStackNavigator = fn(7927);
const Screen = NativeStackNavigator.createNativeStackNavigator();
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigator.tsx");

export default function ConversationNavigator(route) {
  const params = route.route.params;
  const channelId = params.channelId;
  const obj2 = { id: "conversation-navigator", screenOptions: channelId(7014).useAccessibilityNativeStackOptions(), children: null };
  let obj = channelId(7014);
  ({ Navigator, Screen } = Screen);
  const items = [
    closure_3(Screen, {
      initialParams: { channelId, guildId: params.guildId },
      name: channelId(7937).ConversationNavigatorScreens.LIST,
      options(navigation) {
        let obj = {
          header(arg0) {
            const merged = Object.assign(arg0);
            return closure_1_3(closure_1_5, {});
          },
          headerLeft: HeaderShared.getRenderBackImage(navigation.navigation),
          headerTitle() {
            const obj = { channelId, title: null };
            const intl = channelId(1114).intl;
            obj.title = intl.string(channelId(1114).t.T3WBRp);
            return closure_2_3(ConversationNavigatorHeaderDefault, obj);
          }
        };
        return obj;
      },
      getComponent() {
        return channelId(7939).default;
      }
    }),

  ];
  const obj3 = {
    initialParams: { channelId, guildId: params.guildId },
    name: channelId(7937).ConversationNavigatorScreens.LIST,
    options(navigation) {
      let obj = {
        header(arg0) {
          const merged = Object.assign(arg0);
          return closure_1_3(closure_1_5, {});
        },
        headerLeft: HeaderShared.getRenderBackImage(navigation.navigation),
        headerTitle() {
          const obj = { channelId, title: null };
          const intl = channelId(1114).intl;
          obj.title = intl.string(channelId(1114).t.T3WBRp);
          return closure_2_3(ConversationNavigatorHeaderDefault, obj);
        }
      };
      return obj;
    },
    getComponent() {
      return channelId(7939).default;
    }
  };
  items[1] = closure_3(Screen.Screen, {
    name: channelId(7937).ConversationNavigatorScreens.FOCUS,
    options(route) {
      route = route.route;
      const obj = {
        header(arg0) {
          const merged = Object.assign(arg0);
          return closure_1_3(closure_1_5, {});
        },
        headerLeft: route(7877).getRenderBackImage(route.navigation),
        headerTitle() {
          return closure_2_3(ConversationNavigatorHeaderDefault, { channelId: route.params.channelId, title: route.params.title, hasRightAction: true });
        },
        headerRight() {
          return closure_2_3(ConversationNavigatorMoreMenuDefault, { channelId: route.params.channelId, conversationId: route.params.conversationId });
        }
      };
      return obj;
    },
    getComponent() {
      return channelId(13278).default;
    }
  });
  obj2.children = items;
  return closure_4(Navigator, obj2);
};
export const openConversationNavigator = function openConversationNavigator(arg0) {
  ({ channelId, guildId } = arg0);
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (tmp) {
    const obj2 = { channelId, guildId };
    rootNavigationRef.navigate("conversations", obj2);
  }
};
