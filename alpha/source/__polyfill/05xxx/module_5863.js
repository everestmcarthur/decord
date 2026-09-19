// Module ID: 5863
// Function ID: 5864
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 5863

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
