// Module ID: 14357
// Function ID: 14358
// Dependencies: [14358]

// Module 14357
import module_14358_mod from "module_14358" /* 14358 */;

const call = prototype.call;
let module_14358 = module_14358_mod;
if (module_14358) {
  const bind = prototype.bind;
  module_14358 = bind.bind(call, call);
}
if (!module_14358) {
  module_14358 = (arg0) => {
    closure_0 = arg0;
    return () => {
      const apply = call.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(tmp2);
      } else {
        applyArgumentsResult = apply(tmp2, arguments);
      }
      return applyArgumentsResult;
    };
  };
}

export default module_14358;
