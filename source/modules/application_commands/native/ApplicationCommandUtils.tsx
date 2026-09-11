// Module ID: 12324
// Function ID: 12325
// Name: application_commands/ApplicationCommandUtils
// Dependencies: [4947, 4946, 5050, 1396, 12325, 12326, 7596, 1884, 10722, 9397, 2]
// Exports: getApplicationCommandsIconSource, openCommandAttachmentPreview

// Module 12324 (application_commands/ApplicationCommandUtils)
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import _modDef1884 from "module_1884" /* 1884 */;
import DraftStore from "DraftStore" /* 4947 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5050 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7596 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9397 */;
import showUploadPreviewActionSheetDefault from "showUploadPreviewActionSheet" /* 10722 */;
import _modDef12325 from "module_12325" /* 12325 */;
import _modDef12326 from "module_12326" /* 12326 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 4946 */;
import size from "module_2" /* 2 */;

const DraftType = DraftStore.DraftType;
const BuiltInSectionId = ApplicationCommandConstants.BuiltInSectionId;
let result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandUtils.tsx");

export const getApplicationCommandsIconSource = function getApplicationCommandsIconSource(section, stateFromStores) {
  if (null == section) {
    return null;
  } else {
    const id = section.id;
    if (BuiltInSectionId.BUILT_IN === id) {
      return AvatarUtilsDefault.makeSource(_modDef12325);
    } else if (tmp10.FRECENCY === id) {
      return AvatarUtilsDefault.makeSource(_modDef12326);
    } else {
      if (section.type === ApplicationCommandTypes.ApplicationCommandSectionType.APPLICATION) {
        const obj5 = { id: null, icon: null, bot: null, botIconFirst: true, guildMember: null };
        ({ id: obj2.id, icon: obj2.icon, application } = section);
        let bot;
        if (application != null) {
          bot = application.bot;
        }
        obj5.bot = bot;
        obj5.guildMember = stateFromStores;
        let applicationIconSource = AvatarUtilsDefault.getApplicationIconSource(obj5);
      } else {
        applicationIconSource = _modDef1884;
      }
      return applicationIconSource;
    }
  }
};
export const openCommandAttachmentPreview = function openCommandAttachmentPreview(applicationCommandManager, channelId, name, fn) {
  closure_0 = applicationCommandManager;
  importDefault = channelId;
  dependencyMap = name;
  upload = UploadAttachmentStore.getUpload(channelId, name, upload.SlashCommand);
  if (null != upload) {
    const obj = {
      channelId,
      disableSpoiler: true,
      onClose: fn,
      onRemove() {
          UploadAttachmentActionCreatorsDefault.remove(closure_1, upload.id, DraftType.SlashCommand);
          let found;
          if (closure_0 != null) {
            const activeCommand = obj2.props.activeCommand;
            if (activeCommand != null) {
              const options = activeCommand.options;
              if (options != null) {
                found = options.find((name) => name.name === name);
              }
            }
          }
          if (null != found) {
            if (obj2 != null) {
              const result = obj2.insertOrJumpCommandOption(found, undefined, false, { displayText: "" });
            }
          }
        },
      upload
    };
    showUploadPreviewActionSheetDefault(obj);
  }
};
