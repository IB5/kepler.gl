'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeWidget = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  padding-top: ', 'px;\n  padding-right: ', 'px;\n  padding-bottom: ', 'px;\n  padding-left: ', 'px;  \n  bottom: 0;\n  right: 0;\n  z-index: 1;\n  width: ', 'px;\n\n  .bottom-widget--inner {\n    background-color: ', ';\n    padding: 10px ', 'px;\n    position: relative;\n  }\n'], ['\n  position: absolute;\n  padding-top: ', 'px;\n  padding-right: ', 'px;\n  padding-bottom: ', 'px;\n  padding-left: ', 'px;  \n  bottom: 0;\n  right: 0;\n  z-index: 1;\n  width: ', 'px;\n\n  .bottom-widget--inner {\n    background-color: ', ';\n    padding: 10px ', 'px;\n    position: relative;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding-right: ', 'px;\n  color: ', ';\n  \n  .bottom-widget__y-axis {\n    flex-grow: 1;\n    margin-left: 20px;\n  }\n  \n  .bottom-widget__field-select {\n    width: 160px;\n    display: inline-block;\n  }\n'], ['\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding-right: ', 'px;\n  color: ', ';\n  \n  .bottom-widget__y-axis {\n    flex-grow: 1;\n    margin-left: 20px;\n  }\n  \n  .bottom-widget__field-select {\n    width: 160px;\n    display: inline-block;\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  padding-right: 76px;\n'], ['\n  padding-right: 76px;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  border-bottom: 1px solid\n    ', ';\n  color: ', ';\n  display: inline-block;\n  font-size: 12px;\n  height: 24px;\n  margin-right: 4px;\n  text-align: center;\n  width: 24px;\n  line-height: 24px;\n  \n  :hover {\n    cursor: pointer;\n  }\n'], ['\n  border-bottom: 1px solid\n    ', ';\n  color: ', ';\n  display: inline-block;\n  font-size: 12px;\n  height: 24px;\n  margin-right: 4px;\n  text-align: center;\n  width: 24px;\n  line-height: 24px;\n  \n  :hover {\n    cursor: pointer;\n  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  flex-grow: 0;\n  color: ', ';\n\n  .bottom-widget__icon {\n    margin-right: 6px;\n  }\n'], ['\n  flex-grow: 0;\n  color: ', ';\n\n  .bottom-widget__icon {\n    margin-right: 6px;\n  }\n']); // Copyright (c) 2018 Uber Technologies, Inc.
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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reselect = require('reselect');

var _fieldSelector = require('../common/field-selector');

var _fieldSelector2 = _interopRequireDefault(_fieldSelector);

var _styledComponents3 = require('../common/styled-components');

var _timeRangeFilter = require('./time-range-filter');

var _timeRangeFilter2 = _interopRequireDefault(_timeRangeFilter);

var _icons = require('../common/icons');

var _filterUtils = require('../../utils/filter-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var innerPdSide = 32;

var WidgetContainer = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.sidePanel.margin.top;
}, function (props) {
  return props.theme.sidePanel.margin.right;
}, function (props) {
  return props.theme.sidePanel.margin.bottom;
}, function (props) {
  return props.theme.sidePanel.margin.left;
}, function (props) {
  return props.width;
}, function (props) {
  return props.theme.sidePanelBg;
}, innerPdSide);

var TopSectionWrapper = _styledComponents2.default.div(_templateObject2, innerPdSide * 2, function (props) {
  return props.theme.labelColor;
});

/* eslint-disable no-unused-vars */
var Tabs = _styledComponents2.default.div(_templateObject3);

var Tab = _styledComponents2.default.div(_templateObject4, function (props) {
  return props.active ? props.theme.textColorHl : 'transparent';
}, function (props) {
  return props.active ? props.theme.textColorHl : props.theme.labelColor;
});
/* eslint-enable no-unused-vars */

var StyledTitle = _styledComponents3.CenterFlexbox.extend(_templateObject5, function (props) {
  return props.theme.textColor;
});

