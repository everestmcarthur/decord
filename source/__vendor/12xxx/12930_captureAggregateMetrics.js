// Module ID: 12930
// Function ID: 12931
// Name: captureAggregateMetrics
// Dependencies: [12827, 12874, 12871, 12928]
// Exports: captureAggregateMetrics

// Module 12930 (captureAggregateMetrics)
import _mod12827 from "module_12827" /* 12827 */;
import _mod12871 from "module_12871" /* 12871 */;
import _mod12874 from "module_12874" /* 12874 */;
import _mod12928 from "module_12928" /* 12928 */;

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
    obj.dsn = _mod12874.dsnToString(arg1);
  }
  const date = new Date();
  const result = _mod12928.serializeMetricBuckets(arg0);
  const items = [{ type: "statsd", length: result.length }, result];
  const obj3 = { type: "statsd", length: result.length };
  const items1 = [items];
  return _mod12871.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12827.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
