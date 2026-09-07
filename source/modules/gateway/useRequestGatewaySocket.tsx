// Module ID: 14563
// Function ID: 14564
// Name: useRequestGatewaySocket
// Dependencies: [19, 11305, 7757, 2]
// Exports: useRequestGatewaySocket

// Module 14563 (useRequestGatewaySocket)
import _modDef11305 from "module_11305" /* 11305 */;
import closure_3 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("modules/gateway/useRequestGatewaySocket.tsx");

export const useRequestGatewaySocket = function useRequestGatewaySocket(arg0) {
  importDefault = arg0;
  const canUIRequestGatewaySocket = _modDef11305.useCanUIRequestGatewaySocket();
  const items = [arg0, canUIRequestGatewaySocket];
  const effect = React.useEffect(() => {
    if (canUIRequestGatewaySocket) {
      canUIRequestGatewaySocket(closure_1_2[2]).setRequestedBy(closure_0);
      return () => {
        closure_1_1(closure_1_2[2]).stopRequest(closure_0);
      };
    }
  }, items);
};
