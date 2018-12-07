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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvdGltZS13aWRnZXQuanMiXSwibmFtZXMiOlsiaW5uZXJQZFNpZGUiLCJXaWRnZXRDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwic2lkZVBhbmVsIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJzaWRlUGFuZWxCZyIsIlRvcFNlY3Rpb25XcmFwcGVyIiwibGFiZWxDb2xvciIsIlRhYnMiLCJUYWIiLCJhY3RpdmUiLCJ0ZXh0Q29sb3JIbCIsIlN0eWxlZFRpdGxlIiwiQ2VudGVyRmxleGJveCIsImV4dGVuZCIsInRleHRDb2xvciIsIkFuaW1hdGlvblNwZWVkVG9nZ2xlIiwidXBkYXRlQW5pbWF0aW9uU3BlZWQiLCJzcGVlZCIsIlRJTUVfQU5JTUFUSU9OX1NQRUVEIiwibWFwIiwibGFiZWwiLCJ2YWx1ZSIsIlRpbWVXaWRnZXQiLCJmaWVsZFNlbGVjdG9yIiwiZmllbGRzIiwieUF4aXNGaWVsZHNTZWxlY3RvciIsImZpbHRlciIsImYiLCJ0eXBlIiwiZW5sYXJnZWRJZHgiLCJlbmxhcmdlRmlsdGVyIiwiaXNBbnlGaWx0ZXJBbmltYXRpbmciLCJzZXRGaWx0ZXIiLCJzZXRGaWx0ZXJQbG90IiwidG9nZ2xlQW5pbWF0aW9uIiwibmFtZSIsIkNvbXBvbmVudCIsIlRpbWVXaWRnZXRGYWN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lRQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQSxJQUFNQSxjQUFjLEVBQXBCOztBQUVBLElBQU1DLGtCQUFrQkMsMkJB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QUFBQTtBQUFBLFlBQUssV0FBVSxzQkFBZjtBQUNFO0FBQUMsNkJBQUQ7QUFBQTtBQUNFO0FBQUMseUJBQUQ7QUFBQSxnQkFBYSxXQUFVLHNCQUF2QjtBQUNFO0FBQUMsZ0RBQUQ7QUFBQSxrQkFBZSxXQUFVLHFCQUF6QjtBQUNFLDhDQUFDLFlBQUQsSUFBTyxRQUFPLE1BQWQ7QUFERixlQURGO0FBSUU7QUFBQyxpREFBRDtBQUFBO0FBQWlCdUIsdUJBQU9TO0FBQXhCO0FBSkYsYUFERjtBQU9FLDBDQUFDLG9CQUFEO0FBQ0Usb0NBQXNCLDhCQUFDbEIsS0FBRDtBQUFBLHVCQUFXRCxzQkFBcUJhLFdBQXJCLEVBQWtDWixLQUFsQyxDQUFYO0FBQUEsZUFEeEI7QUFFRSxxQkFBT1MsT0FBT1QsS0FGaEI7QUFQRixXQURGO0FBWUUsd0NBQUMseUJBQUQ7QUFDRSxvQkFBUVMsTUFEVjtBQUVFLHVCQUFXO0FBQUEscUJBQVNNLFdBQVVILFdBQVYsRUFBdUIsT0FBdkIsRUFBZ0NSLEtBQWhDLENBQVQ7QUFBQSxhQUZiO0FBR0Usa0NBQXNCVSxvQkFIeEI7QUFJRSxrQ0FBc0IsOEJBQUNkLEtBQUQ7QUFBQSxxQkFBV0Qsc0JBQXFCYSxXQUFyQixFQUFrQ1osS0FBbEMsQ0FBWDtBQUFBLGFBSnhCO0FBS0UsNkJBQWlCO0FBQUEscUJBQU1pQixpQkFBZ0JMLFdBQWhCLENBQU47QUFBQTtBQUxuQjtBQVpGO0FBREYsT0FERjtBQXdCRDs7O0VBM0M2Qk8sZ0I7O0FBOENoQyxJQUFNQyxvQkFBb0IsU0FBcEJBLGlCQUFvQjtBQUFBLFNBQU1mLFVBQU47QUFBQSxDQUExQjtrQkFDZWUsaUIiLCJmaWxlIjoidGltZS13aWRnZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTggVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuXG5pbXBvcnQgRmllbGRTZWxlY3RvciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9maWVsZC1zZWxlY3Rvcic7XG5pbXBvcnQge1NlbGVjdFRleHRCb2xkLCBJY29uUm91bmRTbWFsbCwgQ2VudGVyRmxleGJveH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFRpbWVSYW5nZUZpbHRlciBmcm9tICdjb21wb25lbnRzL2ZpbHRlcnMvdGltZS1yYW5nZS1maWx0ZXInO1xuaW1wb3J0IHtDbG9zZSwgQ2xvY2ssIExpbmVDaGFydH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IHtUSU1FX0FOSU1BVElPTl9TUEVFRH0gZnJvbSAndXRpbHMvZmlsdGVyLXV0aWxzJztcbmNvbnN0IGlubmVyUGRTaWRlID0gMzI7XG5cbmNvbnN0IFdpZGdldENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy10b3A6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsLm1hcmdpbi50b3B9cHg7XG4gIHBhZGRpbmctcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsLm1hcmdpbi5yaWdodH1weDtcbiAgcGFkZGluZy1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsLm1hcmdpbi5ib3R0b219cHg7XG4gIHBhZGRpbmctbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWwubWFyZ2luLmxlZnR9cHg7ICBcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9cHg7XG5cbiAgLmJvdHRvbS13aWRnZXQtLWlubmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbEJnfTtcbiAgICBwYWRkaW5nOiAxMHB4ICR7aW5uZXJQZFNpZGV9cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5gO1xuXG5jb25zdCBUb3BTZWN0aW9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogJHtpbm5lclBkU2lkZSAqIDJ9cHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xuICBcbiAgLmJvdHRvbS13aWRnZXRfX3ktYXhpcyB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG4gIFxuICAuYm90dG9tLXdpZGdldF9fZmllbGQtc2VsZWN0IHtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5gO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuY29uc3QgVGFicyA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctcmlnaHQ6IDc2cHg7XG5gO1xuXG5jb25zdCBUYWIgPSBzdHlsZWQuZGl2YFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWRcbiAgICAke3Byb3BzID0+IChwcm9wcy5hY3RpdmUgPyBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbCA6ICd0cmFuc3BhcmVudCcpfTtcbiAgY29sb3I6ICR7cHJvcHMgPT5cbiAgcHJvcHMuYWN0aXZlID8gcHJvcHMudGhlbWUudGV4dENvbG9ySGwgOiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIGhlaWdodDogMjRweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBcbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbmNvbnN0IFN0eWxlZFRpdGxlID0gQ2VudGVyRmxleGJveC5leHRlbmRgXG4gIGZsZXgtZ3JvdzogMDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcblxuICAuYm90dG9tLXdpZGdldF9faWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIH1cbmA7XG5cbmNvbnN0IEFuaW1hdGlvblNwZWVkVG9nZ2xlID0gKHt1cGRhdGVBbmltYXRpb25TcGVlZCwgc3BlZWR9KSA9PiAoXG4gIDxUYWJzPlxuICAgIHtUSU1FX0FOSU1BVElPTl9TUEVFRC5tYXAoKHtsYWJlbCwgdmFsdWV9KSA9PiAoXG4gICAgICA8VGFiIGtleT17dmFsdWV9IGFjdGl2ZT17dmFsdWUgPT09IHNwZWVkfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVBbmltYXRpb25TcGVlZCh2YWx1ZSl9PntsYWJlbH08L1RhYj5cbiAgICApKX1cbiAgPC9UYWJzPlxuKTtcblxuZXhwb3J0IGNsYXNzIFRpbWVXaWRnZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBmaWVsZFNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuZmllbGRzO1xuICB5QXhpc0ZpZWxkc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IodGhpcy5maWVsZFNlbGVjdG9yLCBmaWVsZHMgPT5cbiAgICBmaWVsZHMuZmlsdGVyKGYgPT4gZi50eXBlID09PSAnaW50ZWdlcicgfHwgZi50eXBlID09PSAncmVhbCcpXG4gICk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGVubGFyZ2VkSWR4LFxuICAgICAgZW5sYXJnZUZpbHRlcixcbiAgICAgIGZpbHRlcixcbiAgICAgIGlzQW55RmlsdGVyQW5pbWF0aW5nLFxuICAgICAgc2V0RmlsdGVyLFxuICAgICAgc2V0RmlsdGVyUGxvdCxcbiAgICAgIHRvZ2dsZUFuaW1hdGlvbixcbiAgICAgIHVwZGF0ZUFuaW1hdGlvblNwZWVkLFxuICAgICAgd2lkdGhcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8V2lkZ2V0Q29udGFpbmVyIHdpZHRoPXt3aWR0aH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLXdpZGdldC0taW5uZXJcIj5cbiAgICAgICAgICA8VG9wU2VjdGlvbldyYXBwZXI+XG4gICAgICAgICAgICA8U3R5bGVkVGl0bGUgY2xhc3NOYW1lPVwiYm90dG9tLXdpZGdldF9fZmllbGRcIj5cbiAgICAgICAgICAgICAgPENlbnRlckZsZXhib3ggY2xhc3NOYW1lPVwiYm90dG9tLXdpZGdldF9faWNvblwiPlxuICAgICAgICAgICAgICAgIDxDbG9jayBoZWlnaHQ9XCIxNXB4XCIvPlxuICAgICAgICAgICAgICA8L0NlbnRlckZsZXhib3g+XG4gICAgICAgICAgICAgIDxTZWxlY3RUZXh0Qm9sZD57ZmlsdGVyLm5hbWV9PC9TZWxlY3RUZXh0Qm9sZD5cbiAgICAgICAgICAgIDwvU3R5bGVkVGl0bGU+XG4gICAgICAgICAgICA8QW5pbWF0aW9uU3BlZWRUb2dnbGVcbiAgICAgICAgICAgICAgdXBkYXRlQW5pbWF0aW9uU3BlZWQ9eyhzcGVlZCkgPT4gdXBkYXRlQW5pbWF0aW9uU3BlZWQoZW5sYXJnZWRJZHgsIHNwZWVkKX1cbiAgICAgICAgICAgICAgc3BlZWQ9e2ZpbHRlci5zcGVlZH0vPlxuICAgICAgICAgIDwvVG9wU2VjdGlvbldyYXBwZXI+XG4gICAgICAgICAgPFRpbWVSYW5nZUZpbHRlclxuICAgICAgICAgICAgZmlsdGVyPXtmaWx0ZXJ9XG4gICAgICAgICAgICBzZXRGaWx0ZXI9e3ZhbHVlID0+IHNldEZpbHRlcihlbmxhcmdlZElkeCwgJ3ZhbHVlJywgdmFsdWUpfVxuICAgICAgICAgICAgaXNBbnlGaWx0ZXJBbmltYXRpbmc9e2lzQW55RmlsdGVyQW5pbWF0aW5nfVxuICAgICAgICAgICAgdXBkYXRlQW5pbWF0aW9uU3BlZWQ9eyhzcGVlZCkgPT4gdXBkYXRlQW5pbWF0aW9uU3BlZWQoZW5sYXJnZWRJZHgsIHNwZWVkKX1cbiAgICAgICAgICAgIHRvZ2dsZUFuaW1hdGlvbj17KCkgPT4gdG9nZ2xlQW5pbWF0aW9uKGVubGFyZ2VkSWR4KX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvV2lkZ2V0Q29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgVGltZVdpZGdldEZhY3RvcnkgPSAoKSA9PiBUaW1lV2lkZ2V0O1xuZXhwb3J0IGRlZmF1bHQgVGltZVdpZGdldEZhY3Rvcnk7XG4iXX0=