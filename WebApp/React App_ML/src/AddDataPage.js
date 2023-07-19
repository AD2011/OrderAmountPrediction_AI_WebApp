import React, { useState } from 'react';
import { makeStyles, TextField, Button } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles(() => ({
  formContainer: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '10px',
  },
  buttonContainer: {
    display: 'flex',
    Size: '1.2rem',

  },
  textField: {
    width: '300px',
  },
}));

const AddDataPage = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    customerOrderId: '',
    salesOrg: '',
    distributionChannel: '',
    customerNumber: '',
    companyCode: '',
    orderCurrency: '',
    amountInUsd: '',
    orderCreationDate: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    axios
      .post('http://localhost:8080/h2h_milestone_3/AddServlet', formData)
      .then((response) => {
        // Handle successful response
        console.log('Data added successfully:', response.data);
        // Clear the form fields
        setFormData({
          customerOrderId: '',
          salesOrg: '',
          distributionChannel: '',
          customerNumber: '',
          companyCode: '',
          orderCurrency: '',
          amountInUsd: '',
          orderCreationDate: '',
        });
      })
      .catch((error) => {
        // Handle error
        console.error('Error adding data:', error);
      });
  };

  const handleClear = () => {
    // Clear the form fields
    setFormData({
      customerOrderId: '',
      salesOrg: '',
      distributionChannel: '',
      customerNumber: '',
      companyCode: '',
      orderCurrency: '',
      amountInUsd: '',
      orderCreationDate: '',
    });
  };

  return (
    <div className={classes.formContainer}>
      <TextField
        label="CUSTOMER ORDER ID"
        variant="filled"
        className={classes.textField}
        name="customerOrderId"
        value={formData.customerOrderId}
        onChange={handleChange}
      />
      <TextField
        label="SALES ORG"
        variant="filled"
        className={classes.textField}
        name="salesOrg"
        value={formData.salesOrg}
        onChange={handleChange}
      />
      <TextField
        label="DISTRIBUTION CHANNEL"
        variant="filled"
        className={classes.textField}
        name="distributionChannel"
        value={formData.distributionChannel}
        onChange={handleChange}
      />
      <TextField
        label="CUSTOMER NUMBER"
        variant="filled"
        className={classes.textField}
        name="customerNumber"
        value={formData.customerNumber}
        onChange={handleChange}
      />
      <TextField
        label="COMPANY CODE"
        variant="filled"
        className={classes.textField}
        name="companyCode"
        value={formData.companyCode}
        onChange={handleChange}
      />
      <TextField
        label="ORDER CURRENCY"
        variant="filled"
        className={classes.textField}
        name="orderCurrency"
        value={formData.orderCurrency}
        onChange={handleChange}
      />
      <TextField
        label="AMOUNT IN USD"
        variant="filled"
        className={classes.textField}
        name="amountInUsd"
        value={formData.amountInUsd}
        onChange={handleChange}
      />
      <TextField
        label="ORDER CREATION DATE"
        variant="filled"
        className={classes.textField}
        name="orderCreationDate"
        value={formData.orderCreationDate}
        onChange={handleChange}
      />
      <div className={classes.buttonContainer}>
        <Button variant="contained" style={{ backgroundColor: '#a9a9a9', flex: 1 }} onClick={handleAdd}>
          ADD
        </Button>
        <Button variant="contained" style={{ backgroundColor: '#a9a9a9', flex: 1 }} onClick={handleClear}>
          CLEAR
        </Button>
      </div>
    </div>
  );
};

export default AddDataPage;
