// Module ID: 9068
// Function ID: 9069
// Name: InAppReportsGuildPreviewElement
// Dependencies: [19, 17, 21, 4574, 576, 4423, 4570, 1114, 5598, 2]
// Exports: default

// Module 9068 (InAppReportsGuildPreviewElement)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ColorUtils from "ColorUtils" /* 4423 */;
import Text_Text from "Text/Text" /* 4570 */;
import GuildIcon from "GuildIcon" /* 5598 */;
import noop from "module_19" /* 19 */;

const GuildIconDefault = GuildIcon;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4574);
let obj2 = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY }, title: { lineHeight: 16, marginBottom: 8 }, guildContainer: null, guildInfo: null };
let obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.guildContainer = { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 12 };
obj2.guildInfo = { marginLeft: 8 };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsGuildPreviewElement.tsx");

export default function GuildPreview(guild) {
  guild = guild.guild;
  const tmp = closure_6();
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold", children: null };
  const intl = util.intl;
  const hexWithOpacityResult = ColorUtils.hexWithOpacity(tmp.borderColor.color, 0.08);
  obj3.children = intl.string(util.t["0ox7Hq"]).toUpperCase();
  const items = [React4(Text_Text.Text, obj3), ];
  const obj4 = { style: null, children: null };
  const items1 = [tmp.guildContainer, { borderColor: hexWithOpacityResult }];
  obj4.style = items1;
  const obj5 = { size: null, guild: null };
  const str = intl.string(util.t["0ox7Hq"]);
  obj5.size = GuildIcon.GuildIconSizes.LARGE;
  obj5.guild = guild;
  const items2 = [React4(GuildIconDefault, obj5), React4(Text_Text.Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.guildInfo, children: guild.name })];
  obj4.children = items2;
  items[1] = hasOwnProperty(View, obj4);
  obj2.children = items;
  return hasOwnProperty(View, obj2);
};
