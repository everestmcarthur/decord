// Module ID: 16583
// Function ID: 16584
// Name: TypingSubtitle
// Dependencies: [19, 17, 21, 16582, 5197, 5249, 4718, 2]
// Exports: default

// Module 16583 (TypingSubtitle)
import Text_Text from "Text/Text" /* 4718 */;
import useSubtitleStyles from "useSubtitleStyles" /* 16582 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/TypingSubtitle.tsx");

export default function TypingSubtitle(arg0) {
  ({ channel, channelName } = arg0);
  ({ guild, text } = arg0);
  const subtitleStyles = useSubtitleStyles.useSubtitleStyles();
  let channelIconComponentWithGuild;
  if (null != channel) {
    channelIconComponentWithGuild = tmp(5197).getChannelIconComponentWithGuild(channel, guild);
    const tmpResult = tmp(5197);
  }
  if (channelIconComponentWithGuild == null) {
    channelIconComponentWithGuild = tmp(5249).TextIcon;
  }
  const obj2 = { style: subtitleStyles.subtitleRow, children: null };
  let tmp7 = null;
  if (null != channelName) {
    const obj3 = { size: "xxs", color: "icon-muted", style: subtitleStyles.channelIcon };
    tmp7 = React3(channelIconComponentWithGuild, obj3);
  }
  const items = [tmp7, ];
  const obj4 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, style: subtitleStyles.subtitleText, children: null };
  let tmp5Result = null;
  if (null != channelName) {
    const obj5 = { variant: "text-xs/medium", children: null };
    const items1 = [channelName, "  \u00B7  "];
    obj5.children = items1;
    tmp5Result = tmp5(tmp(4718).Text, obj5);
  }
  const items2 = [tmp5Result, text];
  obj4.children = items2;
  items[1] = React4(Text_Text.Text, obj4);
  obj2.children = items;
  return React4(View, obj2);
};
