// Module ID: 9693
// Function ID: 9694
// Name: WebViewPostMessageTransport
// Dependencies: [3, 9694, 9695, 9701, 9705, 2]

// Module 9693 (WebViewPostMessageTransport)
import LoggerDefault from "Logger" /* 3 */;
import stripSensitiveLoggingDataDefault from "stripSensitiveLoggingData" /* 9694 */;
import WebViewWindowProxySocketFactoryDefault from "WebViewWindowProxySocketFactory" /* 9705 */;
import PostMessageTransport from "PostMessageTransport" /* 9695 */;

const tmp2 = new LoggerDefault("RPCServer:PostMessage");
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default new PostMessageTransport(fn(9701).validateSocketClient, new LoggerDefault("RPCServer:PostMessage"), WebViewWindowProxySocketFactoryDefault, (arg0, info, id) => {
  const combined = "Socket Message: " + id.id;
  info.info(combined, stripSensitiveLoggingDataDefault(arg0));
});