var AnimationSpeedToggle = function AnimationSpeedToggle(_ref) {
  var updateAnimationSpeed = _ref.updateAnimationSpeed,
      speed = _ref.speed;
  return _react2.default.createElement(
    Tabs,
    null,
    _filterUtils.TIME_ANIMATION_SPEED.map(function (_ref2) {
      var label = _ref2.label,
          value = _ref2.value;
      return _react2.default.createElement(
        Tab,
        { key: value, active: value === speed,
          onClick: function onClick() {
            return updateAnimationSpeed(value);
          } },
        label
      );
    })
  );
};

var TimeWidget = exports.TimeWidget = function (_Component) {
  (0, _inherits3.default)(TimeWidget, _Component);

  function TimeWidget() {
    var _ref3;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TimeWidget);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref3 = TimeWidget.__proto__ || Object.getPrototypeOf(TimeWidget)).call.apply(_ref3, [this].concat(args))), _this), _this.fieldSelector = function (props) {
      return props.fields;
    }, _this.yAxisFieldsSelector = (0, _reselect.createSelector)(_this.fieldSelector, function (fields) {
      return fields.filter(function (f) {
        return f.type === 'integer' || f.type === 'real';
      });
    }), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TimeWidget, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          enlargedIdx = _props.enlargedIdx,
          enlargeFilter = _props.enlargeFilter,
          filter = _props.filter,
          isAnyFilterAnimating = _props.isAnyFilterAnimating,
          _setFilter = _props.setFilter,
          setFilterPlot = _props.setFilterPlot,
          _toggleAnimation = _props.toggleAnimation,
          _updateAnimationSpeed = _props.updateAnimationSpeed,
          width = _props.width;


      return _react2.default.createElement(
        WidgetContainer,
        { width: width },
        _react2.default.createElement(
          'div',
          { className: 'bottom-widget--inner' },
          _react2.default.createElement(
            TopSectionWrapper,
            null,
            _react2.default.createElement(
              StyledTitle,
              { className: 'bottom-widget__field' },
              _react2.default.createElement(
                _styledComponents3.CenterFlexbox,
                { className: 'bottom-widget__icon' },
                _react2.default.createElement(_icons.Clock, { height: '15px' })
              ),
              _react2.default.createElement(
                _styledComponents3.SelectTextBold,
                null,
                filter.name
              )
            ),
            _react2.default.createElement(
              StyledTitle,
              { className: 'bottom-widget__y-axis' },
              _react2.default.createElement(
                _styledComponents3.CenterFlexbox,
                { className: 'bottom-widget__icon' },
                _react2.default.createElement(_icons.LineChart, { height: '15px' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-widget__field-select' },
                _react2.default.createElement(_fieldSelector2.default, {
                  fields: this.yAxisFieldsSelector(this.props),
                  placement: 'top',
                  id: 'selected-time-widget-field',
                  value: filter.yAxis ? filter.yAxis.name : null,
                  onSelect: function onSelect(value) {
                    return setFilterPlot(enlargedIdx, { yAxis: value });
                  },
                  inputTheme: 'secondary',
                  placeholder: 'Select Y Axis',
                  erasable: true,
                  showToken: false
                })
              )
            ),
            _react2.default.createElement(AnimationSpeedToggle, {
              updateAnimationSpeed: function updateAnimationSpeed(speed) {
                return _updateAnimationSpeed(enlargedIdx, speed);
              },
              speed: filter.speed })
          ),
          _react2.default.createElement(_timeRangeFilter2.default, {
            filter: filter,
            setFilter: function setFilter(value) {
              return _setFilter(enlargedIdx, 'value', value);
            },
            isAnyFilterAnimating: isAnyFilterAnimating,
            updateAnimationSpeed: function updateAnimationSpeed(speed) {
              return _updateAnimationSpeed(enlargedIdx, speed);
            },
            toggleAnimation: function toggleAnimation() {
              return _toggleAnimation(enlargedIdx);
            }
          })
        )
      );
    }
  }]);
  return TimeWidget;
}(_react.Component);

