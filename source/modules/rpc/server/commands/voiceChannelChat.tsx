// Module ID: 14539
// Function ID: 14540
// Name: voiceChannelChat
// Dependencies: [4479, 1074, 9589, 14540, 9586, 2]

// Module 14539 (voiceChannelChat)
import Constants2 from "Constants" /* 4479 */;
import RPCErrorDefault from "RPCError" /* 9586 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 9589 */;
import toggleVoiceChannelChat from "toggleVoiceChannelChat" /* 14540 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const RPCErrors = Constants.RPCErrors;
let result = size.fileFinishedImporting("modules/rpc/server/commands/voiceChannelChat.tsx");

export default {
  [Constants.RPCCommands.TOGGLE_VOICE_CHANNEL_CHAT]: {
    scope: Constants2.RPC_LOCAL_SCOPE,
    validation(boolean) {
      const obj = createRpcJoiSchemaObjectDefault(boolean);
      return obj.keys({ open: boolean.boolean() });
    },
    handler(args) {
      const result = toggleVoiceChannelChat.toggleVoiceChannelChat(args.args.open);
      if (null == result) {
        const obj3 = { errorCode: RPCErrors.INVALID_CHANNEL };
        const tmp8 = new RPCErrorDefault(obj3, "Not connected to a guild voice channel");
        throw tmp8;
      } else {
        ({ channelId: obj2.channel_id, chatOpen: obj2.chat_open } = result);
        return { channel_id: null, chat_open: null };
      }
    }
  }
};
