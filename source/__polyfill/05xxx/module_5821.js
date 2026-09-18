// Module ID: 5821
// Function ID: 5822
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 5821

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
