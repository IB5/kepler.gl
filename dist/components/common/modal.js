'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalFooter = exports.ModalTitle = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _class, _temp;

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 60%;\n  max-width: 960px;\n  padding: 40px 96px;\n  position: absolute;\n  top: 92px;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  background-color: #ffffff;\n  border-radius: 4px;\n  transition: ', ';\n  min-width: 600px;\n  overflow: hidden;\n  box-sizing: border-box;\n  margin-right: auto;\n  font-size: 12px;\n  color: ', ';\n  ', ';\n'], ['\n  width: 60%;\n  max-width: 960px;\n  padding: 40px 96px;\n  position: absolute;\n  top: 92px;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  background-color: #ffffff;\n  border-radius: 4px;\n  transition: ', ';\n  min-width: 600px;\n  overflow: hidden;\n  box-sizing: border-box;\n  margin-right: auto;\n  font-size: 12px;\n  color: ', ';\n  ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  display: flex;\n  justify-content: flex-end;\n  left: 0;\n  padding: 24px;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 10005;\n\n  :hover {\n    cursor: pointer;\n  }\n'], ['\n  color: ', ';\n  display: flex;\n  justify-content: flex-end;\n  left: 0;\n  padding: 24px;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 10005;\n\n  :hover {\n    cursor: pointer;\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: ', ';\n  color: ', ';\n  margin-bottom: 10px;\n  position: relative;\n  z-index: 10003;\n'], ['\n  font-size: ', ';\n  color: ', ';\n  margin-bottom: 10px;\n  position: relative;\n  z-index: 10003;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding-top: 36px;\n  z-index: 10001;\n'], ['\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding-top: 36px;\n  z-index: 10001;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  z-index: 10002;\n'], ['\n  position: relative;\n  z-index: 10002;\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  justify-content: flex-end;\n'], ['\n  display: flex;\n  justify-content: flex-end;\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 10000;\n  transition: ', ';\n\n  :focus {\n    outline: 0\n  }\n'], ['\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 10000;\n  transition: ', ';\n\n  :focus {\n    outline: 0\n  }\n']); // Copyright (c) 2018 Uber Technologies, Inc.
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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _icons = require('./icons');

var _styledComponents3 = require('./styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalContentWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.theme.labelColorLT;
}, function (props) {
  return props.cssStyle || '';
});

var CloseButton = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.theme.titleColorLT;
});

var ModalTitle = exports.ModalTitle = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.theme.modalTitleFontSize;
}, function (props) {
  return props.theme.modalTitleColor;
});

var StyledModalFooter = _styledComponents2.default.div(_templateObject4);

var ModalContent = _styledComponents2.default.div(_templateObject5);

var FooterActionWrapper = _styledComponents2.default.div(_templateObject6);

var defaultCancelButton = {
  link: true,
  large: true,
  children: 'Cancel'
};

var defaultConfirmButton = {
  large: true,
  width: '160px',
  children: 'Confirm'
};

var ModalFooter = exports.ModalFooter = function ModalFooter(_ref) {
  var cancel = _ref.cancel,
      confirm = _ref.confirm,
      cancelButton = _ref.cancelButton,
      confirmButton = _ref.confirmButton;

  var cancelButtonProps = (0, _extends3.default)({}, defaultCancelButton, cancelButton);
  var confirmButtonProps = (0, _extends3.default)({}, defaultConfirmButton, confirmButton);
  return _react2.default.createElement(
    StyledModalFooter,
    { className: 'modal--footer' },
    _react2.default.createElement(
      FooterActionWrapper,
      null,
      _react2.default.createElement(
        _styledComponents3.Button,
        (0, _extends3.default)({}, cancelButtonProps, { onClick: cancel }),
        cancelButtonProps.children
      ),
      _react2.default.createElement(
        _styledComponents3.Button,
        (0, _extends3.default)({}, confirmButtonProps, { onClick: confirm }),
        confirmButtonProps.children
      )
    )
  );
};

