// Module ID: 17787
// Function ID: 17788
// Name: GuildRoleSubscriptionTierTemplateFullCard
// Dependencies: [19, 17, 21, 4560, 576, 1178, 16121, 4556, 15240, 1611, 7150, 17788, 6627, 1114, 17789, 10351, 17790, 2]
// Exports: default

// Module 17787 (GuildRoleSubscriptionTierTemplateFullCard)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import Text_Text from "Text/Text" /* 4556 */;
import GuildRoleSubscriptionCard from "GuildRoleSubscriptionCard" /* 15240 */;
import GuildRoleSubscriptionGatedChannelIconDefault from "GuildRoleSubscriptionGatedChannelIcon" /* 16121 */;
import GuildRoleSubscriptionTierTemplateUtils from "GuildRoleSubscriptionTierTemplateUtils" /* 17790 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function SectionSeparator() {
  const obj = { children: null };
  const items = [React4(native.Spacer, { size: 24 }), , ];
  const tmp = closure_7();
  items[1] = React4(View, { style: closure_7().separator });
  items[2] = React4(native.Spacer, { size: 24 });
  obj.children = items;
  return timestampProducer(hasOwnProperty, obj);
}
function BenefitRow(description) {
  description = description.description;
  const tmp = closure_7();
  const obj = { style: tmp.benefitRowContainer, children: null };
  const items = [React4(View, { children: React4(GuildRoleSubscriptionGatedChannelIconDefault, {}) }), ];
  const obj3 = { style: tmp.benefitTextContainer, children: null };
  const items1 = [description.title, ];
  let tmp4Result = null;
  if (null != description) {
    const obj4 = { style: tmp.benefitDescription, variant: "text-sm/normal", color: "interactive-text-default", children: description };
    tmp4Result = React4(Text_Text.Text, obj4);
  }
  items1[1] = tmp4Result;
  obj3.children = items1;
  items[1] = timestampProducer(View, obj3);
  obj.children = items;
  return timestampProducer(View, obj);
}
function BenefitSection(arg0) {
  const obj = { children: null };
  ({ sectionTitle, children } = arg0);
  const items = [React4(GuildRoleSubscriptionCard.SectionTitle, { children: sectionTitle }), React4(native.Spacer, { size: 14 }), children];
  obj.children = items;
  return timestampProducer(hasOwnProperty, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1, padding: 16 }, subscriptionPlanTextStyle: null, descriptionPlanTextStyle: null, content: null, separator: null, benefitRowContainer: null, benefitTextContainer: null, benefitDescription: null, channelTitle: null, channelIcon: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1, padding: 16 };
obj2.subscriptionPlanTextStyle = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj4 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.descriptionPlanTextStyle = { color: nativeDefault.colors.TEXT_DEFAULT, paddingTop: 16, paddingBottom: 24 };
obj2.content = { paddingTop: 24 };
let obj5 = { color: nativeDefault.colors.TEXT_DEFAULT, paddingTop: 16, paddingBottom: 24 };
obj2.separator = { borderBottomWidth: 1, marginLeft: -16, marginRight: -16, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
obj2.benefitRowContainer = { flexDirection: "row", justifyContent: "flex-start" };
obj2.benefitTextContainer = { flex: 1, justifyContent: "center", marginLeft: 16 };
obj2.benefitDescription = { marginTop: 2 };
obj2.channelTitle = { flexDirection: "row", alignItems: "center" };
obj2.channelIcon = { marginEnd: 8 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateFullCard.tsx");

export default function GuildRoleSubscriptionTierTemplateFullCard(template) {
  template = template.template;
  ({ guildId, handleSelectTemplateInPreview } = template);
  const tmp = closure_7();
  _require = tmp;
  const first = template.listings[0];
  ({ channels, additional_perks } = first);
  ({ image, name, role_color } = first);
  let obj = { scrollable: true, startExpanded: true, children: null };
  let obj2 = { style: tmp.container, children: null };
  let items = [closure_4(require("GuildRoleSubscriptionTierTemplateBasicInfo").GuildRoleSubscriptionTierTemplateBasicInfo, { template, handleSelectTemplateInPreview, subscriptionPlanTextStyle: tmp.subscriptionPlanTextStyle, descriptionTextStyle: tmp.descriptionPlanTextStyle, closeActionSheet: true }), closure_4(View, { style: tmp.separator }), ];
  const obj5 = { scrollsToTop: false, style: tmp.content, contentContainerStyle: { paddingBottom: 32 + useSafeAreaInsetsDefault().bottom }, children: null };
  const obj7 = { variant: "text-sm/bold", color: "text-default", style: { textTransform: "uppercase" }, children: null };
  const intl = require("util").intl;
  obj7.children = intl.string(require("util").t.CjC5XZ);
  const items1 = [closure_4(require("Text/Text").Text, obj7), closure_4(require("native").Spacer, { size: 4 }), , , , , , , , , ];
  const obj8 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl2 = require("util").intl;
  obj8.children = intl2.string(require("util").t.bCb3c8);
  items1[2] = closure_4(require("Text/Text").Text, obj8);
  items1[3] = closure_4(require("native").Spacer, { size: 24 });
  const obj9 = { variant: "text-xs/bold", color: "text-default", style: { textTransform: "uppercase" }, children: null };
  const intl3 = require("util").intl;
  obj9.children = intl3.string(require("util").t.ZKyfEo);
  items1[4] = closure_4(require("Text/Text").Text, obj9);
  items1[5] = closure_4(require("native").Spacer, { size: 8 });
  items1[6] = closure_4(require("GuildRoleSubscriptionTierTemplateRolePreview").GuildRoleSubscriptionRolePreview, { roleColor: role_color, roleImage: image, roleName: name, guildId });
  items1[7] = closure_4(SectionSeparator, {});
  const obj10 = { sectionTitle: null, children: null };
  const intl4 = require("util").intl;
  obj10.sectionTitle = intl4.string(require("util").t.Ofvpfs);
  let obj3 = { template, handleSelectTemplateInPreview, subscriptionPlanTextStyle: tmp.subscriptionPlanTextStyle, descriptionTextStyle: tmp.descriptionPlanTextStyle, closeActionSheet: true };
  let obj4 = { style: tmp.separator };
  const obj6 = { paddingBottom: 32 + useSafeAreaInsetsDefault().bottom };
  obj10.children = closure_4(require("LayoutUtils").GappedList, {
    gap: 14,
    children: channels.map((children) => {
      const obj2 = { style: closure_0.channelTitle, children: null };
      const items = [React4(GuildRoleSubscriptionTierTemplateUtils.getPrivateChannelIconComponent(children.type), { style: closure_0.channelIcon, size: "xs" }), React4(Text_Text.Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.name })];
      obj2.children = items;
      const obj3 = { style: closure_0.channelIcon, size: "xs" };
      const obj4 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.name };
      return React4(BenefitRow, { title: timestampProducer(View, obj2), description: children.description }, children.id);
    })
  });
  items1[8] = closure_4(BenefitSection, obj10);
  items1[9] = closure_4(SectionSeparator, {});
  const obj12 = { sectionTitle: null, children: null };
  const intl5 = require("util").intl;
  obj12.sectionTitle = intl5.string(require("util").t.w7KA8R);
  const obj11 = {
    gap: 14,
    children: channels.map((children) => {
      const obj2 = { style: closure_0.channelTitle, children: null };
      const items = [React4(GuildRoleSubscriptionTierTemplateUtils.getPrivateChannelIconComponent(children.type), { style: closure_0.channelIcon, size: "xs" }), React4(Text_Text.Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.name })];
      obj2.children = items;
      const obj3 = { style: closure_0.channelIcon, size: "xs" };
      const obj4 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.name };
      return React4(BenefitRow, { title: timestampProducer(View, obj2), description: children.description }, children.id);
    })
  };
  obj12.children = closure_4(require("LayoutUtils").GappedList, { gap: 14, children: additional_perks.map((children, index) => closure_1_4(BenefitRow, { title: closure_1_4(closure_0(dependencyMap[7]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.name }) }, index)) });
  items1[10] = closure_4(BenefitSection, obj12);
  obj5.children = items1;
  items[2] = closure_6(require("BottomSheetModal").BottomSheetScrollView, obj5);
  obj2.children = items;
  obj.children = closure_6(View, obj2);
  return closure_4(require("Sheet/BottomSheet").BottomSheet, obj);
};
