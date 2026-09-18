// Module ID: 13290
// Function ID: 13291
// Name: ForLaterCardActionButtons
// Dependencies: [19, 17, 21, 4560, 4527, 11715, 1896, 11709, 11714, 1114, 11741, 5680, 13291, 10255, 8672, 8098, 8679, 2]
// Exports: default

// Module 13290 (ForLaterCardActionButtons)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import SavedMessageHelpers from "SavedMessageHelpers" /* 11709 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ actionGroup: { flexDirection: "row", gap: 8 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterCardActionButtons.tsx");

export default function ForLaterCardActionButtons(savedMessage) {
  savedMessage = savedMessage.savedMessage;
  const jumpToMessage = savedMessage.jumpToMessage;
  const items = [savedMessage];
  let obj = { label: null, IconComponent: null, action: null };
  const callback = noop.useCallback(() => ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11715, dependencyMap.paths), "MessageReminderDurationActionSheet", {
    createReminder(dueAt) {
      const obj2 = {};
      const merged = Object.assign(closure_1_0.saveData);
      obj2.dueAt = dueAt;
      obj2.source = savedMessage(11714).SavedMessageSources.FOR_LATER_LIST;
      return savedMessage(11709).addOrUpdateSavedMessage(obj2);
    },
    removeReminder() {
      return savedMessage(11709).removeSavedMessage({ channelId: closure_1_0.saveData.channelId, messageId: closure_1_0.saveData.messageId, displayToast: true, isReminder: true });
    },
    channelId: savedMessage.saveData.channelId,
    messageId: savedMessage.saveData.messageId
  }), items);
  let intl = savedMessage(1114).intl;
  obj.label = intl.string(savedMessage(1114).t["+TSRGD"]);
  obj.IconComponent = savedMessage(11741).ChatArrowRightIcon;
  obj.action = function action() {
    return jumpToMessage();
  };
  const items1 = [obj, ];
  const intl2 = savedMessage(1114).intl;
  if (null != savedMessage.saveData.dueAt) {
    let SvXS1Z = tmp3(1114).t["a6gcZ/"];
  } else {
    SvXS1Z = tmp3(1114).t.SvXS1Z;
  }
  const tmp = closure_6();
  items1[1] = {
    label: intl2.string(SvXS1Z),
    IconComponent: savedMessage(5680).XSmallIcon,
    action() {
      return SavedMessageHelpers.removeSavedMessage(savedMessage.saveData);
    },
    variant: "destructive"
  };
  if (null == savedMessage.saveData.dueAt) {
    const obj3 = { style: tmp.actionGroup, children: null };
    const obj4 = {
      items: items1,
      keyboardShouldPersistTaps: "handled",
      triggerOnTap: true,
      children(ref) {
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = { ref: ref.ref };
          const merged1 = Object.assign(merged);
          obj.variant = "secondary";
          const intl = savedMessage(1114).intl;
          obj.accessibilityLabel = intl.string(savedMessage(1114).t.e1heBD);
          obj.size = "sm";
          obj.icon = jumpToMessage(8679);
          return jsx(savedMessage(8098).IconButton, { ref: ref.ref });
        }
    };
    obj3.children = jsx(tmp3(8672).ContextMenu, {
      items: items1,
      keyboardShouldPersistTaps: "handled",
      triggerOnTap: true,
      children(ref) {
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = { ref: ref.ref };
          const merged1 = Object.assign(merged);
          obj.variant = "secondary";
          const intl = savedMessage(1114).intl;
          obj.accessibilityLabel = intl.string(savedMessage(1114).t.e1heBD);
          obj.size = "sm";
          obj.icon = jumpToMessage(8679);
          return jsx(savedMessage(8098).IconButton, { ref: ref.ref });
        }
    });
    return <View style={tmp.actionGroup}>{null}</View>;
  } else {
    const intl3 = tmp3(1114).intl;
    const t = tmp3(1114).t;
    let obj5 = { label: intl3.string(savedMessage.throttledNow > savedMessage.saveData.dueAt ? t.GtBCnz : t.vrbqs1), IconComponent: null, action: null };
    if (savedMessage.throttledNow > savedMessage.saveData.dueAt) {
      let PencilIcon = tmp3(13291).BellZIcon;
    } else {
      PencilIcon = tmp3(10255).PencilIcon;
    }
    obj5.IconComponent = PencilIcon;
    obj5.action = callback;
    obj5 = items1.unshift(obj5);
  }
};
