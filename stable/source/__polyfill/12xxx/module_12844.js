// Module ID: 12844
// Function ID: 12845
// Dependencies: [12800, 12801, 12845, 12848, 12837, 12806]
// Exports: createEventEnvelope, createSessionEnvelope, createSpanEnvelope

// Module 12844
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12806 */;
import _mod12845 from "module_12845" /* 12845 */;
import __SENTRY_DEBUG__ from "module_12800" /* 12800 */;
import consoleSandbox from "module_12801" /* 12801 */;


export const createEventEnvelope = function createEventEnvelope(type, arg1, sdk, arg3) {
  const sdkMetadataForEnvelopeHeader = _mod12845.getSdkMetadataForEnvelopeHeader(sdk);
  let str = "event";
  if (type.type) {
    str = "event";
    if ("replay_event" !== type.type) {
      str = type.type;
    }
  }
  if (sdk) {
    sdk = sdk.sdk;
  }
  if (sdk) {
    type.sdk = type.sdk || {};
    let name = type.sdk.name;
    if (!name) {
      name = sdk.name;
    }
    type.sdk.name = name;
    let version = type.sdk.version;
    if (!version) {
      version = sdk.version;
    }
    type.sdk.version = version;
    let integrations = type.sdk.integrations;
    if (!integrations) {
      integrations = [];
    }
    const items = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(integrations, 0);
    const tmp9 = sdk.integrations || [];
    HermesBuiltin.arraySpread(tmp9, arraySpreadResult);
    type.sdk.integrations = items;
    let packages = type.sdk.packages;
    if (!packages) {
      packages = [];
    }
    const items1 = [];
    const arraySpreadResult5 = HermesBuiltin.arraySpread(packages, 0);
    const tmp17 = sdk.packages || [];
    HermesBuiltin.arraySpread(tmp17, arraySpreadResult5);
    type.sdk.packages = items1;
  }
  const eventEnvelopeHeaders = _mod12845.createEventEnvelopeHeaders(type, sdkMetadataForEnvelopeHeader, arg3, arg1);
  delete tmp[tmp2];
  const items2 = [{ type: str }, type];
  const tmp3Result = _mod12845;
  const items3 = [items2];
  return _mod12845.createEnvelope(eventEnvelopeHeaders, items3);
};
export const createSessionEnvelope = function createSessionEnvelope(toJSON, arg1, arg2, arg3) {
  const sdkMetadataForEnvelopeHeader = _mod12845.getSdkMetadataForEnvelopeHeader(arg2);
  const obj2 = { sent_at: null };
  obj2.sent_at = new Date().toISOString();
  let tmp4 = sdkMetadataForEnvelopeHeader;
  if (sdkMetadataForEnvelopeHeader) {
    const obj3 = { sdk: sdkMetadataForEnvelopeHeader };
    tmp4 = obj3;
  }
  const merged = Object.assign(tmp4);
  let tmp6 = arg3 && arg1;
  if (tmp6) {
    const obj4 = { dsn: tmp(12848).dsnToString(arg1) };
    tmp6 = obj4;
    const tmpResult = tmp(12848);
  }
  const merged1 = Object.assign(tmp6);
  if ("aggregates" in toJSON) {
    const items = [{ type: "sessions" }, toJSON];
    let items1 = items;
  } else {
    items1 = [{ type: "session" }, toJSON.toJSON()];
  }
  const date = new Date();
  const items2 = [items1];
  return _mod12845.createEnvelope(obj2, items2);
};
export const createSpanEnvelope = function createSpanEnvelope(arg0, getDsn) {
  const dynamicSamplingContextFromSpan = beforeSendSpan(12837).getDynamicSamplingContextFromSpan(arg0[0]);
  let dsn = getDsn;
  if (getDsn) {
    dsn = getDsn.getDsn();
  }
  let tunnel = getDsn;
  if (getDsn) {
    tunnel = getDsn.getOptions().tunnel;
  }
  const obj = beforeSendSpan(12837);
  const obj2 = { sent_at: new Date().toISOString() };
  const tmp2 = beforeSendSpan;
  let tmp7 = (function dscHasRequiredProps(dynamicSamplingContextFromSpan) {
    return dynamicSamplingContextFromSpan.trace_id && dynamicSamplingContextFromSpan.public_key;
  })(dynamicSamplingContextFromSpan);
  if (tmp7) {
    const obj3 = { trace: dynamicSamplingContextFromSpan };
    tmp7 = obj3;
  }
  const merged = Object.assign(tmp7);
  let tmp9 = tunnel && dsn;
  if (tmp9) {
    const obj4 = { dsn: tmp2(12848).dsnToString(dsn) };
    tmp9 = obj4;
    const tmp2Result = tmp2(12848);
  }
  const merged1 = Object.assign(tmp9);
  beforeSendSpan = getDsn;
  if (getDsn) {
    beforeSendSpan = getDsn.getOptions().beforeSendSpan;
  }
  if (beforeSendSpan) {
    const fn2 = (arg0) => {
      const tmp3 = beforeSendSpan(spanTimeInputToSeconds.spanToJSON(arg0));
      if (!tmp3) {
        spanTimeInputToSeconds.showSpanDropWarning();
        const tmpResult = spanTimeInputToSeconds;
      }
      return tmp3;
    };
  } else {
    const fn = (arg0) => beforeSendSpan(dependencyMap[5]).spanToJSON(arg0);
  }
  arg0[Symbol.iterator]();
};
