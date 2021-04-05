'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.reducePercentsInCalc = exports.selectionMaxWidth = exports.hasAtLeastOneRowAction = exports.actionsColumnWidth = exports.rowActions = exports.baseIconSize = exports.elementSize = void 0;

var elementSize = function elementSize(props) {
  return props.options.padding === 'default' ? 'medium' : 'small';
};

exports.elementSize = elementSize;

var baseIconSize = function baseIconSize(props) {
  return elementSize(props) === 'medium' ? 48 : 32;
};

exports.baseIconSize = baseIconSize;

var rowActions = function rowActions(props) {
  return props.actions.filter(function (a) {
    return a.position === 'row' || typeof a === 'function' || a.action;
  });
};

exports.rowActions = rowActions;

var actionsColumnWidth = function actionsColumnWidth(props) {
  return (
    Math.max(
      props.data.map(function (dataEntry) {
        return props.actions.reduce(function (actionCount, a) {
          if (!a.action) {
            return actionCount + a.position === 'row' ? 1 : 0;
          }

          return actionCount + (a.action(dataEntry).position === 'row' ? 1 : 0);
        }, 0);
      })
    ) * baseIconSize(props)
  );
};

exports.actionsColumnWidth = actionsColumnWidth;

var hasAtLeastOneRowAction = function hasAtLeastOneRowAction(props) {
  return props.actions && rowActions(props).length > 0;
};

exports.hasAtLeastOneRowAction = hasAtLeastOneRowAction;

var selectionMaxWidth = function selectionMaxWidth(props, maxTreeLevel) {
  return baseIconSize(props) + 9 * maxTreeLevel;
};

exports.selectionMaxWidth = selectionMaxWidth;

var reducePercentsInCalc = function reducePercentsInCalc(calc, fullValue) {
  var captureGroups = calc.match(/(\d*)%/);

  if (captureGroups && captureGroups.length > 1) {
    var percentage = captureGroups[1];
    return calc.replace(
      /\d*%/,
      ''.concat(fullValue * (percentage / 100), 'px')
    );
  }

  return calc.replace(/\d*%/, ''.concat(fullValue, 'px'));
};

exports.reducePercentsInCalc = reducePercentsInCalc;
