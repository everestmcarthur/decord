// Module ID: 5665
// Function ID: 5666
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 5665

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
