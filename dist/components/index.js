'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icons = exports.LoadingSpinner = exports.Switch = exports.AppLogo = exports.ModalTitle = exports.ModalFooter = exports.Modal = exports.TimeRangeSlider = exports.RangeSlider = exports.FieldSelector = exports.ItemSelector = exports.FileUpload = exports.withState = exports.injector = exports.TimeWidgetFactory = exports.LoadDataModalFactory = exports.DataTableModalFactory = exports.DeleteDatasetModalFactory = exports.MapControlFactory = exports.MapPopoverFactory = exports.PanelHeaderFactory = exports.PlotContainerFactory = exports.ModalContainerFactory = exports.BottomWidgetFactory = exports.MapContainerFactory = exports.SidePanelFactory = exports.KeplerGlFactory = exports.injectComponents = exports.default = exports.KeplerGl = undefined;

var _container = require('./container');

Object.defineProperty(exports, 'KeplerGl', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_container).default;
  }
});
Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_container).default;
  }
});
Object.defineProperty(exports, 'injectComponents', {
  enumerable: true,
  get: function get() {
    return _container.injectComponents;
  }
});

var _keplerGl = require('./kepler-gl');

Object.defineProperty(exports, 'KeplerGlFactory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_keplerGl).default;
  }
});

var _sidePanel = require('./side-panel');

Object.defineProperty(exports, 'SidePanelFactory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sidePanel).default;
  }
});

var _mapContainer = require('./map-container');

Object.defineProperty(exports, 'MapContainerFactory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mapContainer).default;
  }
});

var _bottomWidget = require('./bottom-widget');

Object.defineProperty(exports, 'BottomWidgetFactory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_bottomWidget).default;
  }
});

var _modalContainer = require('./modal-container');

Object.defineProperty(exports, 'ModalContainerFactory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modalContainer).default;
  }
});

var _plotContainer = require('./plot-container');

Object.defineProperty(exports, 'PlotContainerFactory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_plotContainer).default;
  }
});

var _panelHeader = require('./side-panel/panel-header');

Object.defineProperty(exports, 'PanelHeaderFactory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_panelHeader).default;
  }
});

var _mapPopover = require('./map/map-popover');

Object.defineProperty(exports, 'MapPopoverFactory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mapPopover).default;
  }
});

var _mapControl = require('./map/map-control');

Object.defineProperty(exports, 'MapControlFactory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mapControl).default;
  }
});

var _deleteDataModal = require('./modals/delete-data-modal');

Object.defineProperty(exports, 'DeleteDatasetModalFactory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_deleteDataModal).default;
  }
});

var _dataTableModal = require('./modals/data-table-modal');

Object.defineProperty(exports, 'DataTableModalFactory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_dataTableModal).default;
  }
});

var _loadDataModal = require('./modals/load-data-modal');

Object.defineProperty(exports, 'LoadDataModalFactory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_loadDataModal).default;
  }
});

var _timeWidget = require('./filters/time-widget');

Object.defineProperty(exports, 'TimeWidgetFactory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_timeWidget).default;
  }
});

var _injector = require('./injector');

Object.defineProperty(exports, 'injector', {
  enumerable: true,
  get: function get() {
    return _injector.injector;
  }
});
Object.defineProperty(exports, 'withState', {
  enumerable: true,
  get: function get() {
    return _injector.withState;
  }
});

var _fileUpload = require('./common/file-uploader/file-upload');

Object.defineProperty(exports, 'FileUpload', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_fileUpload).default;
  }
});

var _itemSelector = require('./common/item-selector/item-selector');

Object.defineProperty(exports, 'ItemSelector', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_itemSelector).default;
  }
});

var _fieldSelector = require('./common/field-selector');

Object.defineProperty(exports, 'FieldSelector', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_fieldSelector).default;
  }
});

var _rangeSlider = require('./common/range-slider');

Object.defineProperty(exports, 'RangeSlider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_rangeSlider).default;
  }
});

var _timeRangeSlider = require('./common/time-range-slider');

Object.defineProperty(exports, 'TimeRangeSlider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_timeRangeSlider).default;
  }
});

var _modal = require('./common/modal');

