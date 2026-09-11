// Module ID: 5242
// Function ID: 5243
// Name: is7Z
// Dependencies: [5237, 5238]
// Exports: is7Z, isLZH, isRAR, isZIP

// Module 5242 (is7Z)
import _mod5237 from "module_5237" /* 5237 */;
import _mod5238 from "module_5238" /* 5238 */;

require = arg1;
const dependencyMap = arg6;

export const is7Z = function is7Z(fileChunk) {
  fileChunk = _mod5237.getFileChunk(fileChunk);
  const FileTypes = _mod5238.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
};
export const isLZH = function isLZH(fileChunk) {
  fileChunk = _mod5237.getFileChunk(fileChunk);
  const FileTypes = _mod5238.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
};
export const isRAR = function isRAR(fileChunk) {
  fileChunk = _mod5237.getFileChunk(fileChunk);
  const FileTypes = _mod5238.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rar");
};
export const isZIP = function isZIP(fileChunk, chunkSize) {
  let num;
  if (null != chunkSize) {
    num = chunkSize.chunkSize;
  }
  if (!num) {
    num = 64;
  }
  fileChunk = _mod5237.getFileChunk(fileChunk, num);
  const FileTypes = _mod5238.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
};
