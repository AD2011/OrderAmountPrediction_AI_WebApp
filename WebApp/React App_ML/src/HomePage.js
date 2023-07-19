import React from 'react';
import ButtonComponent from './ButtonComponent';
import DataGridTable from './DataGridTable';

const HomePage = ({
  rows,
  columns,
  getRowId,
  pageSize,
  selectedRows,
  onSelectionModelChange,
  refclick,
  handleEditClick,
  handleDeleteClick,
  isRowSelected,
}) => {
  return (
    <>
      <DataGridTable
        rows={rows}
        columns={columns}
        getRowId={getRowId}
        pageSize={pageSize}
        onSelectionModelChange={onSelectionModelChange}
        selectionModel={selectedRows}
      />
      <div>
        <ButtonComponent
          refclick={refclick}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
          isRowSelected={isRowSelected}
        />
      </div>
    </>
  );
};

export default HomePage;
