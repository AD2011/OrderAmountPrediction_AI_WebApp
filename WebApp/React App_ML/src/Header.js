import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import abclogo from './abclogo.svg';
import hrclogo from './hrclogo.svg';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  header: {
    position: 'relative',
    height: '60px',
    marginBottom: '1rem',
    backgroundColor: '#fff',
  },
  logo: {
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
  invoiceText: {
    position: 'absolute',
    top: '60px', 
    left: '0', 
    backgroundColor: '#fff',
    color: 'red',
    padding: '10px',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <img src={abclogo} alt="abcLogo" className={classes.logo1} />
      <Typography variant="h6" className={classes.invoiceText}>
        Invoice List
      </Typography>
      <img src={hrclogo} alt="hrcLogo" className={classes.logo} />

    </div>
  );
};

export default Header;
