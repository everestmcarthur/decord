// Module ID: 12995
// Function ID: 12996
// Name: captureAggregateMetrics
// Dependencies: [12892, 12939, 12936, 12993]
// Exports: captureAggregateMetrics

// Module 12995 (captureAggregateMetrics)
import _mod12892 from "module_12892" /* 12892 */;
import _mod12936 from "module_12936" /* 12936 */;
import _mod12939 from "module_12939" /* 12939 */;
import _mod12993 from "module_12993" /* 12993 */;

require = arg1;
const dependencyMap = arg6;
function createMetricEnvelope(arg0, arg1, sdk, arg3) {
  const obj = { sent_at: new Date().toISOString() };
  if (sdk) {
    sdk = sdk.sdk;
  }
  if (sdk) {
    const obj2 = { name: sdk.sdk.name, version: sdk.sdk.version };
    obj.sdk = obj2;
  }
  let tmp = arg3;
  if (arg3) {
    tmp = arg1;
  }
  if (tmp) {
    obj.dsn = _mod12939.dsnToString(arg1);
  }
  const date = new Date();
  const result = _mod12993.serializeMetricBuckets(arg0);
  const items = [{ type: "statsd", length: result.length }, result];
  const obj3 = { type: "statsd", length: result.length };
  const items1 = [items];
  return _mod12936.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12892.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