Object.defineProperty(exports, 'Modal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modal).default;
  }
});
Object.defineProperty(exports, 'ModalFooter', {
  enumerable: true,
  get: function get() {
    return _modal.ModalFooter;
  }
});
Object.defineProperty(exports, 'ModalTitle', {
  enumerable: true,
  get: function get() {
    return _modal.ModalTitle;
  }
});

var _logo = require('./common/logo');

Object.defineProperty(exports, 'AppLogo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_logo).default;
  }
});

var _switch = require('./common/switch');

Object.defineProperty(exports, 'Switch', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_switch).default;
  }
});

var _loadingSpinner = require('./common/loading-spinner');

Object.defineProperty(exports, 'LoadingSpinner', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_loadingSpinner).default;
  }
});

var _styledComponents = require('./common/styled-components');

Object.keys(_styledComponents).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _styledComponents[key];
    }
  });
});

var _icons = require('./common/icons');

var _Icons = _interopRequireWildcard(_icons);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Icons = _Icons;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJpbmplY3RDb21wb25lbnRzIiwiaW5qZWN0b3IiLCJ3aXRoU3RhdGUiLCJNb2RhbEZvb3RlciIsIk1vZGFsVGl0bGUiLCJJY29ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OzhDQXFCUUEsTzs7Ozs7OzhDQUFxQkEsTzs7Ozs7O3NCQUFTQyxnQjs7Ozs7Ozs7OzZDQUc5QkQsTzs7Ozs7Ozs7OzhDQUNBQSxPOzs7Ozs7Ozs7aURBQ0FBLE87Ozs7Ozs7OztpREFDQUEsTzs7Ozs7Ozs7O21EQUNBQSxPOzs7Ozs7Ozs7a0RBQ0FBLE87Ozs7Ozs7OztnREFHQUEsTzs7Ozs7Ozs7OytDQUdBQSxPOzs7Ozs7Ozs7K0NBQ0FBLE87Ozs7Ozs7OztvREFHQUEsTzs7Ozs7Ozs7O21EQUNBQSxPOzs7Ozs7Ozs7a0RBQ0FBLE87Ozs7Ozs7OzsrQ0FHQUEsTzs7Ozs7Ozs7O3FCQUlORSxROzs7Ozs7cUJBQ0FDLFM7Ozs7Ozs7OzsrQ0FJTUgsTzs7Ozs7Ozs7O2lEQUNBQSxPOzs7Ozs7Ozs7a0RBQ0FBLE87Ozs7Ozs7OztnREFDQUEsTzs7Ozs7Ozs7O29EQUNBQSxPOzs7Ozs7Ozs7MENBQ0FBLE87Ozs7OztrQkFBa0JJLFc7Ozs7OztrQkFBYUMsVTs7Ozs7Ozs7O3lDQUMvQkwsTzs7Ozs7Ozs7OzJDQUNBQSxPOzs7Ozs7Ozs7bURBQ0FBLE87Ozs7OztBQUNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztRQUNZTSxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE4IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuLy8gQ29tcG9uZW50c1xuZXhwb3J0IHtkZWZhdWx0IGFzIEtlcGxlckdsLCBkZWZhdWx0LCBpbmplY3RDb21wb25lbnRzfSBmcm9tICcuL2NvbnRhaW5lcic7XG5cbi8vIGZhY3Rvcmllc1xuZXhwb3J0IHtkZWZhdWx0IGFzIEtlcGxlckdsRmFjdG9yeX0gZnJvbSAnLi9rZXBsZXItZ2wnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFNpZGVQYW5lbEZhY3Rvcnl9IGZyb20gJy4vc2lkZS1wYW5lbCc7XG5leHBvcnQge2RlZmF1bHQgYXMgTWFwQ29udGFpbmVyRmFjdG9yeX0gZnJvbSAnLi9tYXAtY29udGFpbmVyJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBCb3R0b21XaWRnZXRGYWN0b3J5fSBmcm9tICcuL2JvdHRvbS13aWRnZXQnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIE1vZGFsQ29udGFpbmVyRmFjdG9yeX0gZnJvbSAnLi9tb2RhbC1jb250YWluZXInO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFBsb3RDb250YWluZXJGYWN0b3J5fSBmcm9tICcuL3Bsb3QtY29udGFpbmVyJztcblxuLy8gLy8gc2lkZSBwYW5lbCBmYWN0b3JpZXNcbmV4cG9ydCB7ZGVmYXVsdCBhcyBQYW5lbEhlYWRlckZhY3Rvcnl9IGZyb20gJy4vc2lkZS1wYW5lbC9wYW5lbC1oZWFkZXInXG5cbi8vIC8vIG1hcCBjb250YWluZXIgZmFjdG9yaWVzXG5leHBvcnQge2RlZmF1bHQgYXMgTWFwUG9wb3ZlckZhY3Rvcnl9IGZyb20gJy4vbWFwL21hcC1wb3BvdmVyJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBNYXBDb250cm9sRmFjdG9yeX0gZnJvbSAnLi9tYXAvbWFwLWNvbnRyb2wnO1xuXG4vLyAvLyBtb2RhbCBjb250YWluZXIgZmFjdG9yaWVzXG5leHBvcnQge2RlZmF1bHQgYXMgRGVsZXRlRGF0YXNldE1vZGFsRmFjdG9yeX0gZnJvbSAnLi9tb2RhbHMvZGVsZXRlLWRhdGEtbW9kYWwnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIERhdGFUYWJsZU1vZGFsRmFjdG9yeX0gZnJvbSAnLi9tb2RhbHMvZGF0YS10YWJsZS1tb2RhbCc7XG5leHBvcnQge2RlZmF1bHQgYXMgTG9hZERhdGFNb2RhbEZhY3Rvcnl9IGZyb20gJy4vbW9kYWxzL2xvYWQtZGF0YS1tb2RhbCc7XG5cbi8vIC8vIEJvdHRvbSB3aWRnZXQgZmFjdG9yeVxuZXhwb3J0IHtkZWZhdWx0IGFzIFRpbWVXaWRnZXRGYWN0b3J5fSBmcm9tICcuL2ZpbHRlcnMvdGltZS13aWRnZXQnO1xuXG4vLyBJbmplY3RvclxuZXhwb3J0IHtcbiAgaW5qZWN0b3IgYXMgaW5qZWN0b3IsXG4gIHdpdGhTdGF0ZSBhcyB3aXRoU3RhdGVcbn0gZnJvbSAnLi9pbmplY3RvcidcblxuLy8gQ29tbW9uIENvbXBvbmVudHNcbmV4cG9ydCB7ZGVmYXVsdCBhcyBGaWxlVXBsb2FkfSBmcm9tICcuL2NvbW1vbi9maWxlLXVwbG9hZGVyL2ZpbGUtdXBsb2FkJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBJdGVtU2VsZWN0b3J9IGZyb20gJy4vY29tbW9uL2l0ZW0tc2VsZWN0b3IvaXRlbS1zZWxlY3Rvcic7XG5leHBvcnQge2RlZmF1bHQgYXMgRmllbGRTZWxlY3Rvcn0gZnJvbSAnLi9jb21tb24vZmllbGQtc2VsZWN0b3InO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFJhbmdlU2xpZGVyfSBmcm9tICcuL2NvbW1vbi9yYW5nZS1zbGlkZXInO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFRpbWVSYW5nZVNsaWRlcn0gZnJvbSAnLi9jb21tb24vdGltZS1yYW5nZS1zbGlkZXInO1xuZXhwb3J0IHtkZWZhdWx0IGFzIE1vZGFsLCBNb2RhbEZvb3RlciwgTW9kYWxUaXRsZX0gZnJvbSAnLi9jb21tb24vbW9kYWwnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEFwcExvZ299IGZyb20gJy4vY29tbW9uL2xvZ28nO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFN3aXRjaH0gZnJvbSAnLi9jb21tb24vc3dpdGNoJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBMb2FkaW5nU3Bpbm5lcn0gZnJvbSAnLi9jb21tb24vbG9hZGluZy1zcGlubmVyJztcbmV4cG9ydCAqIGZyb20gJy4vY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmV4cG9ydCAqIGFzIEljb25zIGZyb20gJy4vY29tbW9uL2ljb25zJztcbiJdfQ==