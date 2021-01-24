import * as actions from './actions';

export default function GlobalReducer(state, action) {
  switch (action.type) {
    /**
     * SET_DATA sets data
     * //TODO: add more notes
     * @param data the payload field in the action object
     */
    case actions.SET_DATA: {
      const datas = action.payload;
      return {
        ...state,
        selectedCount: 0,
        filtered: false,
        data: datas.map((row, index) => {
          row.tableData = { ...row.tableData, id: index };
          if (row.tableData.checked) {
            this.selectedCount++;
          }
          return row;
        })
      };
    }
    /**
     * default case returns the same state we got as a param
     */
    default: {
      return state;
    }
  }
}
