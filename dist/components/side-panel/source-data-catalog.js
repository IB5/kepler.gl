'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatasetTag = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  transition: ', ';\n'], ['\n  transition: ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  display: flex;\n  align-items: flex-start;\n\n  .source-data-arrow {\n    height: 16px;\n  }\n  :hover {\n    color: ', ';\n    cursor: ', ';\n\n    .dataset-action {\n      color: ', ';\n      opacity: 1;\n    }\n\n    .dataset-action:hover {\n      color: white;\n    }\n  }\n'], ['\n  color: ', ';\n  display: flex;\n  align-items: flex-start;\n\n  .source-data-arrow {\n    height: 16px;\n  }\n  :hover {\n    color: ', ';\n    cursor: ', ';\n\n    .dataset-action {\n      color: ', ';\n      opacity: 1;\n    }\n\n    .dataset-action:hover {\n      color: white;\n    }\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  color: ', ';\n  font-size: 11px;\n  letter-spacing: 0.2px;\n  overflow: auto;\n\n  .dataset-color {\n    flex-shrink: 0;\n    margin-top: 5px;\n  }\n\n  .dataset-name {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n'], ['\n  display: flex;\n  color: ', ';\n  font-size: 11px;\n  letter-spacing: 0.2px;\n  overflow: auto;\n\n  .dataset-color {\n    flex-shrink: 0;\n    margin-top: 5px;\n  }\n\n  .dataset-name {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  margin-left: 12px;\n  height: 16px;\n  opacity: 0;\n'], ['\n  margin-left: 12px;\n  height: 16px;\n  opacity: 0;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 11px;\n  color: ', ';\n  padding-left: 19px;\n'], ['\n  font-size: 11px;\n  color: ', ';\n  padding-left: 19px;\n']); // Copyright (c) 2018 Uber Technologies, Inc.
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

var _d3Format = require('d3-format');

var _styledComponents3 = require('../common/styled-components');

var _icons = require('../common/icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultRemoveDataset = function defaultRemoveDataset(datasetKey) {};
var numFormat = (0, _d3Format.format)(',');

var SourceDataCatelog = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.transition;
});

var DatasetTitle = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.clickable ? props.theme.textColorHl : props.theme.textColor;
}, function (props) {
  return props.clickable ? 'pointer' : 'auto';
}, function (props) {
  return props.theme.textColorHl;
});

var DatasetTagWrapper = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.theme.textColor;
});

var DataTagAction = _styledComponents2.default.div(_templateObject4);

var DataRowCount = _styledComponents2.default.div(_templateObject5, function (props) {
  return props.theme.subtextColor;
});

var DatasetTag = exports.DatasetTag = function DatasetTag(_ref) {
  var onClick = _ref.onClick,
      dataset = _ref.dataset;
  return _react2.default.createElement(
    DatasetTagWrapper,
    { className: 'source-data-tag', onClick: onClick },
    _react2.default.createElement(_styledComponents3.DatasetSquare, { className: 'dataset-color', color: dataset.color }),
    _react2.default.createElement(
      'div',
      { className: 'dataset-name' },
      dataset.label
    )
  );
};

