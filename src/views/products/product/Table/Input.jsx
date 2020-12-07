import React, { useState } from 'react';
import {
    makeStyles
} from '@material-ui/core';
import DataTable from './DataTable.jsx';
import { MDBCard, MDBCardBody, MDBCardImage } from
    'mdbreact';
  
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    }
}));

const Input = ({ rowP, columnP }) => {
    const classes = useStyles();
    const [row, setRow] = useState(rowP);
    return (
    <MDBCard>
          <MDBCardImage
            className='black-text d-flex justify-content-center align-items-left flex-column pl-4 pt-1 rounded'
            tag='div'
        >
            <br/>
            <h4>Products</h4>
          </MDBCardImage>
          <MDBCardBody cascade className='text-center'>
            <DataTable row={row} col={columnP}/>
          </MDBCardBody>
    </MDBCard>
    );
};

export default Input;
