// Module ID: 6924
// Function ID: 6925
// Dependencies: [6925, 6926, 6927, 6986, 6987, 6988, 6989, 6993, 6994, 6947, 6995, 6996, 6991, 6990, 6997, 6948, 6998]

// Module 6924
import ErrorMessages from "ErrorMessages" /* 6926 */;
import FlashList from "FlashList" /* 6927 */;
import _mod6947 from "module_6947" /* 6947 */;
import _mod6948 from "module_6948" /* 6948 */;
import _mod6986 from "module_6986" /* 6986 */;
import RenderTargetOptions from "RenderTargetOptions" /* 6987 */;
import _modDef6988 from "module_6988" /* 6988 */;
import _mod6989 from "module_6989" /* 6989 */;
import Cancellable from "Cancellable" /* 6990 */;
import JSFPSMonitor from "JSFPSMonitor" /* 6991 */;
import _mod6993 from "module_6993" /* 6993 */;
import runScrollBenchmark from "runScrollBenchmark" /* 6994 */;
import _mod6995 from "module_6995" /* 6995 */;
import _mod6996 from "module_6996" /* 6996 */;
import _modDef6997 from "module_6997" /* 6997 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 6998 */;
import get_ActivityIndicator from "module_6925" /* 6925 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6986.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef6988;
  exports.useBenchmark = _mod6989.useBenchmark;
  exports.BenchmarkParams = _mod6989.BenchmarkParams;
  exports.BenchmarkResult = _mod6989.BenchmarkResult;
  exports.useDataMultiplier = _mod6993.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6947.useLayoutState;
  exports.useRecyclingState = _mod6995.useRecyclingState;
  exports.useMappingHelper = _mod6996.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef6997;
  exports.useFlashListContext = _mod6948.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