var TimeWidgetFactory = function TimeWidgetFactory() {
  return TimeWidget;
};
exports.default = TimeWidgetFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvdGltZS13aWRnZXQuanMiXSwibmFtZXMiOlsiaW5uZXJQZFNpZGUiLCJXaWRnZXRDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwic2lkZVBhbmVsIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJzaWRlUGFuZWxCZyIsIlRvcFNlY3Rpb25XcmFwcGVyIiwibGFiZWxDb2xvciIsIlRhYnMiLCJUYWIiLCJhY3RpdmUiLCJ0ZXh0Q29sb3JIbCIsIlN0eWxlZFRpdGxlIiwiQ2VudGVyRmxleGJveCIsImV4dGVuZCIsInRleHRDb2xvciIsIkFuaW1hdGlvblNwZWVkVG9nZ2xlIiwidXBkYXRlQW5pbWF0aW9uU3BlZWQiLCJzcGVlZCIsIlRJTUVfQU5JTUFUSU9OX1NQRUVEIiwibWFwIiwibGFiZWwiLCJ2YWx1ZSIsIlRpbWVXaWRnZXQiLCJmaWVsZFNlbGVjdG9yIiwiZmllbGRzIiwieUF4aXNGaWVsZHNTZWxlY3RvciIsImZpbHRlciIsImYiLCJ0eXBlIiwiZW5sYXJnZWRJZHgiLCJlbmxhcmdlRmlsdGVyIiwiaXNBbnlGaWx0ZXJBbmltYXRpbmciLCJzZXRGaWx0ZXIiLCJzZXRGaWx0ZXJQbG90IiwidG9nZ2xlQW5pbWF0aW9uIiwibmFtZSIsInlBeGlzIiwiQ29tcG9uZW50IiwiVGltZVdpZGdldEZhY3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aVFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBLElBQU1BLGNBQWMsRUFBcEI7O0FBRUEsSUFBTUMsa0JBQWtCQywyQkFBT0MsR0FBekIsa0JBRVc7QUFBQSxTQUFTQyxNQUFNQyxLQUFOLENBQVlDLFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCQyxHQUF0QztBQUFBLENBRlgsRUFHYTtBQUFBLFNBQVNKLE1BQU1DLEtBQU4sQ0FBWUMsU0FBWixDQUFzQkMsTUFBdEIsQ0FBNkJFLEtBQXRDO0FBQUEsQ0FIYixFQUljO0FBQUEsU0FBU0wsTUFBTUMsS0FBTixDQUFZQyxTQUFaLENBQXNCQyxNQUF0QixDQUE2QkcsTUFBdEM7QUFBQSxDQUpkLEVBS1k7QUFBQSxTQUFTTixNQUFNQyxLQUFOLENBQVlDLFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCSSxJQUF0QztBQUFBLENBTFosRUFTSztBQUFBLFNBQVNQLE1BQU1RLEtBQWY7QUFBQSxDQVRMLEVBWWtCO0FBQUEsU0FBU1IsTUFBTUMsS0FBTixDQUFZUSxXQUFyQjtBQUFBLENBWmxCLEVBYWNiLFdBYmQsQ0FBTjs7QUFrQkEsSUFBTWMsb0JBQW9CWiwyQkFBT0MsR0FBM0IsbUJBS2FILGNBQWMsQ0FMM0IsRUFNSztBQUFBLFNBQVNJLE1BQU1DLEtBQU4sQ0FBWVUsVUFBckI7QUFBQSxDQU5MLENBQU47O0FBbUJBO0FBQ0EsSUFBTUMsT0FBT2QsMkJBQU9DLEdBQWQsa0JBQU47O0FBSUEsSUFBTWMsTUFBTWYsMkJBQU9DLEdBQWIsbUJBRUE7QUFBQSxTQUFVQyxNQUFNYyxNQUFOLEdBQWVkLE1BQU1DLEtBQU4sQ0FBWWMsV0FBM0IsR0FBeUMsYUFBbkQ7QUFBQSxDQUZBLEVBR0s7QUFBQSxTQUNUZixNQUFNYyxNQUFOLEdBQWVkLE1BQU1DLEtBQU4sQ0FBWWMsV0FBM0IsR0FBeUNmLE1BQU1DLEtBQU4sQ0FBWVUsVUFENUM7QUFBQSxDQUhMLENBQU47QUFpQkE7O0FBRUEsSUFBTUssY0FBY0MsaUNBQWNDLE1BQTVCLG1CQUVLO0FBQUEsU0FBU2xCLE1BQU1DLEtBQU4sQ0FBWWtCLFNBQXJCO0FBQUEsQ0FGTCxDQUFOOztBQVNBLElBQU1DLHVCQUF1QixTQUF2QkEsb0JBQXVCO0FBQUEsTUFBRUMsb0JBQUYsUUFBRUEsb0JBQUY7QUFBQSxNQUF3QkMsS0FBeEIsUUFBd0JBLEtBQXhCO0FBQUEsU0FDM0I7QUFBQyxRQUFEO0FBQUE7QUFDR0Msc0NBQXFCQyxHQUFyQixDQUF5QjtBQUFBLFVBQUVDLEtBQUYsU0FBRUEsS0FBRjtBQUFBLFVBQVNDLEtBQVQsU0FBU0EsS0FBVDtBQUFBLGFBQ3hCO0FBQUMsV0FBRDtBQUFBLFVBQUssS0FBS0EsS0FBVixFQUFpQixRQUFRQSxVQUFVSixLQUFuQztBQUNFLG1CQUFTO0FBQUEsbUJBQU1ELHFCQUFxQkssS0FBckIsQ0FBTjtBQUFBLFdBRFg7QUFDK0NEO0FBRC9DLE9BRHdCO0FBQUEsS0FBekI7QUFESCxHQUQyQjtBQUFBLENBQTdCOztJQVNhRSxVLFdBQUFBLFU7Ozs7Ozs7Ozs7Ozs7OzhNQUNYQyxhLEdBQWdCO0FBQUEsYUFBUzVCLE1BQU02QixNQUFmO0FBQUEsSyxRQUNoQkMsbUIsR0FBc0IsOEJBQWUsTUFBS0YsYUFBcEIsRUFBbUM7QUFBQSxhQUN2REMsT0FBT0UsTUFBUCxDQUFjO0FBQUEsZUFBS0MsRUFBRUMsSUFBRixLQUFXLFNBQVgsSUFBd0JELEVBQUVDLElBQUYsS0FBVyxNQUF4QztBQUFBLE9BQWQsQ0FEdUQ7QUFBQSxLQUFuQyxDOzs7Ozs2QkFJYjtBQUFBLG1CQVdILEtBQUtqQyxLQVhGO0FBQUEsVUFFTGtDLFdBRkssVUFFTEEsV0FGSztBQUFBLFVBR0xDLGFBSEssVUFHTEEsYUFISztBQUFBLFVBSUxKLE1BSkssVUFJTEEsTUFKSztBQUFBLFVBS0xLLG9CQUxLLFVBS0xBLG9CQUxLO0FBQUEsVUFNTEMsVUFOSyxVQU1MQSxTQU5LO0FBQUEsVUFPTEMsYUFQSyxVQU9MQSxhQVBLO0FBQUEsVUFRTEMsZ0JBUkssVUFRTEEsZUFSSztBQUFBLFVBU0xsQixxQkFUSyxVQVNMQSxvQkFUSztBQUFBLFVBVUxiLEtBVkssVUFVTEEsS0FWSzs7O0FBYVAsYUFDRTtBQUFDLHVCQUFEO0FBQUEsVUFBaUIsT0FBT0EsS0FBeEI7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLHNCQUFmO0FBQ0U7QUFBQyw2QkFBRDtBQUFBO0FBQ0U7QUFBQyx5QkFBRDtBQUFBLGdCQUFhLFdBQVUsc0JBQXZCO0FBQ0U7QUFBQyxnREFBRDtBQUFBLGtCQUFlLFdBQVUscUJBQXpCO0FBQ0UsOENBQUMsWUFBRCxJQUFPLFFBQU8sTUFBZDtBQURGLGVBREY7QUFJRTtBQUFDLGlEQUFEO0FBQUE7QUFBaUJ1Qix1QkFBT1M7QUFBeEI7QUFKRixhQURGO0FBT0U7QUFBQyx5QkFBRDtBQUFBLGdCQUFhLFdBQVUsdUJBQXZCO0FBQ0U7QUFBQyxnREFBRDtBQUFBLGtCQUFlLFdBQVUscUJBQXpCO0FBQ0UsOENBQUMsZ0JBQUQsSUFBVyxRQUFPLE1BQWxCO0FBREYsZUFERjtBQUlFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLDZCQUFmO0FBQ0UsOENBQUMsdUJBQUQ7QUFDRSwwQkFBUSxLQUFLVixtQkFBTCxDQUF5QixLQUFLOUIsS0FBOUIsQ0FEVjtBQUVFLDZCQUFVLEtBRlo7QUFHRSxzQkFBRyw0QkFITDtBQUlFLHlCQUFPK0IsT0FBT1UsS0FBUCxHQUFlVixPQUFPVSxLQUFQLENBQWFELElBQTVCLEdBQW1DLElBSjVDO0FBS0UsNEJBQVU7QUFBQSwyQkFBU0YsY0FBY0osV0FBZCxFQUEyQixFQUFDTyxPQUFPZixLQUFSLEVBQTNCLENBQVQ7QUFBQSxtQkFMWjtBQU1FLDhCQUFXLFdBTmI7QUFPRSwrQkFBWSxlQVBkO0FBUUUsZ0NBUkY7QUFTRSw2QkFBVztBQVRiO0FBREY7QUFKRixhQVBGO0FBeUJFLDBDQUFDLG9CQUFEO0FBQ0Usb0NBQXNCLDhCQUFDSixLQUFEO0FBQUEsdUJBQVdELHNCQUFxQmEsV0FBckIsRUFBa0NaLEtBQWxDLENBQVg7QUFBQSxlQUR4QjtBQUVFLHFCQUFPUyxPQUFPVCxLQUZoQjtBQXpCRixXQURGO0FBOEJFLHdDQUFDLHlCQUFEO0FBQ0Usb0JBQVFTLE1BRFY7QUFFRSx1QkFBVztBQUFBLHFCQUFTTSxXQUFVSCxXQUFWLEVBQXVCLE9BQXZCLEVBQWdDUixLQUFoQyxDQUFUO0FBQUEsYUFGYjtBQUdFLGtDQUFzQlUsb0JBSHhCO0FBSUUsa0NBQXNCLDhCQUFDZCxLQUFEO0FBQUEscUJBQVdELHNCQUFxQmEsV0FBckIsRUFBa0NaLEtBQWxDLENBQVg7QUFBQSxhQUp4QjtBQUtFLDZCQUFpQjtBQUFBLHFCQUFNaUIsaUJBQWdCTCxXQUFoQixDQUFOO0FBQUE7QUFMbkI7QUE5QkY7QUFERixPQURGO0FBMENEOzs7RUE3RDZCUSxnQjs7QUFnRWhDLElBQU1DLG9CQUFvQixTQUFwQkEsaUJBQW9CO0FBQUEsU0FBTWhCLFVBQU47QUFBQSxDQUExQjtrQkFDZWdCLGlCIiwiZmlsZSI6InRpbWUtd2lkZ2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE4IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcblxuaW1wb3J0IEZpZWxkU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9jb21tb24vZmllbGQtc2VsZWN0b3InO1xuaW1wb3J0IHtTZWxlY3RUZXh0Qm9sZCwgSWNvblJvdW5kU21hbGwsIENlbnRlckZsZXhib3h9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBUaW1lUmFuZ2VGaWx0ZXIgZnJvbSAnY29tcG9uZW50cy9maWx0ZXJzL3RpbWUtcmFuZ2UtZmlsdGVyJztcbmltcG9ydCB7Q2xvc2UsIENsb2NrLCBMaW5lQ2hhcnR9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcbmltcG9ydCB7VElNRV9BTklNQVRJT05fU1BFRUR9IGZyb20gJ3V0aWxzL2ZpbHRlci11dGlscyc7XG5jb25zdCBpbm5lclBkU2lkZSA9IDMyO1xuXG5jb25zdCBXaWRnZXRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctdG9wOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbC5tYXJnaW4udG9wfXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbC5tYXJnaW4ucmlnaHR9cHg7XG4gIHBhZGRpbmctYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbC5tYXJnaW4uYm90dG9tfXB4O1xuICBwYWRkaW5nLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsLm1hcmdpbi5sZWZ0fXB4OyAgXG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofXB4O1xuXG4gIC5ib3R0b20td2lkZ2V0LS1pbm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWxCZ307XG4gICAgcGFkZGluZzogMTBweCAke2lubmVyUGRTaWRlfXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuYDtcblxuY29uc3QgVG9wU2VjdGlvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6ICR7aW5uZXJQZFNpZGUgKiAyfXB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbiAgXG4gIC5ib3R0b20td2lkZ2V0X195LWF4aXMge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuICBcbiAgLmJvdHRvbS13aWRnZXRfX2ZpZWxkLXNlbGVjdCB7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuYDtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmNvbnN0IFRhYnMgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nLXJpZ2h0OiA3NnB4O1xuYDtcblxuY29uc3QgVGFiID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkXG4gICAgJHtwcm9wcyA9PiAocHJvcHMuYWN0aXZlID8gcHJvcHMudGhlbWUudGV4dENvbG9ySGwgOiAndHJhbnNwYXJlbnQnKX07XG4gIGNvbG9yOiAke3Byb3BzID0+XG4gIHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLnRleHRDb2xvckhsIDogcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG5jb25zdCBTdHlsZWRUaXRsZSA9IENlbnRlckZsZXhib3guZXh0ZW5kYFxuICBmbGV4LWdyb3c6IDA7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG5cbiAgLmJvdHRvbS13aWRnZXRfX2ljb24ge1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICB9XG5gO1xuXG5jb25zdCBBbmltYXRpb25TcGVlZFRvZ2dsZSA9ICh7dXBkYXRlQW5pbWF0aW9uU3BlZWQsIHNwZWVkfSkgPT4gKFxuICA8VGFicz5cbiAgICB7VElNRV9BTklNQVRJT05fU1BFRUQubWFwKCh7bGFiZWwsIHZhbHVlfSkgPT4gKFxuICAgICAgPFRhYiBrZXk9e3ZhbHVlfSBhY3RpdmU9e3ZhbHVlID09PSBzcGVlZH1cbiAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlQW5pbWF0aW9uU3BlZWQodmFsdWUpfT57bGFiZWx9PC9UYWI+XG4gICAgKSl9XG4gIDwvVGFicz5cbik7XG5cbmV4cG9ydCBjbGFzcyBUaW1lV2lkZ2V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgZmllbGRTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmZpZWxkcztcbiAgeUF4aXNGaWVsZHNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuZmllbGRTZWxlY3RvciwgZmllbGRzID0+XG4gICAgZmllbGRzLmZpbHRlcihmID0+IGYudHlwZSA9PT0gJ2ludGVnZXInIHx8IGYudHlwZSA9PT0gJ3JlYWwnKVxuICApO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBlbmxhcmdlZElkeCxcbiAgICAgIGVubGFyZ2VGaWx0ZXIsXG4gICAgICBmaWx0ZXIsXG4gICAgICBpc0FueUZpbHRlckFuaW1hdGluZyxcbiAgICAgIHNldEZpbHRlcixcbiAgICAgIHNldEZpbHRlclBsb3QsXG4gICAgICB0b2dnbGVBbmltYXRpb24sXG4gICAgICB1cGRhdGVBbmltYXRpb25TcGVlZCxcbiAgICAgIHdpZHRoXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFdpZGdldENvbnRhaW5lciB3aWR0aD17d2lkdGh9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS13aWRnZXQtLWlubmVyXCI+XG4gICAgICAgICAgPFRvcFNlY3Rpb25XcmFwcGVyPlxuICAgICAgICAgICAgPFN0eWxlZFRpdGxlIGNsYXNzTmFtZT1cImJvdHRvbS13aWRnZXRfX2ZpZWxkXCI+XG4gICAgICAgICAgICAgIDxDZW50ZXJGbGV4Ym94IGNsYXNzTmFtZT1cImJvdHRvbS13aWRnZXRfX2ljb25cIj5cbiAgICAgICAgICAgICAgICA8Q2xvY2sgaGVpZ2h0PVwiMTVweFwiLz5cbiAgICAgICAgICAgICAgPC9DZW50ZXJGbGV4Ym94PlxuICAgICAgICAgICAgICA8U2VsZWN0VGV4dEJvbGQ+e2ZpbHRlci5uYW1lfTwvU2VsZWN0VGV4dEJvbGQ+XG4gICAgICAgICAgICA8L1N0eWxlZFRpdGxlPlxuICAgICAgICAgICAgPFN0eWxlZFRpdGxlIGNsYXNzTmFtZT1cImJvdHRvbS13aWRnZXRfX3ktYXhpc1wiPlxuICAgICAgICAgICAgICA8Q2VudGVyRmxleGJveCBjbGFzc05hbWU9XCJib3R0b20td2lkZ2V0X19pY29uXCI+XG4gICAgICAgICAgICAgICAgPExpbmVDaGFydCBoZWlnaHQ9XCIxNXB4XCIvPlxuICAgICAgICAgICAgICA8L0NlbnRlckZsZXhib3g+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLXdpZGdldF9fZmllbGQtc2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgPEZpZWxkU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgIGZpZWxkcz17dGhpcy55QXhpc0ZpZWxkc1NlbGVjdG9yKHRoaXMucHJvcHMpfVxuICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2VsZWN0ZWQtdGltZS13aWRnZXQtZmllbGRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZpbHRlci55QXhpcyA/IGZpbHRlci55QXhpcy5uYW1lIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt2YWx1ZSA9PiBzZXRGaWx0ZXJQbG90KGVubGFyZ2VkSWR4LCB7eUF4aXM6IHZhbHVlfSl9XG4gICAgICAgICAgICAgICAgICBpbnB1dFRoZW1lPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFkgQXhpc1wiXG4gICAgICAgICAgICAgICAgICBlcmFzYWJsZVxuICAgICAgICAgICAgICAgICAgc2hvd1Rva2VuPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU3R5bGVkVGl0bGU+XG4gICAgICAgICAgICA8QW5pbWF0aW9uU3BlZWRUb2dnbGVcbiAgICAgICAgICAgICAgdXBkYXRlQW5pbWF0aW9uU3BlZWQ9eyhzcGVlZCkgPT4gdXBkYXRlQW5pbWF0aW9uU3BlZWQoZW5sYXJnZWRJZHgsIHNwZWVkKX1cbiAgICAgICAgICAgICAgc3BlZWQ9e2ZpbHRlci5zcGVlZH0vPlxuICAgICAgICAgIDwvVG9wU2VjdGlvbldyYXBwZXI+XG4gICAgICAgICAgPFRpbWVSYW5nZUZpbHRlclxuICAgICAgICAgICAgZmlsdGVyPXtmaWx0ZXJ9XG4gICAgICAgICAgICBzZXRGaWx0ZXI9e3ZhbHVlID0+IHNldEZpbHRlcihlbmxhcmdlZElkeCwgJ3ZhbHVlJywgdmFsdWUpfVxuICAgICAgICAgICAgaXNBbnlGaWx0ZXJBbmltYXRpbmc9e2lzQW55RmlsdGVyQW5pbWF0aW5nfVxuICAgICAgICAgICAgdXBkYXRlQW5pbWF0aW9uU3BlZWQ9eyhzcGVlZCkgPT4gdXBkYXRlQW5pbWF0aW9uU3BlZWQoZW5sYXJnZWRJZHgsIHNwZWVkKX1cbiAgICAgICAgICAgIHRvZ2dsZUFuaW1hdGlvbj17KCkgPT4gdG9nZ2xlQW5pbWF0aW9uKGVubGFyZ2VkSWR4KX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvV2lkZ2V0Q29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgVGltZVdpZGdldEZhY3RvcnkgPSAoKSA9PiBUaW1lV2lkZ2V0O1xuZXhwb3J0IGRlZmF1bHQgVGltZVdpZGdldEZhY3Rvcnk7XG4iXX0=