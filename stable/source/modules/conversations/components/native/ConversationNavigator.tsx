// Module ID: 7913
// Function ID: 7914
// Name: ConversationNavigator
// Dependencies: [19, 21, 4262, 576, 7864, 1115, 7914, 7000, 7924, 7925, 1114, 7926, 13254, 13255, 4418, 2]
// Exports: default, openConversationNavigator

// Module 7913 (ConversationNavigator)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import useToken from "useToken" /* 4262 */;
import RootNavigationRef from "RootNavigationRef" /* 4418 */;
import HeaderShared from "HeaderShared" /* 7864 */;
import ConversationNavigatorHeaderDefault from "ConversationNavigatorHeader" /* 7925 */;
import ConversationNavigatorMoreMenuDefault from "ConversationNavigatorMoreMenu" /* 13254 */;
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
const NativeStackNavigator = fn(7914);
const Screen = NativeStackNavigator.createNativeStackNavigator();
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigator.tsx");

export default function ConversationNavigator(route) {
  const params = route.route.params;
  const channelId = params.channelId;
  const obj2 = { id: "conversation-navigator", screenOptions: channelId(7000).useAccessibilityNativeStackOptions(), children: null };
  let obj = channelId(7000);
  ({ Navigator, Screen } = Screen);
  const items = [
    closure_3(Screen, {
      initialParams: { channelId, guildId: params.guildId },
      name: channelId(7924).ConversationNavigatorScreens.LIST,
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
        return channelId(7926).default;
      }
    }),

  ];
  const obj3 = {
    initialParams: { channelId, guildId: params.guildId },
    name: channelId(7924).ConversationNavigatorScreens.LIST,
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
      return channelId(7926).default;
    }
  };
  items[1] = closure_3(Screen.Screen, {
    name: channelId(7924).ConversationNavigatorScreens.FOCUS,
    options(route) {
      route = route.route;
      const obj = {
        header(arg0) {
          const merged = Object.assign(arg0);
          return closure_1_3(closure_1_5, {});
        },
        headerLeft: route(7864).getRenderBackImage(route.navigation),
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
      return channelId(13255).default;
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
