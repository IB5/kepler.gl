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
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding-right: ', 'px;\n  color: ', ';\n  \n  .bottom-widget__y-axis {\n    flex-grow: 1;\n    margin-left: 20px;\n  }\n  \n  .bottom-widget__field-select {\n    width: 0px;\n    display: inline-block;\n  }\n'], ['\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding-right: ', 'px;\n  color: ', ';\n  \n  .bottom-widget__y-axis {\n    flex-grow: 1;\n    margin-left: 20px;\n  }\n  \n  .bottom-widget__field-select {\n    width: 0px;\n    display: inline-block;\n  }\n']),
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
                  value: filter.yAxis ? filter.yAxis.name : null
                  // onSelect={value => setFilterPlot(enlargedIdx, {yAxis: value})}
                  , inputTheme: 'secondary',
                  placeholder: '',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvdGltZS13aWRnZXQuanMiXSwibmFtZXMiOlsiaW5uZXJQZFNpZGUiLCJXaWRnZXRDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwic2lkZVBhbmVsIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJzaWRlUGFuZWxCZyIsIlRvcFNlY3Rpb25XcmFwcGVyIiwibGFiZWxDb2xvciIsIlRhYnMiLCJUYWIiLCJhY3RpdmUiLCJ0ZXh0Q29sb3JIbCIsIlN0eWxlZFRpdGxlIiwiQ2VudGVyRmxleGJveCIsImV4dGVuZCIsInRleHRDb2xvciIsIkFuaW1hdGlvblNwZWVkVG9nZ2xlIiwidXBkYXRlQW5pbWF0aW9uU3BlZWQiLCJzcGVlZCIsIlRJTUVfQU5JTUFUSU9OX1NQRUVEIiwibWFwIiwibGFiZWwiLCJ2YWx1ZSIsIlRpbWVXaWRnZXQiLCJmaWVsZFNlbGVjdG9yIiwiZmllbGRzIiwieUF4aXNGaWVsZHNTZWxlY3RvciIsImZpbHRlciIsImYiLCJ0eXBlIiwiZW5sYXJnZWRJZHgiLCJlbmxhcmdlRmlsdGVyIiwiaXNBbnlGaWx0ZXJBbmltYXRpbmciLCJzZXRGaWx0ZXIiLCJzZXRGaWx0ZXJQbG90IiwidG9nZ2xlQW5pbWF0aW9uIiwibmFtZSIsInlBeGlzIiwiQ29tcG9uZW50IiwiVGltZVdpZGdldEZhY3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aVFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBLElBQU1BLGNBQWMsRUFBcEI7O0FBRUEsSUFBTUMsa0JB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LEtBQUQ7QUFBQSxxQkFBV0Qsc0JBQXFCYSxXQUFyQixFQUFrQ1osS0FBbEMsQ0FBWDtBQUFBLGFBSnhCO0FBS0UsNkJBQWlCO0FBQUEscUJBQU1pQixpQkFBZ0JMLFdBQWhCLENBQU47QUFBQTtBQUxuQjtBQTlCRjtBQURGLE9BREY7QUEwQ0Q7OztFQTdENkJRLGdCOztBQWdFaEMsSUFBTUMsb0JBQW9CLFNBQXBCQSxpQkFBb0I7QUFBQSxTQUFNaEIsVUFBTjtBQUFBLENBQTFCO2tCQUNlZ0IsaUIiLCJmaWxlIjoidGltZS13aWRnZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTggVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuXG5pbXBvcnQgRmllbGRTZWxlY3RvciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9maWVsZC1zZWxlY3Rvcic7XG5pbXBvcnQge1NlbGVjdFRleHRCb2xkLCBJY29uUm91bmRTbWFsbCwgQ2VudGVyRmxleGJveH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFRpbWVSYW5nZUZpbHRlciBmcm9tICdjb21wb25lbnRzL2ZpbHRlcnMvdGltZS1yYW5nZS1maWx0ZXInO1xuaW1wb3J0IHtDbG9zZSwgQ2xvY2ssIExpbmVDaGFydH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IHtUSU1FX0FOSU1BVElPTl9TUEVFRH0gZnJvbSAndXRpbHMvZmlsdGVyLXV0aWxzJztcbmNvbnN0IGlubmVyUGRTaWRlID0gMzI7XG5cbmNvbnN0IFdpZGdldENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy10b3A6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsLm1hcmdpbi50b3B9cHg7XG4gIHBhZGRpbmctcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsLm1hcmdpbi5yaWdodH1weDtcbiAgcGFkZGluZy1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsLm1hcmdpbi5ib3R0b219cHg7XG4gIHBhZGRpbmctbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWwubWFyZ2luLmxlZnR9cHg7ICBcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9cHg7XG5cbiAgLmJvdHRvbS13aWRnZXQtLWlubmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbEJnfTtcbiAgICBwYWRkaW5nOiAxMHB4ICR7aW5uZXJQZFNpZGV9cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5gO1xuXG5jb25zdCBUb3BTZWN0aW9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogJHtpbm5lclBkU2lkZSAqIDJ9cHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xuICBcbiAgLmJvdHRvbS13aWRnZXRfX3ktYXhpcyB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG4gIFxuICAuYm90dG9tLXdpZGdldF9fZmllbGQtc2VsZWN0IHtcbiAgICB3aWR0aDogMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuYDtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmNvbnN0IFRhYnMgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nLXJpZ2h0OiA3NnB4O1xuYDtcblxuY29uc3QgVGFiID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkXG4gICAgJHtwcm9wcyA9PiAocHJvcHMuYWN0aXZlID8gcHJvcHMudGhlbWUudGV4dENvbG9ySGwgOiAndHJhbnNwYXJlbnQnKX07XG4gIGNvbG9yOiAke3Byb3BzID0+XG4gIHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLnRleHRDb2xvckhsIDogcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG5jb25zdCBTdHlsZWRUaXRsZSA9IENlbnRlckZsZXhib3guZXh0ZW5kYFxuICBmbGV4LWdyb3c6IDA7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG5cbiAgLmJvdHRvbS13aWRnZXRfX2ljb24ge1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICB9XG5gO1xuXG5jb25zdCBBbmltYXRpb25TcGVlZFRvZ2dsZSA9ICh7dXBkYXRlQW5pbWF0aW9uU3BlZWQsIHNwZWVkfSkgPT4gKFxuICA8VGFicz5cbiAgICB7VElNRV9BTklNQVRJT05fU1BFRUQubWFwKCh7bGFiZWwsIHZhbHVlfSkgPT4gKFxuICAgICAgPFRhYiBrZXk9e3ZhbHVlfSBhY3RpdmU9e3ZhbHVlID09PSBzcGVlZH1cbiAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlQW5pbWF0aW9uU3BlZWQodmFsdWUpfT57bGFiZWx9PC9UYWI+XG4gICAgKSl9XG4gIDwvVGFicz5cbik7XG5cbmV4cG9ydCBjbGFzcyBUaW1lV2lkZ2V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgZmllbGRTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmZpZWxkcztcbiAgeUF4aXNGaWVsZHNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuZmllbGRTZWxlY3RvciwgZmllbGRzID0+XG4gICAgZmllbGRzLmZpbHRlcihmID0+IGYudHlwZSA9PT0gJ2ludGVnZXInIHx8IGYudHlwZSA9PT0gJ3JlYWwnKVxuICApO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBlbmxhcmdlZElkeCxcbiAgICAgIGVubGFyZ2VGaWx0ZXIsXG4gICAgICBmaWx0ZXIsXG4gICAgICBpc0FueUZpbHRlckFuaW1hdGluZyxcbiAgICAgIHNldEZpbHRlcixcbiAgICAgIHNldEZpbHRlclBsb3QsXG4gICAgICB0b2dnbGVBbmltYXRpb24sXG4gICAgICB1cGRhdGVBbmltYXRpb25TcGVlZCxcbiAgICAgIHdpZHRoXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFdpZGdldENvbnRhaW5lciB3aWR0aD17d2lkdGh9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS13aWRnZXQtLWlubmVyXCI+XG4gICAgICAgICAgPFRvcFNlY3Rpb25XcmFwcGVyPlxuICAgICAgICAgICAgPFN0eWxlZFRpdGxlIGNsYXNzTmFtZT1cImJvdHRvbS13aWRnZXRfX2ZpZWxkXCI+XG4gICAgICAgICAgICAgIDxDZW50ZXJGbGV4Ym94IGNsYXNzTmFtZT1cImJvdHRvbS13aWRnZXRfX2ljb25cIj5cbiAgICAgICAgICAgICAgICA8Q2xvY2sgaGVpZ2h0PVwiMTVweFwiLz5cbiAgICAgICAgICAgICAgPC9DZW50ZXJGbGV4Ym94PlxuICAgICAgICAgICAgICA8U2VsZWN0VGV4dEJvbGQ+e2ZpbHRlci5uYW1lfTwvU2VsZWN0VGV4dEJvbGQ+XG4gICAgICAgICAgICA8L1N0eWxlZFRpdGxlPlxuICAgICAgICAgICAgPFN0eWxlZFRpdGxlIGNsYXNzTmFtZT1cImJvdHRvbS13aWRnZXRfX3ktYXhpc1wiPlxuICAgICAgICAgICAgICA8Q2VudGVyRmxleGJveCBjbGFzc05hbWU9XCJib3R0b20td2lkZ2V0X19pY29uXCI+XG4gICAgICAgICAgICAgICAgPExpbmVDaGFydCBoZWlnaHQ9XCIxNXB4XCIvPlxuICAgICAgICAgICAgICA8L0NlbnRlckZsZXhib3g+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLXdpZGdldF9fZmllbGQtc2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgPEZpZWxkU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgIGZpZWxkcz17dGhpcy55QXhpc0ZpZWxkc1NlbGVjdG9yKHRoaXMucHJvcHMpfVxuICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2VsZWN0ZWQtdGltZS13aWRnZXQtZmllbGRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZpbHRlci55QXhpcyA/IGZpbHRlci55QXhpcy5uYW1lIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgIC8vIG9uU2VsZWN0PXt2YWx1ZSA9PiBzZXRGaWx0ZXJQbG90KGVubGFyZ2VkSWR4LCB7eUF4aXM6IHZhbHVlfSl9XG4gICAgICAgICAgICAgICAgICBpbnB1dFRoZW1lPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcbiAgICAgICAgICAgICAgICAgIGVyYXNhYmxlXG4gICAgICAgICAgICAgICAgICBzaG93VG9rZW49e2ZhbHNlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9TdHlsZWRUaXRsZT5cbiAgICAgICAgICAgIDxBbmltYXRpb25TcGVlZFRvZ2dsZVxuICAgICAgICAgICAgICB1cGRhdGVBbmltYXRpb25TcGVlZD17KHNwZWVkKSA9PiB1cGRhdGVBbmltYXRpb25TcGVlZChlbmxhcmdlZElkeCwgc3BlZWQpfVxuICAgICAgICAgICAgICBzcGVlZD17ZmlsdGVyLnNwZWVkfS8+XG4gICAgICAgICAgPC9Ub3BTZWN0aW9uV3JhcHBlcj5cbiAgICAgICAgICA8VGltZVJhbmdlRmlsdGVyXG4gICAgICAgICAgICBmaWx0ZXI9e2ZpbHRlcn1cbiAgICAgICAgICAgIHNldEZpbHRlcj17dmFsdWUgPT4gc2V0RmlsdGVyKGVubGFyZ2VkSWR4LCAndmFsdWUnLCB2YWx1ZSl9XG4gICAgICAgICAgICBpc0FueUZpbHRlckFuaW1hdGluZz17aXNBbnlGaWx0ZXJBbmltYXRpbmd9XG4gICAgICAgICAgICB1cGRhdGVBbmltYXRpb25TcGVlZD17KHNwZWVkKSA9PiB1cGRhdGVBbmltYXRpb25TcGVlZChlbmxhcmdlZElkeCwgc3BlZWQpfVxuICAgICAgICAgICAgdG9nZ2xlQW5pbWF0aW9uPXsoKSA9PiB0b2dnbGVBbmltYXRpb24oZW5sYXJnZWRJZHgpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9XaWRnZXRDb250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBUaW1lV2lkZ2V0RmFjdG9yeSA9ICgpID0+IFRpbWVXaWRnZXQ7XG5leHBvcnQgZGVmYXVsdCBUaW1lV2lkZ2V0RmFjdG9yeTtcbiJdfQ==