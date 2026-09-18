// Module ID: 16818
// Function ID: 16819
// Name: ThreadAutoArchiveBottomSheet
// Dependencies: [19, 1964, 21, 9312, 5685, 1114, 5688, 2]

// Module 16818 (ThreadAutoArchiveBottomSheet)
import TableRadioRow from "TableRadioRow" /* 5688 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ChannelFlags = fn(1964).ChannelFlags;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/components/ThreadAutoArchiveBottomSheet.tsx");

export const AutoArchiveDurationOptions = noop.memo((channel) => {
  channel = channel.channel;
  _require = undefined;
  ({ title, description, selected, onSelectDuration } = channel);
  const autoArchiveOptions = require("ThreadAutoArchive").getAutoArchiveOptions();
  let hasFlagResult = null != channel && channel.isForumPost();
  if (hasFlagResult) {
    hasFlagResult = channel.hasFlag(ChannelFlags.PINNED);
  }
  _require = hasFlagResult;
  const obj2 = { value: selected, title, description, accessibilityLabel: null, onChange: null, hasIcons: false, children: null };
  const intl = tmp(1114).intl;
  obj2.accessibilityLabel = intl.string(require("util").t.H4mGfI);
  obj2.onChange = onSelectDuration;
  obj2.children = autoArchiveOptions.map((value) => jsx(TableRadioRow.TableRadioRow, { value: value.value, disabled, label: value.label }, value.value));
  return jsx(require("TableRadioGroup").TableRadioGroup, { value: selected, title, description, accessibilityLabel: null, onChange: null, hasIcons: false, children: null });
});
