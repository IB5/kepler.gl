'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCustomMapStyleUpdater = exports.inputMapStyleUpdater = exports.loadCustomMapStyleUpdater = exports.resetMapConfigMapStyleUpdater = exports.receiveMapConfigUpdater = exports.loadMapStyleErrUpdater = exports.loadMapStylesUpdater = exports.mapStyleChangeUpdater = exports.mapConfigChangeUpdater = exports.initMapStyleUpdater = exports.INITIAL_MAP_STYLE = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends6 = require('babel-runtime/helpers/extends');

var _extends7 = _interopRequireDefault(_extends6);

exports.getInitialInputStyle = getInitialInputStyle;

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _reactPalm = require('react-palm');

var _mapboxGlStyleEditor = require('../utils/map-style-utils/mapbox-gl-style-editor');

var _defaultSettings = require('../constants/default-settings');

var _utils = require('../utils/utils');

var _tasks = require('../tasks/tasks');

var _mapStyleActions = require('../actions/map-style-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getDefaultState = function getDefaultState() {
  var visibleLayerGroups = {};
  var styleType = 'dark';
  var topLayerGroups = {};

  return {
    styleType: styleType,
    visibleLayerGroups: visibleLayerGroups,
    topLayerGroups: topLayerGroups,
    mapStyles: _defaultSettings.DEFAULT_MAP_STYLES.reduce(function (accu, curr) {
      return (0, _extends7.default)({}, accu, (0, _defineProperty3.default)({}, curr.id, curr));
    }, {}),
    // save mapbox access token
    mapboxApiAccessToken: null,
    inputStyle: getInitialInputStyle()
  };
};

// Utils
// Copyright (c) 2018 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var INITIAL_MAP_STYLE = exports.INITIAL_MAP_STYLE = getDefaultState();

/**
 * Create two map styles from preset map style, one for top map one for bottom
 *
 * @param {string} styleType - current map style
 * @param {object} visibleLayerGroups - visible layers of bottom map
 * @param {object} topLayerGroups - visible layers of top map
 * @param {object} mapStyles - a dictionary of all map styles
 * @returns {object} bottomMapStyle | topMapStyle | isRaster
 */
function getMapStyles(_ref) {
  var styleType = _ref.styleType,
      visibleLayerGroups = _ref.visibleLayerGroups,
      topLayerGroups = _ref.topLayerGroups,
      mapStyles = _ref.mapStyles;

  var mapStyle = mapStyles[styleType];

  // style might not be loaded yet
  if (!mapStyle || !mapStyle.style) {
    return {};
  }

  var editable = Object.keys(visibleLayerGroups).length;

  var bottomMapStyle = !editable ? _immutable2.default.fromJS(mapStyle.style) : (0, _mapboxGlStyleEditor.editBottomMapStyle)({
    id: styleType,
    mapStyle: mapStyle,
    visibleLayerGroups: visibleLayerGroups
  });

  var hasTopLayer = editable && Object.values(topLayerGroups).some(function (v) {
    return v;
  });

  // mute top layer if not visible in bottom layer
  var topLayers = hasTopLayer && Object.keys(topLayerGroups).reduce(function (accu, key) {
    return (0, _extends7.default)({}, accu, (0, _defineProperty3.default)({}, key, topLayerGroups[key] && visibleLayerGroups[key]));
  }, {});

  var topMapStyle = hasTopLayer ? (0, _mapboxGlStyleEditor.editTopMapStyle)({
    id: styleType,
    mapStyle: mapStyle,
    visibleLayerGroups: topLayers
  }) : null;

  return { bottomMapStyle: bottomMapStyle, topMapStyle: topMapStyle, editable: editable };
}

function getLayerGroupsFromStyle(style) {
  return _defaultSettings.DEFAULT_LAYER_GROUPS.filter(function (lg) {
    return style.layers.filter(lg.filter).length;
  });
}

// Updaters
var initMapStyleUpdater = exports.initMapStyleUpdater = function initMapStyleUpdater(state, action) {
  return (0, _extends7.default)({}, state, {
    // save mapbox access token to map style state
    mapboxApiAccessToken: (action.payload || {}).mapboxApiAccessToken
  });
};

var mapConfigChangeUpdater = exports.mapConfigChangeUpdater = function mapConfigChangeUpdater(state, action) {
  return (0, _extends7.default)({}, state, action.payload, getMapStyles((0, _extends7.default)({}, state, action.payload)));
};

