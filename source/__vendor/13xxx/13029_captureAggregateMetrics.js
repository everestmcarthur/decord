// Module ID: 13029
// Function ID: 13030
// Name: captureAggregateMetrics
// Dependencies: [12926, 12973, 12970, 13027]
// Exports: captureAggregateMetrics

// Module 13029 (captureAggregateMetrics)
import _mod12926 from "module_12926" /* 12926 */;
import _mod12970 from "module_12970" /* 12970 */;
import _mod12973 from "module_12973" /* 12973 */;
import _mod13027 from "module_13027" /* 13027 */;

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
    obj.dsn = _mod12973.dsnToString(arg1);
  }
  const date = new Date();
  const result = _mod13027.serializeMetricBuckets(arg0);
  const items = [{ type: "statsd", length: result.length }, result];
  const obj3 = { type: "statsd", length: result.length };
  const items1 = [items];
  return _mod12970.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12926.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
