// Module ID: 12970
// Function ID: 12971
// Name: captureAggregateMetrics
// Dependencies: [12867, 12914, 12911, 12968]
// Exports: captureAggregateMetrics

// Module 12970 (captureAggregateMetrics)
import _mod12867 from "module_12867" /* 12867 */;
import _mod12911 from "module_12911" /* 12911 */;
import _mod12914 from "module_12914" /* 12914 */;
import _mod12968 from "module_12968" /* 12968 */;

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
    obj.dsn = _mod12914.dsnToString(arg1);
  }
  const date = new Date();
  const result = _mod12968.serializeMetricBuckets(arg0);
  const items = [{ type: "statsd", length: result.length }, result];
  const obj3 = { type: "statsd", length: result.length };
  const items1 = [items];
  return _mod12911.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12867.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
