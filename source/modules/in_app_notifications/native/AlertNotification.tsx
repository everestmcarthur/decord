// Module ID: 10305
// Function ID: 10306
// Name: AlertNotification
// Dependencies: [19, 17, 21, 5635, 8905, 576, 4606, 10187, 1114, 4617, 10259, 8679, 10196, 2]
// Exports: default

// Module 10305 (AlertNotification)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import transitionToChannel from "transitionToChannel" /* 4617 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
let size = { shape: fn(8905).CutoutShape.RoundedRect, x: fn(5635).ImageSizes[fn(undefined, 5635).GuildIconSizes.NORMAL] - -6 - 24, y: -6, width: 24, height: 24, cornerRadius: nativeDefault.radii.sm };
const createStyles = fn(4606);
let closure_9 = createStyles.createStyles({ warningBadge: { position: "absolute", top: -6, right: -6, width: 24, height: 24, alignItems: "center", justifyContent: "center" }, warningIcon: { width: 16, height: 16 } });
size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/AlertNotification.tsx");

export default function AlertNotification(notification) {
  notification = notification.notification;
  const channel = notification.channel;
  const guild = notification.guild;
  const tmp = closure_9();
  const incidentData = channel(10187).useGuildIncidentsState(notification.key).incidentData;
  let raidDetectedAt;
  if (incidentData != null) {
    raidDetectedAt = incidentData.raidDetectedAt;
  }
  if (null != raidDetectedAt) {
    const intl2 = tmp2(1114).intl;
    let stringResult = intl2.string(tmp2(1114).t.Mn3elp);
  } else {
    let intl = tmp2(1114).intl;
    stringResult = intl.string(tmp2(1114).t.evRhwg);
  }
  const items = [guild];
  const items1 = [channel.id];
  const memo = noop.useMemo(() => {
    const obj = { type: "simple", text: null, secondaryText: null };
    const intl = util.intl;
    obj.text = intl.string(util.t["2IY4YN"]);
    let name;
    if (guild != null) {
      name = guild.name;
    }
    obj.secondaryText = name;
    return obj;
  }, items);
  const callback = noop.useCallback(() => {
    transitionToChannel.transitionToChannel(channel.id, { navigationReplace: true });
  }, items1);
  const obj2 = { icon: null, header: null, children: null, onPress: null, notification: null };
  const obj3 = { children: null };
  const obj4 = { cutouts: null, children: null };
  const items2 = [size];
  obj4.cutouts = items2;
  let obj = channel(10187);
  obj4.children = closure_5(guild(5635), { guild, selected: false });
  const items3 = [closure_5(guild(8905), obj4), ];
  const obj5 = { style: tmp.warningBadge, children: null };
  const tmp8 = guild(8905);
  obj5.children = closure_5(channel(8679).WarningIcon, { style: tmp.warningIcon, color: guild(576).colors.ICON_FEEDBACK_WARNING });
  items3[1] = closure_5(View, obj5);
  obj3.children = items3;
  obj2.icon = closure_7(closure_6, obj3);
  obj2.header = memo;
  obj2.children = closure_5(channel(10196).SystemMessageText, { text: stringResult });
  obj2.onPress = callback;
  obj2.notification = notification;
  return closure_5(channel(10259).NotificationPressable, obj2);
};
