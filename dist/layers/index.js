'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayerClasses = exports.KeplerGlLayers = exports.Layer = undefined;

var _baseLayer = require('./base-layer');

Object.defineProperty(exports, 'Layer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_baseLayer).default;
  }
});

var _pointLayer = require('./point-layer/point-layer');

var _pointLayer2 = _interopRequireDefault(_pointLayer);

var _arcLayer = require('./arc-layer/arc-layer');

var _arcLayer2 = _interopRequireDefault(_arcLayer);

var _lineLayer = require('./line-layer/line-layer');

var _lineLayer2 = _interopRequireDefault(_lineLayer);

var _gridLayer = require('./grid-layer/grid-layer');

var _gridLayer2 = _interopRequireDefault(_gridLayer);

var _hexagonLayer = require('./hexagon-layer/hexagon-layer');

var _hexagonLayer2 = _interopRequireDefault(_hexagonLayer);

var _geojsonLayer = require('./geojson-layer/geojson-layer');

var _geojsonLayer2 = _interopRequireDefault(_geojsonLayer);

var _clusterLayer = require('./cluster-layer/cluster-layer');

var _clusterLayer2 = _interopRequireDefault(_clusterLayer);

var _iconLayer = require('./icon-layer/icon-layer');

var _iconLayer2 = _interopRequireDefault(_iconLayer);

var _heatmapLayer = require('./heatmap-layer/heatmap-layer');