var mapStyleChangeUpdater = exports.mapStyleChangeUpdater = function mapStyleChangeUpdater(state, _ref2) {
  var styleType = _ref2.payload;

  if (!state.mapStyles[styleType]) {
    // we might not have received the style yet
    return state;
  }
  var defaultLGVisibility = (0, _mapboxGlStyleEditor.getDefaultLayerGroupVisibility)(state.mapStyles[styleType]);

  var visibleLayerGroups = (0, _mapboxGlStyleEditor.mergeLayerGroupVisibility)(defaultLGVisibility, state.visibleLayerGroups);

  return (0, _extends7.default)({}, state, {
    styleType: styleType,
    visibleLayerGroups: visibleLayerGroups
  }, getMapStyles((0, _extends7.default)({}, state, {
    visibleLayerGroups: visibleLayerGroups,
    styleType: styleType
  })));
};

var loadMapStylesUpdater = exports.loadMapStylesUpdater = function loadMapStylesUpdater(state, action) {
  var newStyles = action.payload;

  // add new styles to state
  var newState = (0, _extends7.default)({}, state, {
    mapStyles: (0, _extends7.default)({}, state.mapStyles, newStyles)
  });

  return newStyles[state.styleType] ? mapStyleChangeUpdater(newState, { payload: state.styleType }) : newState;
};

// do nothing for now, if didn't load, skip it
var loadMapStyleErrUpdater = exports.loadMapStyleErrUpdater = function loadMapStyleErrUpdater(state, action) {
  return state;
};
var receiveMapConfigUpdater = exports.receiveMapConfigUpdater = function receiveMapConfigUpdater(state, _ref3) {
  var mapStyle = _ref3.payload.mapStyle;

  if (!mapStyle) {
    return state;
  }

  // if saved custom mapStyles load the style object
  var loadMapStyleTasks = mapStyle.mapStyles ? [_reactPalm.Task.all(Object.values(mapStyle.mapStyles).map(function (_ref4) {
    var id = _ref4.id,
        url = _ref4.url,
        accessToken = _ref4.accessToken;
    return {
      id: id, url: (0, _mapboxGlStyleEditor.getStyleDownloadUrl)(url, accessToken || state.mapboxApiAccessToken)
    };
  }).map(_tasks.LOAD_MAP_STYLE_TASK)).bimap(
  // success
  function (results) {
    return (0, _mapStyleActions.loadMapStyles)(results.reduce(function (accu, _ref5) {
      var id = _ref5.id,
          style = _ref5.style;
      return (0, _extends7.default)({}, accu, (0, _defineProperty3.default)({}, id, (0, _extends7.default)({}, mapStyle.mapStyles[id], {
        layerGroups: getLayerGroupsFromStyle(style),
        style: style
      })));
    }, {}));
  },
  // error
  function (error) {
    return (0, _mapStyleActions.loadMapStyleErr)(error);
  })] : null;

  var newState = mapConfigChangeUpdater(state, { payload: mapStyle });

  return loadMapStyleTasks ? (0, _reactPalm.withTask)(newState, loadMapStyleTasks) : newState;
};

var resetMapConfigMapStyleUpdater = exports.resetMapConfigMapStyleUpdater = function resetMapConfigMapStyleUpdater(state) {
  var emptyConfig = (0, _extends7.default)({}, INITIAL_MAP_STYLE, {
    mapboxApiAccessToken: state.mapboxApiAccessToken
  }, state.initialState, {
    mapStyles: state.mapStyles,
    initialState: state.initialState
  });

  return mapStyleChangeUpdater(emptyConfig, { payload: emptyConfig.styleType });
};

var loadCustomMapStyleUpdater = exports.loadCustomMapStyleUpdater = function loadCustomMapStyleUpdater(state, _ref6) {
  var _ref6$payload = _ref6.payload,
      icon = _ref6$payload.icon,
      style = _ref6$payload.style,
      error = _ref6$payload.error;
  return (0, _extends7.default)({}, state, {
    inputStyle: (0, _extends7.default)({}, state.inputStyle, style ? {
      id: style.id || (0, _utils.generateHashId)(),
      // make a copy of the style object
      style: JSON.parse(JSON.stringify(style)),
      label: style.name,
      // gathering layer group info from style json
      layerGroups: getLayerGroupsFromStyle(style)
    } : {}, icon ? { icon: icon } : {}, error !== undefined ? { error: error } : {})
  });
};

