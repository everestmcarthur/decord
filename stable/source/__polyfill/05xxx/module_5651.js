// Module ID: 5651
// Function ID: 5652
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 5651

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
