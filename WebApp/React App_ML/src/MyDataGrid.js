import React, { useEffect, useState } from 'react';
import { DataGrid, GridPagination } from '@mui/x-data-grid';
import { Button, makeStyles, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import hrclogo from './hrclogo.svg';
import abclogo from './abclogo.svg';
import axios from 'axios';

import HomePage from './HomePage';
import AddDataPage from './AddDataPage';
import AnalyticsPage from './AnalyticsPage';
import Header from './Header';

const useStyles = makeStyles(() => ({
  root: {
    height: 400,
    width: '100%',
    backgroundColor: '#a9a9a9',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    position: 'relative',
    height: '60px',
    marginBottom: '1rem',
  },
  /*logo: {
    width: '150px',
    height: '50px',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '50%',
    backgroundColor: '#fff',
  },
  logo1: {
    width: '200px',
    height: '40px',
  },
  */
}));

const MyDataGrid = () => {
  const [rows, setRows] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  
  const [selectedRows, setSelectedRows] = useState([]);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:8080/h2h_milestone_3/DataLoadingServlet')
      .then((response) => {
        const data = response.data;
        setRows(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleEditClick = () => {
    setEditDialogOpen(true);
  };

  const handleDeleteClick = () => {
    setDeleteDialogOpen(true);
  };

  const handleEdit = () => {
    // Handle the edit functionality
    setEditDialogOpen(false);
  };

  const handleDelete = () => {
    // Handle the delete functionality
    setDeleteDialogOpen(false);
  };

  const closeEditDialog = () => {
    setEditDialogOpen(false);
  };

  const closeDeleteDialog = () => {
    setDeleteDialogOpen(false);
  };

  const isRowSelected = selectedRows && selectedRows.length > 0;
  //const isRowSelected = selectedRows.length > 0;

  const columns = [
    { field: 'SlNo', headerName: 'SI NO', width: 200 },
    { field: 'CustomerOrderId', headerName: 'CUSTOMER ORDER ID', width: 250 },
    { field: 'SalesOrg', headerName: 'SALES ORG', width: 200 },
    { field: 'distributionChannel', headerName: 'DISTRIBUTION CHANNEL', width: 250 },
    { field: 'CompanyCode', headerName: 'COMPANY CODE', width: 200 },
    { field: 'orderCreationDate', headerName: 'ORDER CREATION DATE', width: 200 },
    { field: 'orderAmount', headerName: 'ORDER AMOUNT', width: 250 },
    { field: 'orderCurrency', headerName: 'ORDER CURRENCY', width: 250 },
    { field: 'customerNumber', headerName: 'CUSTOMER NUMBER', width: 250 },
  ];

  const pageSize = 5;

  const getRowId = (row) => row.SlNo;

  

  


  const onSelectionModelChange = (newSelection) => {
    setSelectedRows(newSelection.selectionModel);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header /> {/* Add the Header component */}
      <Tabs value={selectedTab} onChange={handleTabChange} centered>
        <Tab label="Home" />
        <Tab label="Add Data" />
        <Tab label="Analytics" />
      </Tabs>
      {selectedTab === 0 && (
        <HomePage
          rows={rows}
          columns={columns}
          getRowId={getRowId}
          pageSize={pageSize}
          selectedRows={selectedRows}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
          isRowSelected={isRowSelected}
          onSelectionModelChange={onSelectionModelChange}
        />
      )}
      {selectedTab === 1 && <AddDataPage />}
      {selectedTab === 2 && <AnalyticsPage />}
      <Dialog open={editDialogOpen} onClose={closeEditDialog}>
        <DialogTitle>Edit Dialog</DialogTitle>
        <DialogContent>
          {/* Add your edit dialog content */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEdit}>Save</Button>
          <Button onClick={closeEditDialog}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={deleteDialogOpen} onClose={closeDeleteDialog}>
        <DialogTitle>Delete Dialog</DialogTitle>
        <DialogContent>
          {/* Add your delete dialog content */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete}>Delete</Button>
          <Button onClick={closeDeleteDialog}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MyDataGrid;
