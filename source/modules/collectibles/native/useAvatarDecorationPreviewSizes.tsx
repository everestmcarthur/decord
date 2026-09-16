// Module ID: 11234
// Function ID: 11235
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [1478, 8951, 2]
// Exports: useAvatarDecorationPreviewSizes

// Module 11234 (useAvatarDecorationPreviewSizes)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1478 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 8951 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
};
