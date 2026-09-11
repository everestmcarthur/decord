// Module ID: 14371
// Function ID: 14372
// Dependencies: [14356, 14352, 14372]

// Module 14371
import _mod14352 from "module_14352" /* 14352 */;
import _mod14356 from "module_14356" /* 14356 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14356(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14352.String(SymbolResult);
    let tmp5 = !StringResult;
    if (StringResult) {
      const _Object = Object;
      const _Symbol = Symbol;
      tmp5 = !(Object(SymbolResult) instanceof Symbol);
    }
    if (!tmp5) {
      const _Symbol2 = Symbol;
      let tmp2Result = !sham;
      if (!sham) {
        tmp2Result = tmp2(14372);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(14372) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
