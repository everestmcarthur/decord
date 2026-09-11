// Module ID: 6948
// Function ID: 6949
// Dependencies: [19]
// Exports: useFlashListContext, useRecyclerViewContext

// Module 6948
import noop from "module_19" /* 19 */;

const useContext = noop.useContext;
const context = noop.createContext(undefined);

export const RecyclerViewContextProvider = context.Provider;
export const useRecyclerViewContext = function useRecyclerViewContext() {
  return useContext(context);
};
export const useFlashListContext = function useFlashListContext() {
  return useContext(context);
};
