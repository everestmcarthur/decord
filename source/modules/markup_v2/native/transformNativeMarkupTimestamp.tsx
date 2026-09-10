// Module ID: 8127
// Function ID: 8128
// Name: transformNativeMarkupTimestamp
// Dependencies: [5036, 5010, 2]
// Exports: transformNativeTimestamp

// Module 8127 (transformNativeMarkupTimestamp)
import TimestampUtils from "TimestampUtils" /* 5036 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup_v2/native/transformNativeMarkupTimestamp.tsx");

export const transformNativeTimestamp = function transformNativeTimestamp(value) {
  const str1 = value.value.toString();
  const style = value.style;
  const parseTimestampResult = TimestampUtils.parseTimestamp(str1, style);
  if (null == parseTimestampResult) {
    const obj2 = { type: tmp2(5010).AST_KEY.TEXT, content: tmp2(5036).unparseTimestamp(str1, style) };
    let obj3 = obj2;
    const tmp2Result = tmp2(5036);
  } else {
    obj3 = {};
    const merged = Object.assign(parseTimestampResult);
    obj3.type = tmp2(5010).AST_KEY.TIMESTAMP;
  }
  return obj3;
};
