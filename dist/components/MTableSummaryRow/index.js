"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MTableSummaryRow = MTableSummaryRow;
exports["default"] = exports.styles = void 0;

var React = _interopRequireWildcard(require("react"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _core = require("@material-ui/core");

var _utils = require("../MTableCell/utils");

var _propTypes = _interopRequireDefault(require("prop-types"));

function MTableSummaryRow(_ref) {
  var data = _ref.data,
      columns = _ref.columns,
      currentData = _ref.currentData,
      renderSummaryRow = _ref.renderSummaryRow;

  if (!renderSummaryRow) {
    return null;
  }

  return /*#__PURE__*/React.createElement(_core.TableRow, null, columns.map(function (column, index) {
    var summaryColumn = renderSummaryRow({
      index: index,
      column: column,
      data: data,
      currentData: currentData,
      columns: columns
    });
    var cellAlignment = column.align !== undefined ? column.align : ['numeric', 'currency'].indexOf(column.type) !== -1 ? 'right' : 'left';
    var value = '';
    var style = (0, _utils.getStyle)({
      columnDef: column,
      scrollWidth: 0
    });

    if (summaryColumn && summaryColumn.value) {
      value = summaryColumn.value;
      style = summaryColumn.style;
    } else {
      value = summaryColumn;
    }

    return /*#__PURE__*/React.createElement(_core.TableCell, {
      key: index,
      style: style,
      align: cellAlignment
    }, value);
  }));
}

MTableSummaryRow.propTypes = {
  data: _propTypes["default"].array,
  currentData: _propTypes["default"].array,
  columns: _propTypes["default"].array,
  renderSummaryRow: _propTypes["default"].func
};

var styles = function styles(theme) {
  return {};
};

exports.styles = styles;

var _default = (0, _withStyles["default"])(styles)(MTableSummaryRow);

exports["default"] = _default;