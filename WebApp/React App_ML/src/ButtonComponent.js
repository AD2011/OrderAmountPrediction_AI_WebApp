import React from 'react';
import { Button } from '@material-ui/core';

const ButtonComponent = ({ refclick, handleEditClick, handleDeleteClick, isRowSelected }) => {
  return (
    <div>
      <Button
        variant="contained"
        style={{ backgroundColor: '#fc7500', marginRight: '4px' }}
        onClick={refclick}
      >
        REFRESH DATA
      </Button>
      <Button
        variant="contained"
        style={{ backgroundColor: '#a9a9a9', marginRight: '4px' }}
        onClick={handleEditClick}
        disabled={!isRowSelected}
      >
        EDIT
      </Button>
      <Button
        variant="contained"
        style={{ backgroundColor: '#a9a9a9', marginRight: '4px' }}
        onClick={handleDeleteClick}
        disabled={!isRowSelected}
      >
        DELETE
      </Button>
      <Button variant="contained" style={{ backgroundColor: '#a9a9a9', marginRight: '4px' }}>
        PREDICT
      </Button>
    </div>
  );
};

export default ButtonComponent;
