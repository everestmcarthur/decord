// Module ID: 13313
// Function ID: 13314
// Name: maybeFetchContentInventoryOutbox
// Dependencies: [9032, 1091, 13314, 2]
// Exports: default

// Module 13313 (maybeFetchContentInventoryOutbox)
import DurationsDefault from "Durations" /* 1091 */;
import ContentInventoryHttpApi from "ContentInventoryHttpApi" /* 13314 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 9032 */;

require = fn;
const MINUTE = DurationsDefault.Millis.MINUTE;
const size = fn(2);
const result = size.fileFinishedImporting("modules/content_inventory/maybeFetchContentInventoryOutbox.tsx");

export default function maybeFetchContentInventoryOutbox(id, arg1) {
  if (!ContentInventoryOutboxStore.isFetchingUserOutbox(id)) {
    const userOutbox = ContentInventoryOutboxStore.getUserOutbox(id);
    let num;
    if (userOutbox != null) {
      num = userOutbox.lastFetched;
    }
    if (num == null) {
      num = 0;
    }
    const _Date = Date;
    if (Date.now() - num >= MINUTE) {
      return ContentInventoryHttpApi.getContentInventoryOutbox(id, arg1);
    }
  }
};
