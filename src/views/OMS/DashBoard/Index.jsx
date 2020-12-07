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

const columnP = [
    {
        label: 'ID',
        field: 'id',
    },
    {
        label: 'Customer Name',
        field: 'sku',
    },
    {
        label: 'Bill Number',
        field: 'name',
    },
    {
        label: 'Product Name',
        field: 'categoryid',
    },
    {
        label: 'Status',
        field: 'rm',
    }
]
const INITIAL_ERROR = {
    message: '',
    color: '',
    val: false
}
const INITIAL_STATE = {
    name: "",
    product: "",
    billno: '',
    startdate: '',
    enddata: ''
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
    const [row1, setRow1] = useState([])
    const [predata, setPredata] = useState({
        customer: [{category:'nf0'},{category:'nf1'},{category:'nf2'},{category:'nf3'}],
        product:[{name:'eshaan0'},{name:'eshaan1'},{name:'eshaan2'}]
    });
    useEffect(() => {
        //fetch from API to set customer and product;
    }, [])
    const handleAddProduct = (data, Info) => {
        //adding the new Product
        setError({ message: "Please Wait", color: "info", val: true });
        //call the API
        handleSearchSubmit(Info);
    }
    const handleSearchSubmit = (data) => {
        setInfo(data);
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
                        <Typography variant="h3">Order Management System</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Index handleSearchSubmit={handleSearchSubmit} handleAddOrder={handleAddProduct} predata={predata}/>
                    </Grid>
                    <Grid item xs={12}>
                        {!row1.length ?
                            <></> :
                            <Input rowP={row1} columnP={columnP} />
                        }
                    </Grid>
                </Grid>
            </Container>
        </Page>
    )
}

export default Product;