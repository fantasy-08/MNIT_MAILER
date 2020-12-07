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
        label: 'SKU',
        field: 'sku',
    },
    {
        label: 'Name',
        field: 'name',
    },
    {
        label: 'Category',
        field: 'categoryid',
    },
    {
        label: 'Raw Material',
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
    category: "",
    sku: '',
    raw_material: []
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
    const [categorydata, setCategorydata] = useState([]);
    const [rawdata, setRawdata] = useState([]);
    const [error, setError] = useState(INITIAL_ERROR);
    const [row1, setRow1] = useState([])
    useEffect(() => {
        function getData() {
            const url = "https://apogee.makeitfar.com/api/category-search";
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    name: ""
                })
            })
                .then(res => res.json())
                .then((res) => {
                    var data = []
                    res.forEach(item => {
                        data.push({
                            id: item.id,
                            category: item.name
                        })
                    })
                    setCategorydata(data)
                })
                .catch((err) => console.log(err))
        }
        function getRaw() {
            const url = "https://apogee.makeitfar.com/api/raw-search";
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    name: ""
                })
            })
                .then(res => res.json())
                .then((res) => {
                    var data = []
                    res.forEach(item => {
                        data.push({
                            id: item.id,
                            name: item.name,
                            categoryid: item.categoryid
                        })
                    })
                    setRawdata(data)
                })
                .catch((err) => setError({ message: err.message, color: "error", val: true }))
        }
        getData();
        getRaw();
    }, [])
    const handleAddProduct = (data, Info) => {
        //adding the new Product
        setError({ message: "Please Wait", color: "info", val: true });
        //call the API
        function AddNewProductAPI() {
            const url = "https://apogee.makeitfar.com/api/products";
            var raw_material_array = []
            data.raw_material.forEach((item) => {
                raw_material_array.push(item.id)
            })
            var bodyAPI = {
                name: data.name,
                sku: data.sku,
                categoryid: CgetID(data.category),
                raws: raw_material_array
            }
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(bodyAPI)
            })
                .then(res => res.json())
                .then((res) => {
                    console.log(res);
                    if (res.code === "internal") {
                        setError({ message: res.message, color: "error", val: true })
                    }
                    else
                        setError({ message: 'Successfully Added', color: 'success', val: true })
                })
                .catch((err) => setError({ message: err, color: "error", val: true }));
        }
        AddNewProductAPI();
        handleSearchSubmit(Info);
    }
    const handleSearchSubmit = (data) => {
        setInfo(data);
        function SearchProductAPI() {
            const url = "https://apogee.makeitfar.com/api/products-search";
            var raw_material_array = []
            data.raw_material.forEach((item) => {
                raw_material_array.push(item.id)
            })
            var bodyAPI = {
                name: data.name,
                sku: data.sku,
                // categoryid: CgetID(data.category),
                // raws: raw_material_array
            }
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(bodyAPI)
            })
                .then(res => res.json())
                .then((res) => {
                    console.log(res);
                    if (res.code === "internal") {
                        setError({ message: res.message, color: "error", val: true })
                    }
                    else
                    {
                        var Data = []
                        res.forEach(item => {
                            var temp = {
                                id: item.id,
                                sku: item.sku,
                                name: item.name,
                                categoryid: CgetName(item.categoryid),
                                rm:"To be added soon"
                            }
                            Data.push(temp);
                        })
                        setRow1(Data);
                    }                        
                })
                .catch((err) => setError({ message: err, color: "error", val: true }));
        }
        SearchProductAPI();
        //set rowP after search is pressed
    }
    function CgetID(name) {
        for (var i = 0; i < categorydata.length; i++) {
            var item = categorydata[i];
            if (item.category == name) {
                return item.id;
            }
        }
        return -1;
    }
    function CgetName(_id) {
        for (var i = 0; i < categorydata.length; i++) {
            var item = categorydata[i];
            if (item.id == _id) {
                return item.category;
            }
        }
        return "-";
    }
    function RgetID(name) {
        for (var i = 0; i < rawdata.length; i++) {
            var item = rawdata[i];
            if (item.name == name) {
                return item.id;
            }
        }
        return -1;
    }
    function RgetName(_id) {
        for (var i = 0; i < rawdata.length; i++) {
            var item = rawdata[i];
            if (item.id == _id) {
                return item.name;
            }
        }
        return "";
    }
    function displayTable()
    {
        if (info.name !== '') return false;
        if (info.category !== '') return false;
        if (info.sku !== '') return false;
        if (info.raw_material.length) return false;
        return true;
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
                        <Typography variant="h3">Products</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Index handleSearchSubmit={handleSearchSubmit} handleAddProduct={handleAddProduct} categorydata={categorydata} rawdata={rawdata} />
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