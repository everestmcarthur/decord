// Module ID: 13011
// Function ID: 13012
// Dependencies: [12926, 12927, 13012, 12953, 12982, 13013, 12937, 12935, 12974]

// Module 13011
import _mod12953 from "module_12953" /* 12953 */;
import setupIntegration from "module_12982" /* 12982 */;


export const captureConsoleIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let handled;
  let CONSOLE_LEVELS = obj.levels;
  if (!CONSOLE_LEVELS) {
    CONSOLE_LEVELS = CONSOLE_LEVELS(handled[0]).CONSOLE_LEVELS;
  }
  handled = obj.handled;
  return {
    name: "CaptureConsole",
    setup(arg0) {
      closure_0 = arg0;
      if ("console" in CONSOLE_LEVELS(handled[1]).GLOBAL_OBJ) {
        let result = CONSOLE_LEVELS(handled[2]).addConsoleInstrumentationHandler((arg0) => {
          ({ args, level } = arg0);
          let hasItem = _mod12953.getClient() === args;
          if (hasItem) {
            hasItem = CONSOLE_LEVELS.includes(level);
          }
          if (hasItem) {
            closure_2 = handled;
            let obj2 = { level: tmp(13013).severityLevelFromString(level), extra: null };
            const obj3 = { arguments: args };
            obj2.extra = obj3;
            const tmpResult = tmp(13013);
            tmp(12953).withScope((addEventProcessor) => {
              addEventProcessor.addEventProcessor((arg0) => {
                arg0.logger = "console";
                const result = args(level[6]).addExceptionMechanism(arg0, { handled, type: "console" });
                return arg0;
              });
              if ("assert" !== level) {
                const found = args.find((item) => item instanceof Error);
                if (found) {
                  tmp14(12974).captureException(found, obj2);
                  const tmp14Result = tmp14(12974);
                } else {
                  const tmp14Result2 = tmp14(12935);
                  const safeJoinResult = tmp14(12935).safeJoin(tmp12, " ");
                  args(12974).captureMessage(safeJoinResult, obj2);
                  const obj4 = args(12974);
                }
                tmp12 = args;
              } else if (!args[0]) {
                const obj = args(12935);
                const _HermesInternal = HermesInternal;
                const combined = "Assertion failed: " + args(12935).safeJoin(arr.slice(1), " ") || "console.assert";
                addEventProcessor.setExtra("arguments", arr.slice(1));
                obj2 = args(12974);
                obj2.captureMessage(combined, obj2);
                const tmp4 = args(12935).safeJoin(arr.slice(1), " ") || "console.assert";
              }
            });
            const tmpResult2 = tmp(12953);
          }
        });
        let tmpResult = CONSOLE_LEVELS(handled[2]);
      }
    }
  };
});
