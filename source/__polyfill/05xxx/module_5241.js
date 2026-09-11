// Module ID: 5241
// Function ID: 5242
// Dependencies: [5237, 5238]
// Exports: isAAC, isAMR, isFLAC, isM4A, isMP3, isWAV

// Module 5241
import _mod5237 from "module_5237" /* 5237 */;
import _mod5238 from "module_5238" /* 5238 */;

require = arg1;
const dependencyMap = arg6;

export const isAAC = function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod5237.getFileChunk(fileChunk);
  const FileTypes = _mod5238.FileTypes;
  let checkByFileTypeResult1 = FileTypes.checkByFileType(fileChunk, "aac");
  if (!checkByFileTypeResult1) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let checkByFileTypeResult = !excludeSimilarTypes;
    if (!excludeSimilarTypes) {
      const fileChunk1 = tmp(5237).getFileChunk(fileChunk);
      const FileTypes2 = tmp(5238).FileTypes;
      checkByFileTypeResult = FileTypes2.checkByFileType(fileChunk1, "m4a");
    }
    checkByFileTypeResult1 = checkByFileTypeResult;
  }
  return checkByFileTypeResult1;
};
export const isAMR = function isAMR(fileChunk) {
  fileChunk = _mod5237.getFileChunk(fileChunk);
  const FileTypes = _mod5238.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
};
export const isFLAC = function isFLAC(fileChunk) {
  fileChunk = _mod5237.getFileChunk(fileChunk);
  const FileTypes = _mod5238.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
};
export const isM4A = function isM4A(fileChunk) {
  fileChunk = _mod5237.getFileChunk(fileChunk);
  const FileTypes = _mod5238.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
};
export const isMP3 = function isMP3(fileChunk) {
  fileChunk = _mod5237.getFileChunk(fileChunk);
  const FileTypes = _mod5238.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
};
export const isWAV = function isWAV(fileChunk) {
  fileChunk = _mod5237.getFileChunk(fileChunk);
  const FileTypes = _mod5238.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
};
