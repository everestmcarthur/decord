// Module ID: 12904
// Function ID: 12905
// Name: captureAggregateMetrics
// Dependencies: [12801, 12848, 12845, 12902]
// Exports: captureAggregateMetrics

// Module 12904 (captureAggregateMetrics)
import _mod12801 from "module_12801" /* 12801 */;
import _mod12845 from "module_12845" /* 12845 */;
import _mod12848 from "module_12848" /* 12848 */;
import _mod12902 from "module_12902" /* 12902 */;

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
    obj.dsn = _mod12848.dsnToString(arg1);
  }
  const date = new Date();
  const result = _mod12902.serializeMetricBuckets(arg0);
  const items = [{ type: "statsd", length: result.length }, result];
  const obj3 = { type: "statsd", length: result.length };
  const items1 = [items];
  return _mod12845.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12801.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
