const defaultState = {
  /**
   * These props/flags seem to only be used in
   * material-table.js
   */
  applyFilters = false,
  applySearch = false,
  applySort = false,
  detailPanelType = 'multiple',
  lastEditingRow = undefined,
  parentFunc = null,
  treefiedDataLength = 0,
  groupedDataLength = 0,
  defaultExpanded = false,
  bulkEditChangedRows = {},
  groupedData = [],
  treefiedData = [],

  /**
   * !! Only used in this file
   * May either need to be part of global state
   * or removed entirely
   */
  lastDetailPanelRow = undefined,
  filteredData = [],
  searchedData = [],
  sortedData = [],
  pagedData = [],
  filtered = false,
  searched = false,
  grouped = false,
  treefied = false,
  sorted = false,
  paged = false,
  rootGroupsIndex = {},

  /**
   * These props are used in more than one
   * file and should prob be part of some
   * 'global' state or context.
   */
  // These should def be global
  data = [],
  columns = [],
  // used in: 'material-table.js', MTableHeader
  orderBy = -1,
  orderDirection = '',
  selectedCount = 0,
  // Used in: 'material-table.js', MTableBody
  bulkEditOpen = false,
  currentPage = 0,
  pageSize = 5,
  paging = true,
  // Used in: 'material-table.js', MTableToolbar
  searchText = '',
  // Used in: 'material-table.js', MTableBody, MTableBodyRow, MTableHeader
  treeDataMaxLevel = 0,
  // Used in many files (4+)
  renderData = [],
};

export default defaultState;
