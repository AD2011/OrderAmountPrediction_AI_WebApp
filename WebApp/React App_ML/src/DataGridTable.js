import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const DataGridTable = ({ rows, columns, getRowId, pageSize, onSelectionModelChange, selectionModel }) => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      getRowId={getRowId}
      pageSize={pageSize}
      checkboxSelection
      onSelectionModelChange={onSelectionModelChange}
      selectionModel={selectionModel}
    />
  );
};

export default DataGridTable;