var inputMapStyleUpdater = exports.inputMapStyleUpdater = function inputMapStyleUpdater(state, _ref7) {
  var inputStyle = _ref7.payload;
  return (0, _extends7.default)({}, state, {
    inputStyle: (0, _extends7.default)({}, inputStyle, {
      isValid: (0, _mapboxGlStyleEditor.isValidStyleUrl)(inputStyle.url)
    })
  });
};

var addCustomMapStyleUpdater = exports.addCustomMapStyleUpdater = function addCustomMapStyleUpdater(state, action) {
  var styleId = state.inputStyle.id;
  var newState = (0, _extends7.default)({}, state, {
    mapStyles: (0, _extends7.default)({}, state.mapStyles, (0, _defineProperty3.default)({}, styleId, state.inputStyle)),
    // set to default
    inputStyle: getInitialInputStyle()
  });
  // set new style
  return mapStyleChangeUpdater(newState, { payload: styleId });
};

function getInitialInputStyle() {
  return {
    accessToken: null,
    error: false,
    isValid: false,
    label: null,
    style: null,
    url: null,
    custom: true
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9tYXAtc3R5bGUtdXBkYXRlcnMuanMiXSwibmFtZXMiOlsiZ2V0SW5pdGlhbElucHV0U3R5bGUiLCJnZXREZWZhdWx0U3RhdGUiLCJ2aXNpYmxlTGF5ZXJHcm91cHMiLCJzdHlsZVR5cGUiLCJ0b3BMYXllckdyb3VwcyIsIm1hcFN0eWxlcyIsIkRFRkFVTFRfTUFQX1NUWUxFUyIsInJlZHVjZSIsImFjY3UiLCJjdXJyIiwiaWQiLCJtYXBib3hBcGlBY2Nlc3NUb2tlbiIsImlucHV0U3R5bGUiLCJJTklUSUFMX01BUF9TVFlMRSIsImdldE1hcFN0eWxlcyIsIm1hcFN0eWxlIiwic3R5bGUiLCJlZGl0YWJsZSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJib3R0b21NYXBTdHlsZSIsIkltbXV0YWJsZSIsImZyb21KUyIsImhhc1RvcExheWVyIiwidmFsdWVzIiwic29tZSIsInYiLCJ0b3BMYXllcnMiLCJrZXkiLCJ0b3BNYXBTdHlsZSIsImdldExheWVyR3JvdXBzRnJvbVN0eWxlIiwiREVGQVVMVF9MQVlFUl9HUk9VUFMiLCJmaWx0ZXIiLCJsYXllcnMiLCJsZyIsImluaXRNYXBTdHlsZVVwZGF0ZXIiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJtYXBDb25maWdDaGFuZ2VVcGRhdGVyIiwibWFwU3R5bGVDaGFuZ2VVcGRhdGVyIiwiZGVmYXVsdExHVmlzaWJpbGl0eSIsImxvYWRNYXBTdHlsZXNVcGRhdGVyIiwibmV3U3R5bGVzIiwibmV3U3RhdGUiLCJsb2FkTWFwU3R5bGVFcnJVcGRhdGVyIiwicmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIiLCJsb2FkTWFwU3R5bGVUYXNrcyIsIlRhc2siLCJhbGwiLCJtYXAiLCJ1cmwiLCJhY2Nlc3NUb2tlbiIsIkxPQURfTUFQX1NUWUxFX1RBU0siLCJiaW1hcCIsInJlc3VsdHMiLCJsYXllckdyb3VwcyIsImVycm9yIiwicmVzZXRNYXBDb25maWdNYXBTdHlsZVVwZGF0ZXIiLCJlbXB0eUNvbmZpZyIsImluaXRpYWxTdGF0ZSIsImxvYWRDdXN0b21NYXBTdHlsZVVwZGF0ZXIiLCJpY29uIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwibGFiZWwiLCJuYW1lIiwidW5kZWZpbmVkIiwiaW5wdXRNYXBTdHlsZVVwZGF0ZXIiLCJpc1ZhbGlkIiwiYWRkQ3VzdG9tTWFwU3R5bGVVcGRhdGVyIiwic3R5bGVJZCIsImN1c3RvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O1FBNlFnQkEsb0IsR0FBQUEsb0I7O0FBelBoQjs7OztBQUNBOztBQUdBOztBQVFBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLE1BQU1DLHFCQUFxQixFQUEzQjtBQUNBLE1BQU1DLFlBQVksTUFBbEI7QUFDQSxNQUFNQyxpQkFBaUIsRUFBdkI7O0FBRUEsU0FBTztBQUNMRCx3QkFESztBQUVMRCwwQ0FGSztBQUdMRSxrQ0FISztBQUlMQyxlQUFXQyxvQ0FBbUJDLE1BQW5CLENBQTBCLFVBQUNDLElBQUQsRUFBT0MsSUFBUDtBQUFBLHdDQUNoQ0QsSUFEZ0Msb0NBRWxDQyxLQUFLQyxFQUY2QixFQUV4QkQsSUFGd0I7QUFBQSxLQUExQixFQUdQLEVBSE8sQ0FKTjtBQVFMO0FBQ0FFLDBCQUFzQixJQVRqQjtBQVVMQyxnQkFBWVo7QUFWUCxHQUFQO0FBWUQsQ0FqQkQ7O0FBZEE7QUF2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBc0NPLElBQU1hLGdEQUFvQlosaUJBQTFCOztBQUVQOzs7Ozs7Ozs7QUFTQSxTQUFTYSxZQUFULE9BS0c7QUFBQSxNQUpEWCxTQUlDLFFBSkRBLFNBSUM7QUFBQSxNQUhERCxrQkFHQyxRQUhEQSxrQkFHQztBQUFBLE1BRkRFLGNBRUMsUUFGREEsY0FFQztBQUFBLE1BRERDLFNB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Q0FYLG1CQUFhMUIsd0JBQXdCZixLQUF4QjtBQU5ILEtBQVIsR0FPQSxFQVZOLEVBV00rQyxPQUFPLEVBQUNBLFVBQUQsRUFBUCxHQUFnQixFQVh0QixFQVlNTCxVQUFVVyxTQUFWLEdBQXNCLEVBQUNYLFlBQUQsRUFBdEIsR0FBZ0MsRUFadEM7QUFGdUM7QUFBQSxDQUFsQzs7QUFrQkEsSUFBTVksc0RBQXVCLFNBQXZCQSxvQkFBdUIsQ0FBQ2pDLEtBQUQ7QUFBQSxNQUFrQnpCLFVBQWxCLFNBQVMyQixPQUFUO0FBQUEsb0NBQy9CRixLQUQrQjtBQUVsQ3pCLDJDQUNLQSxVQURMO0FBRUUyRCxlQUFTLDBDQUFnQjNELFdBQVd3QyxHQUEzQjtBQUZYO0FBRmtDO0FBQUEsQ0FBN0I7O0FBUUEsSUFBTW9CLDhEQUEyQixTQUEzQkEsd0JBQTJCLENBQUNuQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDekQsTUFBTW1DLFVBQVVwQyxNQUFNekIsVUFBTixDQUFpQkYsRUFBakM7QUFDQSxNQUFNbUMsc0NBQ0RSLEtBREM7QUFFSmhDLDBDQUNLZ0MsTUFBTWhDLFNBRFgsb0NBRUdvRSxPQUZILEVBRWFwQyxNQUFNekIsVUFGbkIsRUFGSTtBQU1KO0FBQ0FBLGdCQUFZWjtBQVBSLElBQU47QUFTQTtBQUNBLFNBQU95QyxzQkFBc0JJLFFBQXRCLEVBQWdDLEVBQUNOLFNBQVNrQyxPQUFWLEVBQWhDLENBQVA7QUFDRCxDQWJNOztBQWVBLFNBQVN6RSxvQkFBVCxHQUFnQztBQUNyQyxTQUFPO0FBQ0xxRCxpQkFBYSxJQURSO0FBRUxLLFdBQU8sS0FGRjtBQUdMYSxhQUFTLEtBSEo7QUFJTEosV0FBTyxJQUpGO0FBS0xuRCxXQUFPLElBTEY7QUFNTG9DLFNBQUssSUFOQTtBQU9Mc0IsWUFBUTtBQVBILEdBQVA7QUFTRCIsImZpbGUiOiJtYXAtc3R5bGUtdXBkYXRlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTggVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQge1Rhc2ssIHdpdGhUYXNrfSBmcm9tICdyZWFjdC1wYWxtJztcblxuLy8gVXRpbHNcbmltcG9ydCB7XG4gIGdldERlZmF1bHRMYXllckdyb3VwVmlzaWJpbGl0eSxcbiAgaXNWYWxpZFN0eWxlVXJsLFxuICBnZXRTdHlsZURvd25sb2FkVXJsLFxuICBtZXJnZUxheWVyR3JvdXBWaXNpYmlsaXR5LFxuICBlZGl0VG9wTWFwU3R5bGUsXG4gIGVkaXRCb3R0b21NYXBTdHlsZVxufSBmcm9tICd1dGlscy9tYXAtc3R5bGUtdXRpbHMvbWFwYm94LWdsLXN0eWxlLWVkaXRvcic7XG5pbXBvcnQge0RFRkFVTFRfTUFQX1NUWUxFUywgREVGQVVMVF9MQVlFUl9HUk9VUFN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCB7Z2VuZXJhdGVIYXNoSWR9IGZyb20gJ3V0aWxzL3V0aWxzJztcbmltcG9ydCB7TE9BRF9NQVBfU1RZTEVfVEFTS30gZnJvbSAndGFza3MvdGFza3MnO1xuaW1wb3J0IHtsb2FkTWFwU3R5bGVzLCBsb2FkTWFwU3R5bGVFcnJ9IGZyb20gJ2FjdGlvbnMvbWFwLXN0eWxlLWFjdGlvbnMnO1xuXG5jb25zdCBnZXREZWZhdWx0U3RhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IHZpc2libGVMYXllckdyb3VwcyA9IHt9O1xuICBjb25zdCBzdHlsZVR5cGUgPSAnZGFyayc7XG4gIGNvbnN0IHRvcExheWVyR3JvdXBzID0ge307XG5cbiAgcmV0dXJuIHtcbiAgICBzdHlsZVR5cGUsXG4gICAgdmlzaWJsZUxheWVyR3JvdXBzLFxuICAgIHRvcExheWVyR3JvdXBzLFxuICAgIG1hcFN0eWxlczogREVGQVVMVF9NQVBfU1RZTEVTLnJlZHVjZSgoYWNjdSwgY3VycikgPT4gKHtcbiAgICAgIC4uLmFjY3UsXG4gICAgICBbY3Vyci5pZF06IGN1cnJcbiAgICB9KSwge30pLFxuICAgIC8vIHNhdmUgbWFwYm94IGFjY2VzcyB0b2tlblxuICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuOiBudWxsLFxuICAgIGlucHV0U3R5bGU6IGdldEluaXRpYWxJbnB1dFN0eWxlKClcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBJTklUSUFMX01BUF9TVFlMRSA9IGdldERlZmF1bHRTdGF0ZSgpO1xuXG4vKipcbiAqIENyZWF0ZSB0d28gbWFwIHN0eWxlcyBmcm9tIHByZXNldCBtYXAgc3R5bGUsIG9uZSBmb3IgdG9wIG1hcCBvbmUgZm9yIGJvdHRvbVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHlsZVR5cGUgLSBjdXJyZW50IG1hcCBzdHlsZVxuICogQHBhcmFtIHtvYmplY3R9IHZpc2libGVMYXllckdyb3VwcyAtIHZpc2libGUgbGF5ZXJzIG9mIGJvdHRvbSBtYXBcbiAqIEBwYXJhbSB7b2JqZWN0fSB0b3BMYXllckdyb3VwcyAtIHZpc2libGUgbGF5ZXJzIG9mIHRvcCBtYXBcbiAqIEBwYXJhbSB7b2JqZWN0fSBtYXBTdHlsZXMgLSBhIGRpY3Rpb25hcnkgb2YgYWxsIG1hcCBzdHlsZXNcbiAqIEByZXR1cm5zIHtvYmplY3R9IGJvdHRvbU1hcFN0eWxlIHwgdG9wTWFwU3R5bGUgfCBpc1Jhc3RlclxuICovXG5mdW5jdGlvbiBnZXRNYXBTdHlsZXMoe1xuICBzdHlsZVR5cGUsXG4gIHZpc2libGVMYXllckdyb3VwcyxcbiAgdG9wTGF5ZXJHcm91cHMsXG4gIG1hcFN0eWxlc1xufSkge1xuICBjb25zdCBtYXBTdHlsZSA9IG1hcFN0eWxlc1tzdHlsZVR5cGVdO1xuXG4gIC8vIHN0eWxlIG1pZ2h0IG5vdCBiZSBsb2FkZWQgeWV0XG4gIGlmICghbWFwU3R5bGUgfHwgIW1hcFN0eWxlLnN0eWxlKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgY29uc3QgZWRpdGFibGUgPSBPYmplY3Qua2V5cyh2aXNpYmxlTGF5ZXJHcm91cHMpLmxlbmd0aDtcblxuICBjb25zdCBib3R0b21NYXBTdHlsZSA9ICFlZGl0YWJsZVxuICAgID8gSW1tdXRhYmxlLmZyb21KUyhtYXBTdHlsZS5zdHlsZSlcbiAgICA6IGVkaXRCb3R0b21NYXBTdHlsZSh7XG4gICAgICAgIGlkOiBzdHlsZVR5cGUsXG4gICAgICAgIG1hcFN0eWxlLFxuICAgICAgICB2aXNpYmxlTGF5ZXJHcm91cHNcbiAgICAgIH0pO1xuXG4gIGNvbnN0IGhhc1RvcExheWVyID0gZWRpdGFibGUgJiYgT2JqZWN0LnZhbHVlcyh0b3BMYXllckdyb3Vwcykuc29tZSh2ID0+IHYpO1xuXG4gIC8vIG11dGUgdG9wIGxheWVyIGlmIG5vdCB2aXNpYmxlIGluIGJvdHRvbSBsYXllclxuICBjb25zdCB0b3BMYXllcnMgPVxuICAgIGhhc1RvcExheWVyICYmXG4gICAgT2JqZWN0LmtleXModG9wTGF5ZXJHcm91cHMpLnJlZHVjZShcbiAgICAgIChhY2N1LCBrZXkpID0+ICh7XG4gICAgICAgIC4uLmFjY3UsXG4gICAgICAgIFtrZXldOiB0b3BMYXllckdyb3Vwc1trZXldICYmIHZpc2libGVMYXllckdyb3Vwc1trZXldXG4gICAgICB9KSxcbiAgICAgIHt9XG4gICAgKTtcblxuICBjb25zdCB0b3BNYXBTdHlsZSA9IGhhc1RvcExheWVyXG4gICAgPyBlZGl0VG9wTWFwU3R5bGUoe1xuICAgICAgICBpZDogc3R5bGVUeXBlLFxuICAgICAgICBtYXBTdHlsZSxcbiAgICAgICAgdmlzaWJsZUxheWVyR3JvdXBzOiB0b3BMYXllcnNcbiAgICAgIH0pXG4gICAgOiBudWxsO1xuXG4gIHJldHVybiB7Ym90dG9tTWFwU3R5bGUsIHRvcE1hcFN0eWxlLCBlZGl0YWJsZX07XG59XG5cbmZ1bmN0aW9uIGdldExheWVyR3JvdXBzRnJvbVN0eWxlKHN0eWxlKSB7XG4gIHJldHVybiBERUZBVUxUX0xBWUVSX0dST1VQUy5maWx0ZXIobGcgPT4gc3R5bGUubGF5ZXJzLmZpbHRlcihsZy5maWx0ZXIpLmxlbmd0aCk7XG59XG5cbi8vIFVwZGF0ZXJzXG5leHBvcnQgY29uc3QgaW5pdE1hcFN0eWxlVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgLy8gc2F2ZSBtYXBib3ggYWNjZXNzIHRva2VuIHRvIG1hcCBzdHlsZSBzdGF0ZVxuICBtYXBib3hBcGlBY2Nlc3NUb2tlbjogKGFjdGlvbi5wYXlsb2FkIHx8IHt9KS5tYXBib3hBcGlBY2Nlc3NUb2tlblxufSk7XG5cbmV4cG9ydCBjb25zdCBtYXBDb25maWdDaGFuZ2VVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIC4uLnN0YXRlLFxuICAuLi5hY3Rpb24ucGF5bG9hZCxcbiAgLi4uZ2V0TWFwU3R5bGVzKHtcbiAgICAuLi5zdGF0ZSxcbiAgICAuLi5hY3Rpb24ucGF5bG9hZFxuICB9KVxufSk7XG5cbmV4cG9ydCBjb25zdCBtYXBTdHlsZUNoYW5nZVVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiBzdHlsZVR5cGV9KSA9PiB7XG4gIGlmICghc3RhdGUubWFwU3R5bGVzW3N0eWxlVHlwZV0pIHtcbiAgICAvLyB3ZSBtaWdodCBub3QgaGF2ZSByZWNlaXZlZCB0aGUgc3R5bGUgeWV0XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGNvbnN0IGRlZmF1bHRMR1Zpc2liaWxpdHkgPSBnZXREZWZhdWx0TGF5ZXJHcm91cFZpc2liaWxpdHkoXG4gICAgc3RhdGUubWFwU3R5bGVzW3N0eWxlVHlwZV1cbiAgKTtcblxuICBjb25zdCB2aXNpYmxlTGF5ZXJHcm91cHMgPSBtZXJnZUxheWVyR3JvdXBWaXNpYmlsaXR5KGRlZmF1bHRMR1Zpc2liaWxpdHksIHN0YXRlLnZpc2libGVMYXllckdyb3Vwcyk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBzdHlsZVR5cGUsXG4gICAgdmlzaWJsZUxheWVyR3JvdXBzLFxuICAgIC4uLmdldE1hcFN0eWxlcyh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHZpc2libGVMYXllckdyb3VwcyxcbiAgICAgIHN0eWxlVHlwZVxuICAgIH0pXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZE1hcFN0eWxlc1VwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCBuZXdTdHlsZXMgPSBhY3Rpb24ucGF5bG9hZDtcblxuICAvLyBhZGQgbmV3IHN0eWxlcyB0byBzdGF0ZVxuICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICBtYXBTdHlsZXM6IHtcbiAgICAgIC4uLnN0YXRlLm1hcFN0eWxlcyxcbiAgICAgIC4uLm5ld1N0eWxlc1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbmV3U3R5bGVzW3N0YXRlLnN0eWxlVHlwZV1cbiAgICA/IG1hcFN0eWxlQ2hhbmdlVXBkYXRlcihuZXdTdGF0ZSwge3BheWxvYWQ6IHN0YXRlLnN0eWxlVHlwZX0pXG4gICAgOiBuZXdTdGF0ZTtcbn07XG5cbi8vIGRvIG5vdGhpbmcgZm9yIG5vdywgaWYgZGlkbid0IGxvYWQsIHNraXAgaXRcbmV4cG9ydCBjb25zdCBsb2FkTWFwU3R5bGVFcnJVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHN0YXRlO1xuZXhwb3J0IGNvbnN0IHJlY2VpdmVNYXBDb25maWdVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDoge21hcFN0eWxlfX0pID0+IHtcbiAgaWYgKCFtYXBTdHlsZSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIC8vIGlmIHNhdmVkIGN1c3RvbSBtYXBTdHlsZXMgbG9hZCB0aGUgc3R5bGUgb2JqZWN0XG4gIGNvbnN0IGxvYWRNYXBTdHlsZVRhc2tzID0gbWFwU3R5bGUubWFwU3R5bGVzID8gW1xuICAgIFRhc2suYWxsKFxuICAgICAgT2JqZWN0LnZhbHVlcyhtYXBTdHlsZS5tYXBTdHlsZXMpXG4gICAgICAubWFwKCh7aWQsIHVybCwgYWNjZXNzVG9rZW59KSA9PiAoe1xuICAgICAgICBpZCwgdXJsOiBnZXRTdHlsZURvd25sb2FkVXJsKHVybCwgYWNjZXNzVG9rZW4gfHwgc3RhdGUubWFwYm94QXBpQWNjZXNzVG9rZW4pXG4gICAgICB9KSlcbiAgICAgIC5tYXAoTE9BRF9NQVBfU1RZTEVfVEFTSykpXG4gICAgICAuYmltYXAoXG4gICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgICAgcmVzdWx0cyA9PiAoXG4gICAgICAgICAgbG9hZE1hcFN0eWxlcyhcbiAgICAgICAgICAgIHJlc3VsdHMucmVkdWNlKChhY2N1LCB7aWQsIHN0eWxlfSkgPT4gKHtcbiAgICAgICAgICAgICAgLi4uYWNjdSxcbiAgICAgICAgICAgICAgW2lkXToge1xuICAgICAgICAgICAgICAgIC4uLm1hcFN0eWxlLm1hcFN0eWxlc1tpZF0sXG4gICAgICAgICAgICAgICAgbGF5ZXJHcm91cHM6IGdldExheWVyR3JvdXBzRnJvbVN0eWxlKHN0eWxlKSxcbiAgICAgICAgICAgICAgICBzdHlsZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSwge30pXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICAvLyBlcnJvclxuICAgICAgICBlcnJvciA9PiBsb2FkTWFwU3R5bGVFcnIoZXJyb3IpXG4gICAgICApXG4gIF0gOiBudWxsO1xuXG4gIGNvbnN0IG5ld1N0YXRlID0gbWFwQ29uZmlnQ2hhbmdlVXBkYXRlcihzdGF0ZSwge3BheWxvYWQ6IG1hcFN0eWxlfSk7XG5cbiAgcmV0dXJuIGxvYWRNYXBTdHlsZVRhc2tzID8gd2l0aFRhc2soXG4gICAgbmV3U3RhdGUsXG4gICAgbG9hZE1hcFN0eWxlVGFza3NcbiAgKSA6IG5ld1N0YXRlO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlc2V0TWFwQ29uZmlnTWFwU3R5bGVVcGRhdGVyID0gKHN0YXRlKSA9PiB7XG4gIGNvbnN0IGVtcHR5Q29uZmlnID0ge1xuICAgIC4uLklOSVRJQUxfTUFQX1NUWUxFLFxuICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuOiBzdGF0ZS5tYXBib3hBcGlBY2Nlc3NUb2tlbixcbiAgICAuLi5zdGF0ZS5pbml0aWFsU3RhdGUsXG4gICAgbWFwU3R5bGVzOiBzdGF0ZS5tYXBTdHlsZXMsXG4gICAgaW5pdGlhbFN0YXRlOiBzdGF0ZS5pbml0aWFsU3RhdGVcbiAgfTtcblxuICByZXR1cm4gbWFwU3R5bGVDaGFuZ2VVcGRhdGVyKGVtcHR5Q29uZmlnLCB7cGF5bG9hZDogZW1wdHlDb25maWcuc3R5bGVUeXBlfSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZEN1c3RvbU1hcFN0eWxlVXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWQ6IHtpY29uLCBzdHlsZSwgZXJyb3J9fSkgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGlucHV0U3R5bGU6IHtcbiAgICAuLi5zdGF0ZS5pbnB1dFN0eWxlLFxuICAgIC8vIHN0eWxlIGpzb24gYW5kIGljb24gd2lsbCBsb2FkIGFzeW5jaHJvbm91c2x5XG4gICAgLi4uKHN0eWxlID8ge1xuICAgICAgaWQ6IHN0eWxlLmlkIHx8IGdlbmVyYXRlSGFzaElkKCksXG4gICAgICAvLyBtYWtlIGEgY29weSBvZiB0aGUgc3R5bGUgb2JqZWN0XG4gICAgICBzdHlsZTogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdHlsZSkpLFxuICAgICAgbGFiZWw6IHN0eWxlLm5hbWUsXG4gICAgICAvLyBnYXRoZXJpbmcgbGF5ZXIgZ3JvdXAgaW5mbyBmcm9tIHN0eWxlIGpzb25cbiAgICAgIGxheWVyR3JvdXBzOiBnZXRMYXllckdyb3Vwc0Zyb21TdHlsZShzdHlsZSlcbiAgICB9IDoge30pLFxuICAgIC4uLihpY29uID8ge2ljb259IDoge30pLFxuICAgIC4uLihlcnJvciAhPT0gdW5kZWZpbmVkID8ge2Vycm9yfSA6IHt9KVxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IGlucHV0TWFwU3R5bGVVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDogaW5wdXRTdHlsZX0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBpbnB1dFN0eWxlOiB7XG4gICAgLi4uaW5wdXRTdHlsZSxcbiAgICBpc1ZhbGlkOiBpc1ZhbGlkU3R5bGVVcmwoaW5wdXRTdHlsZS51cmwpXG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgYWRkQ3VzdG9tTWFwU3R5bGVVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgY29uc3Qgc3R5bGVJZCA9IHN0YXRlLmlucHV0U3R5bGUuaWQ7XG4gIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIG1hcFN0eWxlczoge1xuICAgICAgLi4uc3RhdGUubWFwU3R5bGVzLFxuICAgICAgW3N0eWxlSWRdOiBzdGF0ZS5pbnB1dFN0eWxlXG4gICAgfSxcbiAgICAvLyBzZXQgdG8gZGVmYXVsdFxuICAgIGlucHV0U3R5bGU6IGdldEluaXRpYWxJbnB1dFN0eWxlKClcbiAgfTtcbiAgLy8gc2V0IG5ldyBzdHlsZVxuICByZXR1cm4gbWFwU3R5bGVDaGFuZ2VVcGRhdGVyKG5ld1N0YXRlLCB7cGF5bG9hZDogc3R5bGVJZH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaXRpYWxJbnB1dFN0eWxlKCkge1xuICByZXR1cm4ge1xuICAgIGFjY2Vzc1Rva2VuOiBudWxsLFxuICAgIGVycm9yOiBmYWxzZSxcbiAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICBsYWJlbDogbnVsbCxcbiAgICBzdHlsZTogbnVsbCxcbiAgICB1cmw6IG51bGwsXG4gICAgY3VzdG9tOiB0cnVlXG4gIH07XG59XG4iXX0=