// Module ID: 6937
// Function ID: 6938
// Name: RenderTimeTracker
// Dependencies: [6938, 6939, 6943, 6944]

// Module 6937 (RenderTimeTracker)
import _modDef6939 from "module_6939" /* 6939 */;
import _classCallCheck from "module_6938" /* 6938 */;

const RenderTimeTracker = arg1;
class RenderTimeTracker {
  constructor() {
    tmp = c2(this, RenderTimeTracker);
    averageWindow = new closure_0(closure_1[2]).AverageWindow(5);
    this.renderTimeAvgWindow = averageWindow;
    this.lastTimerStartedAt = -1;
    this.maxRenderTime = 32;
    this.defaultRenderTime = 16;
    this.rendersWithoutCommit = 0;
    this.maxRendersWithoutCommit = 40;
    return;
  }
}
const entry = {
  key: "startTracking",
  value: function startTracking() {
    const self = this;
    this.rendersWithoutCommit = this.rendersWithoutCommit + 1;
    let trackAverageRenderTimeForOffsetProjection = RenderTimeTracker(6944).PlatformConfig.trackAverageRenderTimeForOffsetProjection;
    if (trackAverageRenderTimeForOffsetProjection) {
      trackAverageRenderTimeForOffsetProjection = -1 === self.lastTimerStartedAt;
    }
    if (trackAverageRenderTimeForOffsetProjection) {
      const _Date = Date;
      self.lastTimerStartedAt = Date.now();
    }
  }
};
const items = [
  entry,
  {
    key: "markRenderComplete",
    value: function markRenderComplete() {
      const self = this;
      this.rendersWithoutCommit = 0;
      let trackAverageRenderTimeForOffsetProjection = RenderTimeTracker(6944).PlatformConfig.trackAverageRenderTimeForOffsetProjection;
      if (trackAverageRenderTimeForOffsetProjection) {
        trackAverageRenderTimeForOffsetProjection = -1 !== self.lastTimerStartedAt;
      }
      if (trackAverageRenderTimeForOffsetProjection) {
        const renderTimeAvgWindow = self.renderTimeAvgWindow;
        const _Date = Date;
        renderTimeAvgWindow.addValue(Date.now() - self.lastTimerStartedAt);
        self.lastTimerStartedAt = -1;
      }
    }
  },
  {
    key: "hasExceededMaxRendersWithoutCommit",
    value: function hasExceededMaxRendersWithoutCommit() {
      return this.rendersWithoutCommit >= this.maxRendersWithoutCommit;
    }
  },
  {
    key: "getRawValue",
    value: function getRawValue() {
      return this.renderTimeAvgWindow.currentValue;
    }
  },
  {
    key: "getAverageRenderTime",
    value: function getAverageRenderTime() {
      const self = this;
      if (RenderTimeTracker(6944).PlatformConfig.trackAverageRenderTimeForOffsetProjection) {
        const _Math = Math;
        const _Math2 = Math;
        const _Math3 = Math;
        let defaultRenderTime = Math.min(self.maxRenderTime, Math.max(Math.round(self.renderTimeAvgWindow.currentValue), 16));
      } else {
        defaultRenderTime = self.defaultRenderTime;
      }
      return defaultRenderTime;
    }
  }
];

export const RenderTimeTracker = _modDef6939(RenderTimeTracker, items);