var ModalDialog = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ModalDialog, _Component);

  function ModalDialog() {
    (0, _classCallCheck3.default)(this, ModalDialog);
    return (0, _possibleConstructorReturn3.default)(this, (ModalDialog.__proto__ || Object.getPrototypeOf(ModalDialog)).apply(this, arguments));
  }

  (0, _createClass3.default)(ModalDialog, [{
    key: 'render',
    value: function render() {
      var props = this.props;

      return _react2.default.createElement(
        _reactModal2.default,
        (0, _extends3.default)({}, props, {
          ariaHideApp: false,
          style: {
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 10000,
              overflowY: 'auto',
              position: 'absolute'
            }
          }
        }),
        _react2.default.createElement(
          ModalContentWrapper,
          {
            className: 'modal--content',
            cssStyle: props.cssStyle,
            footer: props.footer
          },
          props.close ? _react2.default.createElement(
            CloseButton,
            { className: 'modal--close', onClick: props.close },
            _react2.default.createElement(_icons.Delete, { height: '14px' })
          ) : null,
          props.title ? _react2.default.createElement(
            ModalTitle,
            { className: 'modal--title' },
            props.title
          ) : null,
          _react2.default.createElement(
            ModalContent,
            { className: 'content' },
            props.children
          ),
          props.footer ? _react2.default.createElement(ModalFooter, {
            cancel: props.close,
            confirm: props.onConfirm,
            cancelButton: props.cancelButton,
            confirmButton: props.confirmButton
          }) : null
        )
      );
    }
  }]);
  return ModalDialog;
}(_react.Component), _class.propTypes = {
  footer: _propTypes2.default.bool,
  close: _propTypes2.default.func.isRequired,
  onConfirm: _propTypes2.default.func,
  onCancel: _propTypes2.default.func,
  confirmButton: _propTypes2.default.object,
  confirmButtonLabel: _propTypes2.default.string,
  cancelButton: _propTypes2.default.object,
  cancelButtonLabel: _propTypes2.default.string,
  cssStyle: _propTypes2.default.arrayOf(_propTypes2.default.any)
}, _class.defaultProps = {
  footer: false,
  close: function close() {},
  onConfirm: function onConfirm() {},
  onCancel: function onCancel() {},
  cancelButton: defaultCancelButton,
  confirmButton: defaultConfirmButton,
  cssStyle: []
}, _temp);


var StyledModal = (0, _styledComponents2.default)(ModalDialog)(_templateObject7, function (props) {
  return props.theme.transition;
});

