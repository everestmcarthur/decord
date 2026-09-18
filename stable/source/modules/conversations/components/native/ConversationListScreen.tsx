// Module ID: 7926
// Function ID: 7927
// Name: ConversationListScreen
// Dependencies: [5, 32, 19, 17, 7596, 7598, 21, 4560, 576, 7927, 4556, 1114, 1486, 1611, 7907, 504, 11, 7908, 7910, 8880, 2]
// Exports: default

// Module 7926 (ConversationListScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import ConversationsAnalytics2 from "ConversationsAnalytics" /* 7910 */;
import ConversationListItemDefault from "ConversationListItem" /* 7927 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConversationsStore from "ConversationsStore" /* 7596 */;

const require = globalThis.__r;

require = fn;
function renderItem(item) {
  item = item.item;
  return jsx(ConversationListItemDefault, { channelId: item.channelId, conversationId: item.conversationId });
}
function keyExtractor(conversationId) {
  return conversationId.conversationId;
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7 } = get_ActivityIndicator);
const ConversationConstants = fn(7598);
({ MAX_CONVERSATIONS_PER_CHANNEL: closure_9, MOBILE_FETCH_LIMIT: c10, MOBILE_PREVIEW_MESSAGE_COUNT: closure_11 } = ConversationConstants);
const jsx = fn(21).jsx;
const viewabilityConfig = { waitForInteraction: false, itemVisiblePercentThreshold: 50, minimumViewTime: 1000 };
let createStyles = fn(4560);
let obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, content: null, spinner: null };
const obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.content = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
obj.spinner = { paddingVertical: nativeDefault.space.PX_16, alignItems: "center" };
let closure_14 = createStyles.createStyles(obj);
createStyles = fn(4560);
let obj6 = { empty: null };
let obj5 = { paddingVertical: nativeDefault.space.PX_16, alignItems: "center" };
obj6.empty = { paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_15 = createStyles.createStyles(obj6);
const ListEmptyComponent = noop.memo(() => {
  const obj = { style: closure_15().empty, children: null };
  const obj2 = { variant: "text-md/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.LJuFRG);
  obj.children = jsx(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", children: null });
  return <React5 style={closure_15().empty}>{null}</React5>;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationListScreen.tsx");

export default function ConversationListScreen() {
  const tmp = closure_14();
  _require = tmp;
  const params = require("BaseNavigationContainer").useRoute().params;
  const channelId = params.channelId;
  guildId = params.guildId;
  let obj = require("BaseNavigationContainer");
  let tmp2 = _require;
  const tmp3 = guildId;
  const conversationBackoffRef = require("useConversationBackoffRef").useConversationBackoffRef();
  const tmp5 = first(noop.useState(false), 2);
  first = tmp5[0];
  noop = tmp5[1];
  let obj2 = require("useConversationBackoffRef");
  const items = [stateFromStores1];
  const items1 = [channelId];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    let channelConversations = ConversationsStore.getChannelConversations(_handleEndReached);
    if (channelConversations == null) {
      channelConversations = [];
    }
    return channelConversations.map((id) => id.id);
  }, items1);
  const items2 = [stateFromStoresArray, channelId];
  const memo = noop.useMemo(() => {
    const substr = stateFromStoresArray.slice();
    const sorted = substr.sort((arg0, arg1) => channelId(guildId[16]).compare(arg1, arg0));
    return sorted.map((conversationId) => ({ channelId, conversationId }));
  }, items2);
  let obj4 = require("initialize");
  const items3 = [stateFromStores1];
  const items4 = [channelId];
  let stateFromStores = require("initialize").useStateFromStores(items3, () => null == ConversationsStore.getEdgeMarker(_handleEndReached, "before"), items4);
  let obj5 = require("initialize");
  const items5 = [stateFromStores1];
  const items6 = [channelId];
  stateFromStores1 = require("initialize").useStateFromStores(items5, () => ConversationsStore.isPendingFetch(_handleEndReached), items6);
  function _handleEndReached() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  _require = conversationBackoffRef(function*(arg0, value) {
    if (ref === 2) {
      ref = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        ref = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            ref = 3;
            throw value;
          } else if (arg0 === 2) {
            ref = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const channelConversations = stateFromStores1.getChannelConversations(c1);
            if (null != channelConversations) {
              if (channelConversations.length > 0) {
                if (length.length > 0) {
                  if (arr[0].conversationId === channelConversations[channelConversations.length - 1].id) {
                    guildId = 1;
                    const obj5 = { channelId: tmp32, guildId, direction: "before", anchor: arr[arr.length - 1].conversationId, limit, throwOnError: true, hydrateMessages: null };
                    const obj6 = { limit: limit2 };
                    obj5.hydrateMessages = obj6;
                    c1 = 2;
                    ref = 1;
                    const obj7 = { value: tmp3(guildId[17]).fetchChannelConversations(obj5), done: false };
                    return obj7;
                  }
                }
              }
            }
            const current2 = ref.current;
            current2.succeed();
            closure_1_5(false);
            ref = 3;
            tmp32 = c1;
          }
        } else if (1 === tmp7) {
          guildId = 0;
          const current = ref.current;
          current.fail(closure_128_1);
          closure_1_5(true);
          ref = 3;
          const obj8 = { value: undefined, done: true };
          return obj8;
        } else if (arg0 === 1) {
          ref = 3;
          throw value;
        } else if (arg0 !== 2) {
          guildId = 0;
        }
        guildId = 0;
        ref = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp24) {
        if (tmp4 === guildId) {
          ref = tmp2;
          throw tmp24;
        } else {
          c1 = tmp;
        }
      }
    }
  });
  const items7 = [memo, channelId, guildId, conversationBackoffRef];
  const items8 = [tmp.spinner, stateFromStores1, first];
  const callback = noop.useCallback(_handleEndReached, items7);
  const memo1 = noop.useMemo(() => {
    if (stateFromStores1) {
      const obj = { style: spinner.spinner, children: <timestampProducer /> };
      let tmp2 = <React5 style={spinner.spinner}><timestampProducer /></React5>;
    } else {
      tmp2 = null;
    }
    return tmp2;
  }, items8);
  if (stateFromStores) {
    stateFromStores = memo.length > 0;
  }
  if (stateFromStores) {
    stateFromStores = memo.length < ref;
  }
  if (stateFromStores) {
    stateFromStores = !stateFromStores1;
  }
  if (stateFromStores) {
    stateFromStores = !first;
  }
  ref = noop.useRef(undefined);
  const items9 = [channelId];
  let obj7 = { style: null, children: null };
  const items10 = [tmp.container, { paddingBottom: _handleEndReached(guildId[13])().bottom }];
  obj7.style = items10;
  const callback1 = obj3.useCallback((arg0) => {
    if (null == ref.current) {
      const _Set = Set;
      const set = new Set();
      tmp2.current = set;
    }
    for (const item10018 of tmp) {
      let conversationId = item10018.item.conversationId;
      let tmp9 = conversationId;
      let current = ref.current;
      let tmp11 = ref;
      if (!current.has(conversationId)) {
        let ConversationsAnalytics = ConversationsAnalytics2.ConversationsAnalytics;
        let obj = { channelId: null, conversationId: null, isFocusMode: false };
        obj.channelId = _handleEndReached;
        obj.conversationId = tmp9;
        let result = ConversationsAnalytics.trackPreviewImpression(obj);
        let current2 = tmp11.current;
        let addResult = current2.add(tmp9);
      }
      continue;
    }
  }, items9);
  let obj8 = { data: memo, renderItem, keyExtractor, contentContainerStyle: tmp.content, onEndReached: null, ListEmptyComponent: null, ListFooterComponent: null, onViewableItemsChanged: null, viewabilityConfig: null };
  let tmp16;
  if (stateFromStores) {
    tmp16 = callback;
  }
  obj8.onEndReached = tmp16;
  obj8.ListEmptyComponent = ListEmptyComponent;
  obj8.ListFooterComponent = memo1;
  obj8.onViewableItemsChanged = callback1;
  obj8.viewabilityConfig = viewabilityConfig;
  obj7.children = jsx(tmp2(tmp3[19]).FlashList, { data: memo, renderItem, keyExtractor, contentContainerStyle: tmp.content, onEndReached: null, ListEmptyComponent: null, ListFooterComponent: null, onViewableItemsChanged: null, viewabilityConfig: null });
  return <memo style={null}>{null}</memo>;
};
