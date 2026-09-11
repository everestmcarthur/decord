// Module ID: 12978
// Function ID: 12979
// Dependencies: [12890, 12893, 12892, 12898]
// Exports: addConsoleInstrumentationHandler

// Module 12978
import _mod12890 from "module_12890" /* 12890 */;
import _mod12892 from "module_12892" /* 12892 */;
import _mod12893 from "module_12893" /* 12893 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12893.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12892.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12893).GLOBAL_OBJ.console) {
        tmp(12898).fill(tmp(12893).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12892.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12890).triggerHandlers("console", { args: items, level });
            const obj3 = level(12892).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12893).GLOBAL_OBJ.console, items);
            }
          };
        });
        const tmpResult = tmp(12898);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(arg0) {
  _mod12890.addHandler("console", arg0);
  _mod12890.maybeInstrument("console", instrumentConsole);
};