exports.default = StyledModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9tb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbENvbnRlbnRXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInRyYW5zaXRpb24iLCJsYWJlbENvbG9yTFQiLCJjc3NTdHlsZSIsIkNsb3NlQnV0dG9uIiwidGl0bGVDb2xvckxUIiwiTW9kYWxUaXRsZSIsIm1vZGFsVGl0bGVGb250U2l6ZSIsIm1vZGFsVGl0bGVDb2xvciIsIlN0eWxlZE1vZGFsRm9vdGVyIiwiTW9kYWxDb250ZW50IiwiRm9vdGVyQWN0aW9uV3JhcHBlciIsImRlZmF1bHRDYW5jZWxCdXR0b24iLCJsaW5rIiwibGFyZ2UiLCJjaGlsZHJlbiIsImRlZmF1bHRDb25maXJtQnV0dG9uIiwid2lkdGgiLCJNb2RhbEZvb3RlciIsImNhbmNlbCIsImNvbmZpcm0iLCJjYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uUHJvcHMiLCJjb25maXJtQnV0dG9uUHJvcHMiLCJNb2RhbERpYWxvZyIsIm92ZXJsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6SW5kZXgiLCJvdmVyZmxvd1kiLCJwb3NpdGlvbiIsImZvb3RlciIsImNsb3NlIiwidGl0bGUiLCJvbkNvbmZpcm0iLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJvbkNhbmNlbCIsIm9iamVjdCIsImNvbmZpcm1CdXR0b25MYWJlbCIsInN0cmluZyIsImNhbmNlbEJ1dHRvbkxhYmVsIiwiYXJyYXlPZiIsImFueSIsImRlZmF1bHRQcm9wcyIsIlN0eWxlZE1vZGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bVZBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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VSxTQUF4QjtBQUFtQ2xDLGtCQUFNZ0I7QUFBekMsV0FiRjtBQWNHaEIsZ0JBQU1nQyxNQUFOLEdBQ0MsOEJBQUMsV0FBRDtBQUNFLG9CQUFRaEMsTUFBTWlDLEtBRGhCO0FBRUUscUJBQVNqQyxNQUFNbUMsU0FGakI7QUFHRSwwQkFBY25DLE1BQU1zQixZQUh0QjtBQUlFLDJCQUFldEIsTUFBTXVCO0FBSnZCLFlBREQsR0FPRztBQXJCTjtBQVpGLE9BREY7QUFzQ0Q7OztFQS9EdUJhLGdCLFVBQ2pCQyxTLEdBQVk7QUFDakJMLFVBQVFNLG9CQUFVQyxJQUREO0FBRWpCTixTQUFPSyxvQkFBVUUsSUFBVixDQUFlQyxVQUZMO0FBR2pCTixhQUFXRyxvQkFBVUUsSUFISjtBQUlqQkUsWUFBVUosb0JBQVVFLElBSkg7QUFLakJqQixpQkFBZWUsb0JBQVVLLE1BTFI7QUFNakJDLHNCQUFvQk4sb0JBQVVPLE1BTmI7QUFPakJ2QixnQkFBY2dCLG9CQUFVSyxNQVBQO0FBUWpCRyxxQkFBbUJSLG9CQUFVTyxNQVJaO0FBU2pCekMsWUFBVWtDLG9CQUFVUyxPQUFWLENBQWtCVCxvQkFBVVUsR0FBNUI7QUFUTyxDLFNBWVpDLFksR0FBZTtBQUNwQmpCLFVBQVEsS0FEWTtBQUVwQkMsU0FBTyxpQkFBTSxDQUFFLENBRks7QUFHcEJFLGFBQVcscUJBQU0sQ0FBRSxDQUhDO0FBSXBCTyxZQUFVLG9CQUFNLENBQUUsQ0FKRTtBQUtwQnBCLGdCQUFjVCxtQkFMTTtBQU1wQlUsaUJBQWVOLG9CQU5LO0FBT3BCYixZQUFVO0FBUFUsQzs7O0FBcUR4QixJQUFNOEMsY0FBYyxnQ0FBT3hCLFdBQVAsQ0FBZCxtQkFNVTtBQUFBLFNBQVMxQixNQUFNQyxLQUFOLENBQVlDLFVBQXJCO0FBQUEsQ0FOVixDQUFOOztrQkFhZWdELFciLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTggVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcbmltcG9ydCB7RGVsZXRlfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBNb2RhbENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDYwJTtcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgcGFkZGluZzogNDBweCA5NnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOTJweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudHJhbnNpdGlvbn07XG4gIG1pbi13aWR0aDogNjAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yTFR9O1xuICAke3Byb3BzID0+IHByb3BzLmNzc1N0eWxlIHx8ICcnfTtcbmA7XG5cbmNvbnN0IENsb3NlQnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGl0bGVDb2xvckxUfTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMjRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDAwNTtcblxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE1vZGFsVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubW9kYWxUaXRsZUZvbnRTaXplfTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubW9kYWxUaXRsZUNvbG9yfTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDAwMztcbmA7XG5cbmNvbnN0IFN0eWxlZE1vZGFsRm9vdGVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZy10b3A6IDM2cHg7XG4gIHotaW5kZXg6IDEwMDAxO1xuYDtcblxuY29uc3QgTW9kYWxDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDAwMjtcbmA7XG5cbmNvbnN0IEZvb3RlckFjdGlvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuYDtcblxuY29uc3QgZGVmYXVsdENhbmNlbEJ1dHRvbiA9IHtcbiAgbGluazogdHJ1ZSxcbiAgbGFyZ2U6IHRydWUsXG4gIGNoaWxkcmVuOiAnQ2FuY2VsJ1xufTtcblxuY29uc3QgZGVmYXVsdENvbmZpcm1CdXR0b24gPSB7XG4gIGxhcmdlOiB0cnVlLFxuICB3aWR0aDogJzE2MHB4JyxcbiAgY2hpbGRyZW46ICdDb25maXJtJ1xufTtcblxuZXhwb3J0IGNvbnN0IE1vZGFsRm9vdGVyID0gKHtcbiAgY2FuY2VsLFxuICBjb25maXJtLFxuICBjYW5jZWxCdXR0b24sXG4gIGNvbmZpcm1CdXR0b25cbn0pID0+IHtcbiAgY29uc3QgY2FuY2VsQnV0dG9uUHJvcHMgPSB7Li4uZGVmYXVsdENhbmNlbEJ1dHRvbiwgLi4uY2FuY2VsQnV0dG9ufTtcbiAgY29uc3QgY29uZmlybUJ1dHRvblByb3BzID0gey4uLmRlZmF1bHRDb25maXJtQnV0dG9uLCAuLi5jb25maXJtQnV0dG9ufTtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkTW9kYWxGb290ZXIgY2xhc3NOYW1lPVwibW9kYWwtLWZvb3RlclwiPlxuICAgICAgPEZvb3RlckFjdGlvbldyYXBwZXI+XG4gICAgICAgIDxCdXR0b24gey4uLmNhbmNlbEJ1dHRvblByb3BzfSBvbkNsaWNrPXtjYW5jZWx9PlxuICAgICAgICAgIHtjYW5jZWxCdXR0b25Qcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gey4uLmNvbmZpcm1CdXR0b25Qcm9wc30gb25DbGljaz17Y29uZmlybX0+XG4gICAgICAgICAge2NvbmZpcm1CdXR0b25Qcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0Zvb3RlckFjdGlvbldyYXBwZXI+XG4gICAgPC9TdHlsZWRNb2RhbEZvb3Rlcj5cbiAgKTtcbn1cblxuY2xhc3MgTW9kYWxEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGZvb3RlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25Db25maXJtOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY29uZmlybUJ1dHRvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjb25maXJtQnV0dG9uTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2FuY2VsQnV0dG9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNhbmNlbEJ1dHRvbkxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNzc1N0eWxlOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KVxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZm9vdGVyOiBmYWxzZSxcbiAgICBjbG9zZTogKCkgPT4ge30sXG4gICAgb25Db25maXJtOiAoKSA9PiB7fSxcbiAgICBvbkNhbmNlbDogKCkgPT4ge30sXG4gICAgY2FuY2VsQnV0dG9uOiBkZWZhdWx0Q2FuY2VsQnV0dG9uLFxuICAgIGNvbmZpcm1CdXR0b246IGRlZmF1bHRDb25maXJtQnV0dG9uLFxuICAgIGNzc1N0eWxlOiBbXVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7cHJvcHN9ID0gdGhpcztcbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgYXJpYUhpZGVBcHA9e2ZhbHNlfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIG92ZXJsYXk6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC41KScsXG4gICAgICAgICAgICB6SW5kZXg6IDEwMDAwLFxuICAgICAgICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPE1vZGFsQ29udGVudFdyYXBwZXJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC0tY29udGVudFwiXG4gICAgICAgICAgY3NzU3R5bGU9e3Byb3BzLmNzc1N0eWxlfVxuICAgICAgICAgIGZvb3Rlcj17cHJvcHMuZm9vdGVyfVxuICAgICAgICA+XG4gICAgICAgICAge3Byb3BzLmNsb3NlID8gKFxuICAgICAgICAgICAgPENsb3NlQnV0dG9uIGNsYXNzTmFtZT1cIm1vZGFsLS1jbG9zZVwiIG9uQ2xpY2s9e3Byb3BzLmNsb3NlfT5cbiAgICAgICAgICAgICAgPERlbGV0ZSBoZWlnaHQ9XCIxNHB4XCIgLz5cbiAgICAgICAgICAgIDwvQ2xvc2VCdXR0b24+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAge3Byb3BzLnRpdGxlID8gKFxuICAgICAgICAgICAgPE1vZGFsVGl0bGUgY2xhc3NOYW1lPVwibW9kYWwtLXRpdGxlXCI+e3Byb3BzLnRpdGxlfTwvTW9kYWxUaXRsZT5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8TW9kYWxDb250ZW50IGNsYXNzTmFtZT1cImNvbnRlbnRcIj57cHJvcHMuY2hpbGRyZW59PC9Nb2RhbENvbnRlbnQ+XG4gICAgICAgICAge3Byb3BzLmZvb3RlciA/IChcbiAgICAgICAgICAgIDxNb2RhbEZvb3RlclxuICAgICAgICAgICAgICBjYW5jZWw9e3Byb3BzLmNsb3NlfVxuICAgICAgICAgICAgICBjb25maXJtPXtwcm9wcy5vbkNvbmZpcm19XG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbj17cHJvcHMuY2FuY2VsQnV0dG9ufVxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uPXtwcm9wcy5jb25maXJtQnV0dG9ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9Nb2RhbENvbnRlbnRXcmFwcGVyPlxuICAgICAgPC9Nb2RhbD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IFN0eWxlZE1vZGFsID0gc3R5bGVkKE1vZGFsRGlhbG9nKWBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDAwMDtcbiAgdHJhbnNpdGlvbjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50cmFuc2l0aW9ufTtcblxuICA6Zm9jdXMge1xuICAgIG91dGxpbmU6IDBcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkTW9kYWw7XG4iXX0=