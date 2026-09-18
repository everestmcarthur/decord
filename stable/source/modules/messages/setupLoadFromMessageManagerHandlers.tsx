// Module ID: 17426
// Function ID: 17427
// Name: setupLoadFromMessageManagerHandlers
// Dependencies: [2]
// Exports: default

// Module 17426 (setupLoadFromMessageManagerHandlers)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/setupLoadFromMessageManagerHandlers.tsx");

export default function setupLoadFromMessageManagerHandlers(actions, arg1) {
  closure_0 = arg1;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  function handleMessage(message) {
    message = message.message;
    let hasItem = null != message.channel_id;
    if (hasItem) {
      hasItem = set.has(message.channel_id);
    }
    if (hasItem) {
      if (onBeforeBatch != null) {
        tmp3();
      }
      let hasItem1 = null != message.channel_id;
      if (hasItem1) {
        hasItem1 = set.has(message.channel_id);
      }
      if (hasItem1) {
        closure_0(message);
      }
    }
  }
  function handleLoadMessages(messages) {
    messages = messages.messages;
    set.add(messages.channelId);
    if (onBeforeBatch != null) {
      tmp2();
    }
    const item = messages.forEach((channel_id) => {
      let hasItem = null != channel_id.channel_id;
      if (hasItem) {
        hasItem = set.has(channel_id.channel_id);
      }
      if (hasItem) {
        closure_1_0(channel_id);
      }
    });
  }
  function handleSearchMessagesSuccess(data) {
    data = data.data;
    if (onBeforeBatch != null) {
      tmp();
    }
    let item = data.forEach((messages) => {
      messages = messages.messages;
      let item = messages.forEach((arr) => {
        const item = arr.forEach((item) => closure_1_0(item));
      });
    });
  }
  const onBeforeBatch = obj.onBeforeBatch;
  const set = new Set();
  const obj2 = {};
  const merged = Object.assign(actions.actions);
  obj2.POST_CONNECTION_OPEN = function POST_CONNECTION_OPEN() {
    set.clear();
  };
  obj2.MESSAGE_CREATE = { callback: handleMessage, autoSubscribe: false };
  obj2.MESSAGE_UPDATE = handleMessage;
  obj2.LOAD_MESSAGES_SUCCESS = handleLoadMessages;
  obj2.LOAD_MESSAGES_AROUND_SUCCESS = handleLoadMessages;
  obj2.LOAD_RECENT_MENTIONS_SUCCESS = function LOAD_RECENT_MENTIONS_SUCCESS(messages) {
    messages = messages.messages;
    if (onBeforeBatch != null) {
      tmp();
    }
    const item = messages.forEach((item) => closure_1_0(item));
  };
  obj2.LOAD_PINNED_MESSAGES_SUCCESS = function LOAD_PINNED_MESSAGES_SUCCESS(pins) {
    pins = pins.pins;
    if (onBeforeBatch != null) {
      tmp();
    }
    const item = pins.forEach((message) => closure_1_0(message.message));
  };
  obj2.SEARCH_MESSAGES_SUCCESS = handleSearchMessagesSuccess;
  obj2.MOD_VIEW_SEARCH_MESSAGES_SUCCESS = handleSearchMessagesSuccess;
  obj2.CHANNEL_SELECT = {
    callback(channelId) {
      channelId = channelId.channelId;
      if (null != channelId) {
        set.add(channelId);
      }
    },
    autoSubscribe: false
  };
  actions.actions = obj2;
};