var _heatmapLayer2 = _interopRequireDefault(_heatmapLayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// individual layers
var KeplerGlLayers = exports.KeplerGlLayers = {
  PointLayer: _pointLayer2.default,
  ArcLayer: _arcLayer2.default,
  LineLayer: _lineLayer2.default,
  GridLayer: _gridLayer2.default,
  HexagonLayer: _hexagonLayer2.default,
  GeojsonLayer: _geojsonLayer2.default,
  ClusterLayer: _clusterLayer2.default,
  IconLayer: _iconLayer2.default,
  HeatmapLayer: _heatmapLayer2.default
};

var LayerClasses = exports.LayerClasses = {
  point: _pointLayer2.default,
  arc: _arcLayer2.default,
  line: _lineLayer2.default,
  grid: _gridLayer2.default,
  hexagon: _hexagonLayer2.default,
  geojson: _geojsonLayer2.default,
  cluster: _clusterLayer2.default,
  icon: _iconLayer2.default,
  heatmap: _heatmapLayer2.default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXllcnMvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCIsIktlcGxlckdsTGF5ZXJzIiwiUG9pbnRMYXllciIsIkFyY0xheWVyIiwiTGluZUxheWVyIiwiR3JpZExheWVyIiwiSGV4YWdvbkxheWVyIiwiR2VvanNvbkxheWVyIiwiQ2x1c3RlckxheWVyIiwiSWNvbkxheWVyIiwiSGVhdG1hcExheWVyIiwiTGF5ZXJDbGFzc2VzIiwicG9pbnQiLCJhcmMiLCJsaW5lIiwiZ3JpZCIsImhleGFnb24iLCJnZW9qc29uIiwiY2x1c3RlciIsImljb24iLCJoZWF0bWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OENBK0JRQSxPOzs7O0FBWFI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFLQTtBQUNPLElBQU1DLDBDQUFpQjtBQUM1QkMsa0NBRDRCO0FBRTVCQyw4QkFGNEI7QUFHNUJDLGdDQUg0QjtBQUk1QkMsZ0NBSjRCO0FBSzVCQyxzQ0FMNEI7QUFNNUJDLHNDQU40QjtBQU81QkMsc0NBUDRCO0FBUTVCQyxnQ0FSNEI7QUFTNUJDO0FBVDRCLENBQXZCOztBQVlBLElBQU1DLHNDQUFlO0FBQzFCQyxTQUFPVixvQkFEbUI7QUFFMUJXLE9BQUtWLGtCQUZxQjtBQUcxQlcsUUFBTVYsbUJBSG9CO0FBSTFCVyxRQUFNVixtQkFKb0I7QUFLMUJXLFdBQVNWLHNCQUxpQjtBQU0xQlcsV0FBU1Ysc0JBTmlCO0FBTzFCVyxXQUFTVixzQkFQaUI7QUFRMUJXLFFBQU1WLG1CQVJvQjtBQVMxQlcsV0FBU1Y7QUFUaUIsQ0FBckIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTggVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge2RlZmF1bHQgYXMgUG9pbnRMYXllcn0gZnJvbSAnLi9wb2ludC1sYXllci9wb2ludC1sYXllcic7XG5pbXBvcnQge2RlZmF1bHQgYXMgQXJjTGF5ZXJ9IGZyb20gJy4vYXJjLWxheWVyL2FyYy1sYXllcic7XG5pbXBvcnQge2RlZmF1bHQgYXMgTGluZUxheWVyfSBmcm9tICcuL2xpbmUtbGF5ZXIvbGluZS1sYXllcic7XG5pbXBvcnQge2RlZmF1bHQgYXMgR3JpZExheWVyfSBmcm9tICcuL2dyaWQtbGF5ZXIvZ3JpZC1sYXllcic7XG5pbXBvcnQge2RlZmF1bHQgYXMgSGV4YWdvbkxheWVyfSBmcm9tICcuL2hleGFnb24tbGF5ZXIvaGV4YWdvbi1sYXllcic7XG5pbXBvcnQge2RlZmF1bHQgYXMgR2VvanNvbkxheWVyfSBmcm9tICcuL2dlb2pzb24tbGF5ZXIvZ2VvanNvbi1sYXllcic7XG5pbXBvcnQge2RlZmF1bHQgYXMgQ2x1c3RlckxheWVyfSBmcm9tICcuL2NsdXN0ZXItbGF5ZXIvY2x1c3Rlci1sYXllcic7XG5pbXBvcnQge2RlZmF1bHQgYXMgSWNvbkxheWVyfSBmcm9tICcuL2ljb24tbGF5ZXIvaWNvbi1sYXllcic7XG5pbXBvcnQge2RlZmF1bHQgYXMgSGVhdG1hcExheWVyfSBmcm9tICcuL2hlYXRtYXAtbGF5ZXIvaGVhdG1hcC1sYXllcic7XG5cbi8vIGJhc2UgbGF5ZXJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBMYXllcn0gZnJvbSAnLi9iYXNlLWxheWVyJztcblxuLy8gaW5kaXZpZHVhbCBsYXllcnNcbmV4cG9ydCBjb25zdCBLZXBsZXJHbExheWVycyA9IHtcbiAgUG9pbnRMYXllcixcbiAgQXJjTGF5ZXIsXG4gIExpbmVMYXllcixcbiAgR3JpZExheWVyLFxuICBIZXhhZ29uTGF5ZXIsXG4gIEdlb2pzb25MYXllcixcbiAgQ2x1c3RlckxheWVyLFxuICBJY29uTGF5ZXIsXG4gIEhlYXRtYXBMYXllclxufTtcblxuZXhwb3J0IGNvbnN0IExheWVyQ2xhc3NlcyA9IHtcbiAgcG9pbnQ6IFBvaW50TGF5ZXIsXG4gIGFyYzogQXJjTGF5ZXIsXG4gIGxpbmU6IExpbmVMYXllcixcbiAgZ3JpZDogR3JpZExheWVyLFxuICBoZXhhZ29uOiBIZXhhZ29uTGF5ZXIsXG4gIGdlb2pzb246IEdlb2pzb25MYXllcixcbiAgY2x1c3RlcjogQ2x1c3RlckxheWVyLFxuICBpY29uOiBJY29uTGF5ZXIsXG4gIGhlYXRtYXA6IEhlYXRtYXBMYXllclxufTtcbiJdfQ==