import React, { useState, useEffect } from 'react';
import Page from 'src/components/Page';
import {
    Container,
    makeStyles,
    Grid,
    Typography
} from '@material-ui/core';
import Input from './Form/Input';
import Index from './Table/Index.jsx';
import SnackBar from 'src/components/SnackBar';
const column1 = [
    {
        label: 'ID',
        field: 'id',
    },
    {
        label: 'Name',
        field: 'name',
    },
    {
        label: 'Category',
        field: 'category',
    }
]
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
const INITIAL_STATE = {
    name: '',
    category: ''
}
const INITIAL_ERROR = {
    message: '',
    color: '',
    val: false
}
function RawMaterial() {
    const [info, setInfo] = useState(INITIAL_STATE)
    const [row, setRow] = useState([])
    const [categorydata, setCategorydata] = useState([]);
    const [error, setError] = useState(INITIAL_ERROR);
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
                .catch((err) => setError({ message: err.message, color: "error", val: true }))
        }
        getData();
    }, [])
    function getID(name) {
        for (var i = 0; i < categorydata.length; i++) {
            var item = categorydata[i];
            if (item.category == name) {
                return item.id;
            }
        }
        return -1;
    }
    function getName(_id) {
        for (var i = 0; i < categorydata.length; i++) {
            var item = categorydata[i];
            if (item.id == _id) {
                return item.category;
            }
        }
        return "";
    }
    const handleSearchSubmit = (data) => {
        setInfo(data);
        const Url = "https://apogee.makeitfar.com/api/raw-search";
        fetch(Url, {
            method: 'POST',
            body: JSON.stringify({
                name: info.name,
                categoryid: getID(info.category) //what this should be?
            })
        })
            .then(res => res.json())
            .then(response => {
                var temp = []
                const arr = response;
                if (arr)
                    arr.map((item) => {
                        console.log(getName(item.categoryid))
                        var T = {
                            id: item.id,
                            name: item.name,
                            category: getName(item.categoryid) //what this should be?
                        }
                        temp.push(T);
                    })
                setRow(temp);
            })
            .catch(err => setError({ message: err, color: "error", val: true }))
    }
    const classes = useStyles();
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
                        <Typography variant="h3">Raw Materials</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Input handleSearchSubmit={handleSearchSubmit} allcategory={categorydata} setError={setError} />
                    </Grid>
                    <Grid item xs={12}>
                        {
                            info === INITIAL_STATE ?
                                <></> :
                                <Index row1={row} column1={column1} />
                        }
                    </Grid>
                </Grid>
            </Container>
        </Page>
    )
}

export default RawMaterial;
