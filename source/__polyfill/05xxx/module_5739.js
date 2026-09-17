// Module ID: 5739
// Function ID: 5740
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 5739

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
