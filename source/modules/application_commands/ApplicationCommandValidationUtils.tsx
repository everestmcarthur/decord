// Module ID: 12248
// Function ID: 12249
// Name: ApplicationCommandValidationUtils
// Dependencies: [5050, 7596, 9503, 1114, 12249, 2]
// Exports: getValidationResults

// Module 12248 (ApplicationCommandValidationUtils)
import util from "util" /* 1114 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5050 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7596 */;
import ApplicationCommandOptionUtils from "ApplicationCommandOptionUtils" /* 9503 */;
import ApplicationCommandValidatorsDefault from "ApplicationCommandValidators" /* 12249 */;
import size from "module_2" /* 2 */;

function validateOptionContent(allowEmptyValues) {
  ({ option, content, guildId, channelId, commandOrigin } = allowEmptyValues);
  if (commandOrigin === undefined) {
    commandOrigin = ApplicationCommandTypes.CommandOrigin.CHAT;
  }
  let str = "";
  if (null != content) {
    const obj2 = { content };
    str = ApplicationCommandOptionUtils.getString(obj2, "content").trim();
    const str3 = ApplicationCommandOptionUtils.getString(obj2, "content");
  }
  const required = option.required;
  if (null == content) {
    if (required) {
      const obj3 = { success: false, error: null };
      const intl2 = util.intl;
      obj3.error = intl2.string(util.t.JZJQL2);
      let obj4 = obj3;
    } else {
      obj4 = { success: true };
    }
    return obj4;
  } else if ("" === str) {
    if (allowEmptyValues.allowEmptyValues) {
      let obj5 = { success: true };
    } else {
      const obj6 = { success: false, error: null };
      if (required) {
        const intl = util.intl;
        obj6.error = intl.string(util.t.JZJQL2);
        obj5 = obj6;
      } else {
        obj6.error = getValidationErrorText(option);
        obj5 = obj6;
      }
    }
    return obj5;
  } else {
    if (content.length > 1) {
      const obj7 = { type: "text", text: str };
      let first = obj7;
    } else {
      first = content[0];
    }
    const tmp8 = ApplicationCommandValidatorsDefault;
    const tmp15 = tmp8[option.type](first, option, channelId, guildId, commandOrigin);
    if (!tmp16) {
      tmp15.error = getValidationErrorText(option);
    }
    return tmp15;
  }
}
const getValidationErrorText = ApplicationCommandConstants.getValidationErrorText;
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandValidationUtils.tsx");

export const getValidationResults = function getValidationResults(activeCommand, optionValues, guild_id, id, allowEmptyValues) {
  const obj = {};
  const options = activeCommand.options;
  if (null == options) {
    return obj;
  } else {
    for (const item10012 of options) {
      let obj2 = { option: item10012, content: arg1[item10012.name], guildId: arg2, channelId: arg3, allowEmptyValues: arg4 };
      obj[item10012.name] = validateOptionContent(obj2);
      continue;
    }
    return obj;
  }
};
export { validateOptionContent };
