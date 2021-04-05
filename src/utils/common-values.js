export const elementSize = (props) =>
  props.options.padding === 'default' ? 'medium' : 'small';

export const baseIconSize = (props) =>
  elementSize(props) === 'medium' ? 48 : 32;

export const rowActions = (props) =>
  props.actions.filter(
    (a) => a.position === 'row' || typeof a === 'function' || a.action
  );

export const actionsColumnWidth = (props) =>
  Math.max(
    props.data.map((dataEntry) =>
      props.actions.reduce((actionCount, a) => {
        if (!a.action) {
          return actionCount + a.position === 'row' ? 1 : 0;
        }

        return actionCount + (a.action(dataEntry).position === 'row' ? 1 : 0);
      }, 0)
    )
  ) * baseIconSize(props);

export const hasAtLeastOneRowAction = (props) => {
  return props.actions && rowActions(props).length > 0;
};

export const selectionMaxWidth = (props, maxTreeLevel) =>
  baseIconSize(props) + 9 * maxTreeLevel;

export const reducePercentsInCalc = (calc, fullValue) => {
  const captureGroups = calc.match(/(\d*)%/);
  if (captureGroups && captureGroups.length > 1) {
    const percentage = captureGroups[1];
    return calc.replace(/\d*%/, `${fullValue * (percentage / 100)}px`);
  }
  return calc.replace(/\d*%/, `${fullValue}px`);
};
