// Module ID: 17940
// Function ID: 17941
// Name: StreamFullAlert
// Dependencies: [19, 17, 21, 9200, 1114, 5045, 4602, 17941, 2]
// Exports: default

// Module 17940 (StreamFullAlert)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4602 */;
import common_AlertDefault from "common/Alert" /* 5045 */;
import AVError from "AVError" /* 9200 */;
import _modDef17941 from "module_17941" /* 17941 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = { image: { alignSelf: "center", marginTop: 32 }, body: { marginTop: 16 } };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/calls/stream/StreamFullAlert.tsx");

export default function StreamFullAlert(arg0) {
  const errorInfo = AVError.getErrorInfo(AVError.AVError.STREAM_FULL);
  let errorCode;
  if (errorInfo != null) {
    errorCode = errorInfo.errorCode;
  }
  const intl = tmp(1114).intl;
  const obj2 = {};
  const formatToPlainStringResult = intl.formatToPlainString(util.t.ejOT95, { errorCode });
  const merged = Object.assign(arg0);
  const intl2 = tmp(1114).intl;
  obj2.title = intl2.string(util.t.GzjdO5);
  const obj3 = { variant: "text-md/normal", style: closure_6.body, children: null };
  const intl3 = tmp(1114).intl;
  obj3.children = intl3.string(util.t.VVZDBL);
  const items = [React4(Text_Text.Text, obj3), React4(Text_Text.Text, { variant: "text-md/normal", selectable: true, color: "text-muted", style: closure_6.body, children: formatToPlainStringResult }), ];
  const obj4 = { variant: "text-md/normal", selectable: true, color: "text-muted", style: closure_6.body, children: formatToPlainStringResult };
  const tmp6 = common_AlertDefault;
  items[2] = React4(Image, { source: _modDef17941, style: closure_6.image });
  obj2.children = items;
  return hasOwnProperty(tmp6, obj2);
};
