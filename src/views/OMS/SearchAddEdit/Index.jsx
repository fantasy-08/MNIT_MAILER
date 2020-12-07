import React, { useState, useEffect } from 'react';
import Page from 'src/components/Page';
import {
    Container,
    makeStyles,
    Grid
} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Index from './Form/Index';
import Input from './Table/Input';
import SnackBar from 'src/components/SnackBar';
import {OMS} from 'src/LocalData/Category';

console.log(OMS);
const INITIAL_ERROR = {
    message: '',
    color: '',
    val: false
}
const INITIAL_STATE = {
    startdate: '',
    enddate: '',
    status:''
}
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    },
    productCard: {
        height: '100%'
    }
}));

function Product() {
    const classes = useStyles();
    const [info, setInfo] = useState(INITIAL_STATE);
    const [error, setError] = useState(INITIAL_ERROR);
    const [orderData,setOrderData]=useState([]);
    useEffect(() => {
        //fetch from API to set customer and product;
    }, [])
    const handleSearchSubmit = (data) => {
        setInfo(data);
        setOrderData(OMS);
    }
    return (
        <Page className={classes.root} title="Category">
            <SnackBar data={error} />
            <Container maxWidth={true}>
                <Grid
                    container
                    spacing={2}
                    direction="column"
                >
                    <Grid item xs={12}>
                        <Typography variant="h3">Search | Add | Edit</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Index handleSearchSubmit={handleSearchSubmit}/>
                    </Grid>
                    <Grid item xs={12}>
                        {
                            orderData.length?
                            <Input orderData={orderData}/>:
                            <></>
                        }
                    </Grid>
                </Grid>
            </Container>
        </Page>
    )
}

export default Product;