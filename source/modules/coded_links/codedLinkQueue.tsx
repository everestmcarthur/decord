// Module ID: 17730
// Function ID: 17731
// Name: codedLinkQueue
// Dependencies: [3, 17731, 2]
// Exports: queueMessageLinkFetch

// Module 17730 (codedLinkQueue)
import LoggerDefault from "Logger" /* 3 */;
import _modDef17731 from "module_17731" /* 17731 */;

const logger = new LoggerDefault("codedLinkQueue");
const obj = new _modDef17731({ concurrency: 5, intervalCap: 10, interval: 2000 });
obj.on("add", () => {
  if (obj.size > 0) {
    logger.warn("Message link fetch queue backlog:", tmp.size);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/coded_links/codedLinkQueue.tsx");

export const queueMessageLinkFetch = function queueMessageLinkFetch(arg0) {
  obj.add(arg0);
};
