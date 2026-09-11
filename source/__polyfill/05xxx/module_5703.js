// Module ID: 5703
// Function ID: 5704
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 5703

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