var SourceDataCatalog = function SourceDataCatalog(_ref2) {
  var datasets = _ref2.datasets,
      showDatasetTable = _ref2.showDatasetTable,
      removeDataset = _ref2.removeDataset,
      _ref2$showDeleteDatas = _ref2.showDeleteDataset,
      showDeleteDataset = _ref2$showDeleteDatas === undefined ? false : _ref2$showDeleteDatas;
  return _react2.default.createElement(
    SourceDataCatelog,
    { className: 'source-data-catalog' },
    Object.values(datasets).map(function (dataset, index) {
      return _react2.default.createElement(
        _styledComponents3.SidePanelSection,
        { key: dataset.id },
        _react2.default.createElement(
          DatasetTitle,
          { className: 'source-data-title', clickable: Boolean(showDatasetTable) },
          _react2.default.createElement(DatasetTag, {
            dataset: dataset,
            onClick: showDatasetTable ? function () {
              return showDatasetTable(dataset.id);
            } : null
          }),
          showDatasetTable ? _react2.default.createElement(
            _styledComponents3.CenterFlexbox,
            { className: 'source-data-arrow' },
            _react2.default.createElement(_icons.ArrowRight, { height: '12px' })
          ) : null,
          showDatasetTable ? _react2.default.createElement(ShowDataTable, {
            id: dataset.id,
            showDatasetTable: showDatasetTable
          }) : null,
          showDeleteDataset ? _react2.default.createElement(RemoveDataset, {
            datasetKey: dataset.id,
            removeDataset: removeDataset
          }) : null
        ),
        showDatasetTable ? _react2.default.createElement(
          DataRowCount,
          { className: 'source-data-rows' },
          numFormat(dataset.allData.length) + ' rows'
        ) : null
      );
    })
  );
};

var ShowDataTable = function ShowDataTable(_ref3) {
  var id = _ref3.id,
      showDatasetTable = _ref3.showDatasetTable;
  return _react2.default.createElement(
    DataTagAction,
    {
      className: 'dataset-action show-data-table',
      'data-tip': true,
      'data-for': 'data-table-' + id
    },
    _react2.default.createElement(_icons.Table, { height: '16px', onClick: function onClick() {
        return showDatasetTable(id);
      } }),
    _react2.default.createElement(
      _styledComponents3.Tooltip,
      { id: 'data-table-' + id, effect: 'solid' },
      _react2.default.createElement(
        'span',
        null,
        'Show data table'
      )
    )
  );
};

var RemoveDataset = function RemoveDataset(_ref4) {
  var datasetKey = _ref4.datasetKey,
      _ref4$removeDataset = _ref4.removeDataset,
      removeDataset = _ref4$removeDataset === undefined ? defaultRemoveDataset : _ref4$removeDataset;
  return _react2.default.createElement(
    DataTagAction,
    {
      className: 'dataset-action remove-dataset',
      'data-tip': true,
      'data-for': 'delete-' + datasetKey
    },
    _react2.default.createElement(_icons.Trash, {
      height: '16px',
      onClick: function onClick(e) {
        e.stopPropagation();
        removeDataset(datasetKey);
      }
    }),
    _react2.default.createElement(
      _styledComponents3.Tooltip,
      { id: 'delete-' + datasetKey, effect: 'solid', type: 'error' },
      _react2.default.createElement(
        'span',
        null,
        'Remove dataset'
      )
    )
  );
};

