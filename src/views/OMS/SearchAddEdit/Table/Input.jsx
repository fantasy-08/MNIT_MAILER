import React, { useState } from 'react';
import {
    makeStyles,
    Container
} from '@material-ui/core';
import DataCard from './DataCard.jsx'
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

const Input = ({ orderData}) => {
    const classes = useStyles();
    return (
    <MDBCard>
          <MDBCardImage
            className='black-text d-flex justify-content-center align-items-left flex-column pl-4 pt-1 rounded'
            tag='div'
        >
            <br/>
            <h4>Order Detail</h4>
          </MDBCardImage>
          <MDBCardBody cascade className='text-center'>
            {
                orderData.map((item)=>{
                    return(
                    <> 
                    <Container>
                        <DataCard details={item}/>
                    </Container>
                    <br/>
                    </>
                    )
                })
            }
          </MDBCardBody>
    </MDBCard>
    );
};

export default Input;
