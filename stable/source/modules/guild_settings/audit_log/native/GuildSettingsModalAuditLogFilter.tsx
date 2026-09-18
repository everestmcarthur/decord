// Module ID: 17548
// Function ID: 17549
// Name: GuildSettingsModalAuditLogFilter
// Dependencies: [32, 19, 17, 1371, 17539, 1074, 21, 4560, 576, 1114, 4404, 17541, 1611, 1483, 5517, 17549, 10947, 5689, 5605, 1178, 10034, 17550, 7050, 8233, 8880, 7040, 2]
// Exports: createAuditLogFilterActionData, createAuditLogFilterUserData, default

// Module 17548 (GuildSettingsModalAuditLogFilter)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import AuditLogUtils from "AuditLogUtils" /* 17541 */;
import AuditLogActionCreators from "AuditLogActionCreators" /* 17549 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import GuildSettingsAuditLogStore from "GuildSettingsAuditLogStore" /* 17539 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const AuditLogFilterTypes = fn(1074).AuditLogFilterTypes;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4560);
let obj2 = { searchBar: { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_16 }, allUsersIconContainer: { height: 30, width: 30, alignItems: "center" } };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/audit_log/native/GuildSettingsModalAuditLogFilter.tsx");

export default function GuildSettingsModalAuditLogFilter(data) {
  data = data.data;
  const filterType = data.filterType;
  const guildId = data.guildId;
  let tmp = closure_12();
  _slicedToArray = tmp;
  const navigation = data(guildId[13]).useNavigation();
  const tmp6 = _slicedToArray(navigation.useState(""), 2);
  const first = tmp6[0];
  const items = [first, data];
  const memo = navigation.useMemo(() => ({
    data: data.filter((label) => {
      const formatted = first.toLowerCase();
      return filterType(guildId[14])(formatted, label.label.toLowerCase());
    }),
    keyExtractor(value) {
      if (null != value.value) {
        let str1 = value.value.toString();
      } else {
        str1 = value.index.toString();
      }
      return str1;
    }
  }), items);
  const data1 = memo.data;
  const items1 = [filterType, navigation];
  const effect = navigation.useEffect(() => {
    if (AuditLogFilterTypes.USER === filterType) {
      const intl3 = util.intl;
      let stringResult = intl3.string(util.t["hxnY/q"]);
    } else if (tmp3.ACTION === tmp2) {
      const intl2 = util.intl;
      stringResult = intl2.string(util.t.rautds);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t.pEasFX);
    }
    navigation.setOptions({ headerTitle: stringResult });
  }, items1);
  const items2 = [filterType, guildId, navigation];
  const callback = navigation.useCallback((arg0, navigation) => {
    if (arg0) {
      let tmp = navigation;
      if (filterType === AuditLogFilterTypes.USER) {
        let id = null;
        if (null != tmp) {
          id = tmp.id;
        }
        AuditLogActionCreators.filterByUserId(id, guildId);
      } else if (tmp2 === tmp3.ACTION) {
        AuditLogActionCreators.filterByAction(tmp, guildId);
      }
      tmp = navigation;
      navigation.pop();
    }
  }, items2);
  const items3 = [filterType, guildId, callback, data1.length, tmp.allUsersIconContainer];
  let obj2 = { style: tmp.searchBar, children: null };
  const callback1 = navigation.useCallback((item) => {
    value = iter.value;
    data = value;
    const selected = iter.selected;
    const index = item.index;
    if (selected === constants.USER) {
      if (null !== value) {
        const obj2 = {
          start: 0 === index,
          end: index === data1.length - 1,
          userId: value.id,
          guildId,
          onPress() {
                return callback(!selected, value);
              },
          trailing: null
        };
        const obj3 = { selected };
        obj2.trailing = closure_1_9(data(guildId[17]).FormRadio, obj3);
        let tmp4Result2 = closure_1_9(filterType(guildId[16]), obj2);
        const tmp16 = filterType(guildId[16]);
      }
      return tmp4Result2;
    }
    const obj = { start: 0 === index, end: index === data1.length - 1, icon: null, label: null, onPress: null, trailing: null };
    if (selected === constants.USER) {
      const obj4 = { style: closure_3.allUsersIconContainer, children: null };
      const obj5 = { size: tmp5(tmp6[19]).Icon.Sizes.MEDIUM, source: filterType(tmp6[20]) };
      obj4.children = tmp4(tmp5(tmp6[19]).Icon, obj5);
      let tmp4Result = tmp4(first, obj4);
    } else {
      const obj6 = { action: value };
      tmp4Result = tmp4(filterType(tmp6[21]), obj6);
    }
    obj.icon = tmp4Result;
    obj.label = item.item.label;
    obj.onPress = function onPress() {
      return callback(!selected, value);
    };
    obj.trailing = closure_1_9(data(guildId[17]).FormRadio, { selected });
    tmp4Result2 = tmp4(data(guildId[18]).TableRow, obj);
  }, items3);
  if (filterType === AuditLogFilterTypes.USER) {
    let intl3 = tmp4(tmp3[9]).intl;
    let stringResult = intl3.string(tmp4(tmp3[9]).t.pYHobK);
  } else if (filterType === tmp16.ACTION) {
    let intl2 = tmp4(tmp3[9]).intl;
    stringResult = intl2.string(tmp4(tmp3[9]).t.I288Zx);
  } else {
    let intl = tmp4(tmp3[9]).intl;
    stringResult = intl.string(tmp4(tmp3[9]).t["5h0QOP"]);
  }
  obj2.children = closure_9(data(guildId[22]).SearchField, { size: "md", placeholder: stringResult, onChange: tmp6[1] });
  const items4 = [closure_9(first, obj2), , ];
  if (0 === data1.length) {
    let obj3 = { body: null, title: null, Illustration: null };
    const intl4 = tmp4(tmp3[9]).intl;
    obj3.body = intl4.string(tmp4(tmp3[9]).t.V6nAfF);
    const intl5 = tmp4(tmp3[9]).intl;
    obj3.title = intl5.formatToPlainString(tmp4(tmp3[9]).t.ZGVL3g, { count: 0 });
    obj3.Illustration = tmp4(tmp3[23]).NoResults;
    let tmp14Result = tmp14(tmp4(tmp3[19]).EmptyState, obj3);
  } else {
    let obj4 = { keyExtractor: memo.keyExtractor, renderItem: callback1, data: data1, contentContainerStyle: null };
    let obj5 = { paddingHorizontal: filterType(tmp3[8]).space.PX_12, paddingBottom: filterType(guildId[12])().bottom };
    obj4.contentContainerStyle = obj5;
    tmp14Result = tmp14(tmp4(tmp3[24]).FlashList, obj4);
  }
  let obj6 = { children: null };
  items4[1] = tmp14Result;
  items4[2] = closure_9(data(guildId[25]).NavScrim, {});
  obj6.children = items4;
  return closure_11(closure_10, obj6);
};
export const createAuditLogFilterUserData = function createAuditLogFilterUserData(arg0) {
  _require = arg0;
  const items = [];
  let obj = { label: null, value: null, selected: null, index: 0 };
  const intl = require("util").intl;
  obj.label = intl.string(require("util").t.ZRFdsL);
  obj.selected = null == arg0;
  items.push(obj);
  set = new Set();
  const logs = GuildSettingsAuditLogStore.logs;
  const item = logs.forEach((userId) => {
    userId = userId.userId;
    if (null != userId) {
      const user = UserStore.getUser(userId);
      if (!tmp) {
        obj3.add(userId);
        const obj = { label: UserUtilsDefault.getUserTag(user), value: user, selected: user.id === closure_0, index: items.length };
        items.push(obj);
      }
      obj3 = set;
      tmp = set.has(userId) || null == user;
    }
  });
  const userIds = GuildSettingsAuditLogStore.userIds;
  const item1 = userIds.forEach((item) => {
    if (null != item) {
      const user = UserStore.getUser(item);
      if (!tmp) {
        obj3.add(item);
        const obj = { label: UserUtilsDefault.getUserTag(user), value: user, selected: user.id === closure_0, index: items.length };
        items.push(obj);
      }
      obj3 = set;
      tmp = set.has(item) || null == user;
    }
  });
  const sorted = items.sort((selected, selected2) => {
    let num = -1;
    if (!selected.selected) {
      let num2 = 1;
      if (!selected2.selected) {
        num2 = selected.index - selected2.index;
      }
      num = num2;
    }
    return num;
  });
  return items;
};
export const createAuditLogFilterActionData = function createAuditLogFilterActionData(arg0) {
  closure_0 = arg0;
  const mapped = AuditLogUtils.ACTION_FILTER_ITEMS().map((label, index) => ({ label: label.label, value: label.value, selected: closure_0 === label.value, index }));
  return mapped.sort((selected, selected2) => {
    let num = -1;
    if (!selected.selected) {
      let num2 = 1;
      if (!selected2.selected) {
        num2 = selected.index - selected2.index;
      }
      num = num2;
    }
    return num;
  });
};
