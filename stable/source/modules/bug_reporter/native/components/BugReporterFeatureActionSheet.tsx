// Module ID: 10216
// Function ID: 10217
// Name: BugReporterFeatureActionSheet
// Dependencies: [32, 19, 17, 21, 4560, 576, 4556, 10192, 5605, 4527, 5689, 6981, 12, 5517, 7049, 10217, 7150, 7149, 1114, 7050, 7055, 2]
// Exports: default

// Module 10216 (BugReporterFeatureActionSheet)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let obj = { list: { paddingHorizontal: nativeDefault.space.PX_12 }, searchBar: null, sectionHeader: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_12 };
obj.searchBar = { paddingHorizontal: nativeDefault.space.PX_12 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_12 };
obj.sectionHeader = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center" };
let closure_8 = createStyles.createStyles(obj);
let closure_9 = noop.memo((arg0) => {
  ({ title, height } = arg0);
  const obj = { style: null, children: null };
  const items = [closure_8().sectionHeader, { height }];
  obj.style = items;
  obj.children = timestampProducer(Text_Text.Text, { variant: "text-sm/bold", color: "text-muted", children: title });
  return timestampProducer(View, obj);
});
let closure_10 = noop.memo((item) => {
  item = item.item;
  const setFeature = item.setFeature;
  ({ feature, start, end } = item);
  const featureId = item(10192).getFeatureId(item);
  const obj = item(10192);
  const featureId1 = item(10192).getFeatureId(feature);
  const obj3 = {
    start,
    end,
    label: item.name,
    onPress() {
      setFeature(item);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    trailing: closure_6(item(5689).FormRadio, { selected: featureId === featureId1 })
  };
  return closure_6(item(5605).TableRow, obj3);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/bug_reporter/native/components/BugReporterFeatureActionSheet.tsx");

export default function BugReporterFeatureActionSheet(features) {
  features = features.features;
  const feature = features.feature;
  const setFeature = features.setFeature;
  let first;
  let items;
  let tmp = closure_8();
  const tmp2 = first(items.useState(""), 2);
  first = tmp2[0];
  const items1 = [features, first];
  const memo = items.useMemo(() => {
    const found = features.filter((asana_inbox_id) => {
      let tmp = null != asana_inbox_id.asana_inbox_id;
      if (tmp) {
        let isEmptyResult = feature(setFeature[12]).isEmpty(first);
        if (!isEmptyResult) {
          let str3;
          const formatted = str.toLowerCase();
          if (asana_inbox_id.name != null) {
            str3 = str2.toLowerCase();
          }
          if (str3 == null) {
            str3 = "";
          }
          isEmptyResult = tmp2(tmp3[13])(formatted, str3);
          const tmp2Result = tmp2(tmp3[13]);
        }
        if (!isEmptyResult) {
          let str5;
          const formatted1 = str.toLowerCase();
          if (asana_inbox_id.squad != null) {
            str5 = str4.toLowerCase();
          }
          if (str5 == null) {
            str5 = "";
          }
          isEmptyResult = tmp2(tmp3[13])(formatted1, str5);
          const tmp2Result2 = tmp2(tmp3[13]);
        }
        tmp = isEmptyResult;
        const obj = feature(setFeature[12]);
      }
      return tmp;
    });
    const entries = Object.entries(_modDef12.groupBy(found, (squad) => squad.squad));
    const obj2 = { items: null, sections: null };
    const mapped = entries.map((item) => {
      [, arr] = item;
      return arr.length;
    });
    obj2.items = entries.map((item) => {
      [tmp, tmp2] = item;
      return { title, data };
    });
    obj2.sections = mapped;
    return obj2;
  }, items1);
  items = memo.items;
  const tmp6 = feature(setFeature[15])();
  const height = tmp6;
  const items2 = [items, setFeature, feature];
  const items3 = [tmp6, items];
  const callback = items.useCallback((arg0, arg1) => timestampProducer(closure_10, { item: items[arg0].data[arg1], feature, setFeature, start: 0 === arg1, end: arg1 === items[arg0].data.length - 1 }), items2);
  const callback1 = items.useCallback((arg0) => timestampProducer(closure_9, { title: items[arg0].title, height }), items3);
  let obj = { scrollable: true, startExpanded: true, header: null, children: null };
  let obj2 = { title: null };
  const intl = features(setFeature[18]).intl;
  obj2.title = intl.string(features(setFeature[18]).t["77VVd8"]);
  obj.header = closure_6(features(setFeature[17]).BottomSheetTitleHeader, obj2);
  const tmp5 = feature(setFeature[14])();
  const items4 = [closure_6(height, { style: tmp.searchBar, children: closure_6(features(setFeature[19]).SearchField, { size: "md", onChange: tmp2[1] }) }), ];
  const obj4 = { style: tmp.list, inActionSheet: true, sections: memo.sections, itemSize: tmp5, estimatedListSize: "windowSize", renderItem: callback, renderSectionHeader: callback1, sectionHeaderSize: tmp6, insetEnd: null };
  const obj3 = { style: tmp.searchBar, children: closure_6(features(setFeature[19]).SearchField, { size: "md", onChange: tmp2[1] }) };
  obj4.insetEnd = feature(setFeature[5]).space.PX_16 + feature(setFeature[11])().insets.bottom;
  items4[1] = closure_6(feature(setFeature[20]), obj4);
  obj.children = items4;
  return closure_7(features(setFeature[16]).BottomSheet, obj);
};
