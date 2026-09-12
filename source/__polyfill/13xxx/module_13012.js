// Module ID: 13012
// Function ID: 13013
// Dependencies: [12924, 12927, 12926, 12932]
// Exports: addConsoleInstrumentationHandler

// Module 13012
import _mod12924 from "module_12924" /* 12924 */;
import _mod12926 from "module_12926" /* 12926 */;
import _mod12927 from "module_12927" /* 12927 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12927.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12926.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12927).GLOBAL_OBJ.console) {
        tmp(12932).fill(tmp(12927).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12926.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12924).triggerHandlers("console", { args: items, level });
            const obj3 = level(12926).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12927).GLOBAL_OBJ.console, items);
            }
          };
        });
        const tmpResult = tmp(12932);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(arg0) {
  _mod12924.addHandler("console", arg0);
  _mod12924.maybeInstrument("console", instrumentConsole);
};
