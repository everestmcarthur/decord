// Module ID: 14428
// Function ID: 14429
// Dependencies: [14429]

// Module 14428
import module_14429_mod from "module_14429" /* 14429 */;

const call = prototype.call;
let module_14429 = module_14429_mod;
if (module_14429) {
  const bind = prototype.bind;
  module_14429 = bind.bind(call, call);
}
if (!module_14429) {
  module_14429 = (arg0) => {
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

export default module_14429;
