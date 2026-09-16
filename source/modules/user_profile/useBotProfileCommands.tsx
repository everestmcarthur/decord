// Module ID: 11356
// Function ID: 11357
// Name: useBotProfileCommands
// Dependencies: [19, 9559, 1895, 2]
// Exports: default

// Module 11356 (useBotProfileCommands)
import ApplicationCommandQueryApiAll from "ApplicationCommandQueryApi" /* 9559 */;
import noop from "module_19" /* 19 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/useBotProfileCommands.tsx");

export default function useBotProfileCommands(channel, arg1, arg2) {
  const accessibleCommandsForApplication = ApplicationCommandQueryApiAll.useAccessibleCommandsForApplication(channel, arg1, arg2);
  const commands = accessibleCommandsForApplication.commands;
  const obj2 = { application: accessibleCommandsForApplication.application, commands: null };
  const items = [commands];
  obj2.commands = noop.useMemo(() => {
    let found;
    if (commands != null) {
      found = commands.filter((nsfw) => {
        let tmp = true !== nsfw.nsfw;
        if (tmp) {
          const options = nsfw.options;
          let found;
          if (options != null) {
            found = options.find((type) => {
              type = type.type;
              return type === closure_1_0(dependencyMap[2]).ApplicationCommandOptionType.SUB_COMMAND || type === closure_1_0(dependencyMap[2]).ApplicationCommandOptionType.SUB_COMMAND_GROUP;
            });
          }
          tmp = null == found;
        }
        return tmp;
      });
    }
    return found;
  }, items);
  return obj2;
};
