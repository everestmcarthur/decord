// Module ID: 11185
// Function ID: 11186
// Name: CollectiblePreviewSession
// Dependencies: [2]
// Exports: commitCollectiblePreview, currentPreviewGeneration

// Module 11185 (CollectiblePreviewSession)
import size from "module_2" /* 2 */;

let closure_0 = 0;
const result = size.fileFinishedImporting("modules/collectibles/CollectiblePreviewSession.tsx");

export function currentPreviewGeneration() {
  return closure_0;
}
export function commitCollectiblePreview() {
  closure_0 = closure_0 + 1;
}
