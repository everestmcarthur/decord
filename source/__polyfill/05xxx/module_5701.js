// Module ID: 5701
// Function ID: 5702
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 5701

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
