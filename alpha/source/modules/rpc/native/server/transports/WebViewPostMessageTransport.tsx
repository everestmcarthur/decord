// Module ID: 9576
// Function ID: 9577
// Name: WebViewPostMessageTransport
// Dependencies: [3, 9577, 9578, 9584, 9588, 2]

// Module 9576 (WebViewPostMessageTransport)
import LoggerDefault from "Logger" /* 3 */;
import stripSensitiveLoggingDataDefault from "stripSensitiveLoggingData" /* 9577 */;
import WebViewWindowProxySocketFactoryDefault from "WebViewWindowProxySocketFactory" /* 9588 */;
import PostMessageTransport from "PostMessageTransport" /* 9578 */;

const tmp2 = new LoggerDefault("RPCServer:PostMessage");
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default new PostMessageTransport(fn(9584).validateSocketClient, new LoggerDefault("RPCServer:PostMessage"), WebViewWindowProxySocketFactoryDefault, (arg0, info, id) => {
  const combined = "Socket Message: " + id.id;
  info.info(combined, stripSensitiveLoggingDataDefault(arg0));
});
