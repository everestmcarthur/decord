// Module ID: 5702
// Function ID: 5703
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 5702

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