exports.default = SourceDataCatalog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvc291cmNlLWRhdGEtY2F0YWxvZy5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UmVtb3ZlRGF0YXNldCIsIm51bUZvcm1hdCIsIlNvdXJjZURhdGFDYXRlbG9nIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInRyYW5zaXRpb24iLCJEYXRhc2V0VGl0bGUiLCJ0ZXh0Q29sb3IiLCJjbGlja2FibGUiLCJ0ZXh0Q29sb3JIbCIsIkRhdGFzZXRUYWdXcmFwcGVyIiwiRGF0YVRhZ0FjdGlvbiIsIkRhdGFSb3dDb3VudCIsInN1YnRleHRDb2xvciIsIkRhdGFzZXRUYWciLCJvbkNsaWNrIiwiZGF0YXNldCIsImNvbG9yIiwibGFiZWwiLCJTb3VyY2VEYXRhQ2F0YWxvZyIsImRhdGFzZXRzIiwic2hvd0RhdGFzZXRUYWJsZSIsInJlbW92ZURhdGFzZXQiLCJzaG93RGVsZXRlRGF0YXNldCIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsImluZGV4IiwiaWQiLCJCb29sZWFuIiwiYWxsRGF0YSIsImxlbmd0aCIsIlNob3dEYXRhVGFibGUiLCJSZW1vdmVEYXRhc2V0IiwiZGF0YXNldEtleSIsImUiLCJzdG9wUHJvcGFnYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OzttTUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFFQSxJQUFNQSx1QkFBdUIsU0FBdkJBLG9CQUF1QixhQUFjLENBQUUsQ0FBN0M7QUFDQSxJQUFNQyxZQUFZLHNCQUFPLEdBQVAsQ0FBbEI7O0FBRUEsSUFBTUMsb0JBQW9CQywyQkFBT0MsR0FBM0Isa0JBQ1U7QUFBQSxTQUFTQyxNQUFNQyxLQUFOLENBQVlDLFVBQXJCO0FBQUEs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LEVBQUY7QUFBQSxNQUFNUCxnQkFBTixTQUFNQSxnQkFBTjtBQUFBLFNBQ3BCO0FBQUMsaUJBQUQ7QUFBQTtBQUNFLGlCQUFVLGdDQURaO0FBRUUsc0JBRkY7QUFHRSxrQ0FBd0JPO0FBSDFCO0FBS0Usa0NBQUMsWUFBRCxJQUFPLFFBQU8sTUFBZCxFQUFxQixTQUFTO0FBQUEsZUFBTVAsaUJBQWlCTyxFQUFqQixDQUFOO0FBQUEsT0FBOUIsR0FMRjtBQU1FO0FBQUMsZ0NBQUQ7QUFBQSxRQUFTLG9CQUFrQkEsRUFBM0IsRUFBaUMsUUFBTyxPQUF4QztBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQU5GLEdBRG9CO0FBQUEsQ0FBdEI7O0FBYUEsSUFBTUssZ0JBQWdCLFNBQWhCQSxhQUFnQjtBQUFBLE1BQUVDLFVBQUYsU0FBRUEsVUFBRjtBQUFBLGtDQUFjWixhQUFkO0FBQUEsTUFBY0EsYUFBZCx1Q0FBOEJ4QixvQkFBOUI7QUFBQSxTQUNwQjtBQUFDLGlCQUFEO0FBQUE7QUFDRSxpQkFBVSwrQkFEWjtBQUVFLHNCQUZGO0FBR0UsOEJBQW9Cb0M7QUFIdEI7QUFLRSxrQ0FBQyxZQUFEO0FBQ0UsY0FBTyxNQURUO0FBRUUsZUFBUyxvQkFBSztBQUNaQyxVQUFFQyxlQUFGO0FBQ0FkLHNCQUFjWSxVQUFkO0FBQ0Q7QUFMSCxNQUxGO0FBWUU7QUFBQyxnQ0FBRDtBQUFBLFFBQVMsZ0JBQWNBLFVBQXZCLEVBQXFDLFFBQU8sT0FBNUMsRUFBb0QsTUFBSyxPQUF6RDtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQVpGLEdBRG9CO0FBQUEsQ0FBdEI7O2tCQW1CZWYsaUIiLCJmaWxlIjoic291cmNlLWRhdGEtY2F0YWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Zm9ybWF0fSBmcm9tICdkMy1mb3JtYXQnO1xuXG5pbXBvcnQge1NpZGVQYW5lbFNlY3Rpb24sIFRvb2x0aXAsIERhdGFzZXRTcXVhcmUsIENlbnRlckZsZXhib3h9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7VGFibGUsIFRyYXNoLCBBcnJvd1JpZ2h0fSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5cbmNvbnN0IGRlZmF1bHRSZW1vdmVEYXRhc2V0ID0gZGF0YXNldEtleSA9PiB7fTtcbmNvbnN0IG51bUZvcm1hdCA9IGZvcm1hdCgnLCcpO1xuXG5jb25zdCBTb3VyY2VEYXRhQ2F0ZWxvZyA9IHN0eWxlZC5kaXZgXG4gIHRyYW5zaXRpb246ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudHJhbnNpdGlvbn07XG5gO1xuXG5jb25zdCBEYXRhc2V0VGl0bGUgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAuc291cmNlLWRhdGEtYXJyb3cge1xuICAgIGhlaWdodDogMTZweDtcbiAgfVxuICA6aG92ZXIge1xuICAgIGNvbG9yOiAke3Byb3BzID0+XG4gICAgICBwcm9wcy5jbGlja2FibGUgPyBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbCA6IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gICAgY3Vyc29yOiAke3Byb3BzID0+IChwcm9wcy5jbGlja2FibGUgPyAncG9pbnRlcicgOiAnYXV0bycpfTtcblxuICAgIC5kYXRhc2V0LWFjdGlvbiB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgIC5kYXRhc2V0LWFjdGlvbjpob3ZlciB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBEYXRhc2V0VGFnV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBvdmVyZmxvdzogYXV0bztcblxuICAuZGF0YXNldC1jb2xvciB7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG5cbiAgLmRhdGFzZXQtbmFtZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG5gO1xuXG5jb25zdCBEYXRhVGFnQWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIGhlaWdodDogMTZweDtcbiAgb3BhY2l0eTogMDtcbmA7XG5cbmNvbnN0IERhdGFSb3dDb3VudCA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3VidGV4dENvbG9yfTtcbiAgcGFkZGluZy1sZWZ0OiAxOXB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IERhdGFzZXRUYWcgPSAoe29uQ2xpY2ssIGRhdGFzZXR9KSA9PiAoXG4gIDxEYXRhc2V0VGFnV3JhcHBlciBjbGFzc05hbWU9XCJzb3VyY2UtZGF0YS10YWdcIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICA8RGF0YXNldFNxdWFyZSBjbGFzc05hbWU9XCJkYXRhc2V0LWNvbG9yXCIgY29sb3I9e2RhdGFzZXQuY29sb3J9IC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhc2V0LW5hbWVcIj57ZGF0YXNldC5sYWJlbH08L2Rpdj5cbiAgPC9EYXRhc2V0VGFnV3JhcHBlcj5cbik7XG5cbmNvbnN0IFNvdXJjZURhdGFDYXRhbG9nID0gKHtcbiAgZGF0YXNldHMsXG4gIHNob3dEYXRhc2V0VGFibGUsXG4gIHJlbW92ZURhdGFzZXQsXG4gIHNob3dEZWxldGVEYXRhc2V0ID0gZmFsc2Vcbn0pID0+IChcbiAgPFNvdXJjZURhdGFDYXRlbG9nIGNsYXNzTmFtZT1cInNvdXJjZS1kYXRhLWNhdGFsb2dcIj5cbiAgICB7T2JqZWN0LnZhbHVlcyhkYXRhc2V0cykubWFwKChkYXRhc2V0LCBpbmRleCkgPT4gKFxuICAgICAgPFNpZGVQYW5lbFNlY3Rpb24ga2V5PXtkYXRhc2V0LmlkfT5cbiAgICAgICAgPERhdGFzZXRUaXRsZSBjbGFzc05hbWU9XCJzb3VyY2UtZGF0YS10aXRsZVwiIGNsaWNrYWJsZT17Qm9vbGVhbihzaG93RGF0YXNldFRhYmxlKX0+XG4gICAgICAgICAgPERhdGFzZXRUYWdcbiAgICAgICAgICAgIGRhdGFzZXQ9e2RhdGFzZXR9XG4gICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgc2hvd0RhdGFzZXRUYWJsZSA/ICgpID0+IHNob3dEYXRhc2V0VGFibGUoZGF0YXNldC5pZCkgOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7c2hvd0RhdGFzZXRUYWJsZSA/XG4gICAgICAgICAgICA8Q2VudGVyRmxleGJveCBjbGFzc05hbWU9XCJzb3VyY2UtZGF0YS1hcnJvd1wiPlxuICAgICAgICAgICAgICA8QXJyb3dSaWdodCBoZWlnaHQ9XCIxMnB4XCIgLz5cbiAgICAgICAgICAgIDwvQ2VudGVyRmxleGJveD4gOiBudWxsfVxuICAgICAgICAgIHtzaG93RGF0YXNldFRhYmxlID8gKFxuICAgICAgICAgICAgPFNob3dEYXRhVGFibGVcbiAgICAgICAgICAgICAgaWQ9e2RhdGFzZXQuaWR9XG4gICAgICAgICAgICAgIHNob3dEYXRhc2V0VGFibGU9e3Nob3dEYXRhc2V0VGFibGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIHtzaG93RGVsZXRlRGF0YXNldCA/IChcbiAgICAgICAgICAgIDxSZW1vdmVEYXRhc2V0XG4gICAgICAgICAgICAgIGRhdGFzZXRLZXk9e2RhdGFzZXQuaWR9XG4gICAgICAgICAgICAgIHJlbW92ZURhdGFzZXQ9e3JlbW92ZURhdGFzZXR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L0RhdGFzZXRUaXRsZT5cbiAgICAgICAge3Nob3dEYXRhc2V0VGFibGUgPyAoXG4gICAgICAgICAgPERhdGFSb3dDb3VudCBjbGFzc05hbWU9XCJzb3VyY2UtZGF0YS1yb3dzXCI+e2Ake251bUZvcm1hdChcbiAgICAgICAgICAgIGRhdGFzZXQuYWxsRGF0YS5sZW5ndGhcbiAgICAgICAgICApfSByb3dzYH08L0RhdGFSb3dDb3VudD5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4gICAgKSl9XG4gIDwvU291cmNlRGF0YUNhdGVsb2c+XG4pO1xuXG5jb25zdCBTaG93RGF0YVRhYmxlID0gKHtpZCwgc2hvd0RhdGFzZXRUYWJsZX0pID0+IChcbiAgPERhdGFUYWdBY3Rpb25cbiAgICBjbGFzc05hbWU9XCJkYXRhc2V0LWFjdGlvbiBzaG93LWRhdGEtdGFibGVcIlxuICAgIGRhdGEtdGlwXG4gICAgZGF0YS1mb3I9e2BkYXRhLXRhYmxlLSR7aWR9YH1cbiAgPlxuICAgIDxUYWJsZSBoZWlnaHQ9XCIxNnB4XCIgb25DbGljaz17KCkgPT4gc2hvd0RhdGFzZXRUYWJsZShpZCl9IC8+XG4gICAgPFRvb2x0aXAgaWQ9e2BkYXRhLXRhYmxlLSR7aWR9YH0gZWZmZWN0PVwic29saWRcIj5cbiAgICAgIDxzcGFuPlNob3cgZGF0YSB0YWJsZTwvc3Bhbj5cbiAgICA8L1Rvb2x0aXA+XG4gIDwvRGF0YVRhZ0FjdGlvbj5cbik7XG5cbmNvbnN0IFJlbW92ZURhdGFzZXQgPSAoe2RhdGFzZXRLZXksIHJlbW92ZURhdGFzZXQgPSBkZWZhdWx0UmVtb3ZlRGF0YXNldH0pID0+IChcbiAgPERhdGFUYWdBY3Rpb25cbiAgICBjbGFzc05hbWU9XCJkYXRhc2V0LWFjdGlvbiByZW1vdmUtZGF0YXNldFwiXG4gICAgZGF0YS10aXBcbiAgICBkYXRhLWZvcj17YGRlbGV0ZS0ke2RhdGFzZXRLZXl9YH1cbiAgPlxuICAgIDxUcmFzaFxuICAgICAgaGVpZ2h0PVwiMTZweFwiXG4gICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgcmVtb3ZlRGF0YXNldChkYXRhc2V0S2V5KTtcbiAgICAgIH19XG4gICAgLz5cbiAgICA8VG9vbHRpcCBpZD17YGRlbGV0ZS0ke2RhdGFzZXRLZXl9YH0gZWZmZWN0PVwic29saWRcIiB0eXBlPVwiZXJyb3JcIj5cbiAgICAgIDxzcGFuPlJlbW92ZSBkYXRhc2V0PC9zcGFuPlxuICAgIDwvVG9vbHRpcD5cbiAgPC9EYXRhVGFnQWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU291cmNlRGF0YUNhdGFsb2c7XG4iXX0=