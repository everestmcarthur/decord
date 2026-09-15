// Module ID: 11220
// Function ID: 11221
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [1478, 8940, 2]
// Exports: useAvatarDecorationPreviewSizes

// Module 11220 (useAvatarDecorationPreviewSizes)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1478 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 8940 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
};
