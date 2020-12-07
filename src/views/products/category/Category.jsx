import React, { useState, useEffect } from 'react';
import Page from 'src/components/Page';
import {
    Container,
    makeStyles,
    Grid,
    Typography
} from '@material-ui/core';
import Input from './Form/Input';
import Table from './Table/Index';
// import SnackBar from 'src/components/SnackBar';
import SnackBar from 'src/components/SnackBar';
const column = [
    {
        label: 'ID',
        field: 'id',
        width: 120
    },
    {
        label: 'Category',
        field: 'category'
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
const INITIAL_ERROR = {
    message: '',
    color: '',
    val:false
}
const Category = () => {
    const classes = useStyles();
    const [Row, setRow] = useState([]);
    const [search, setSearch] = useState('');
    const [orRow, setOrRow] = useState([]);
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
                    setOrRow(data)
                })
                .catch((err) => console.log(err))
        }
        getData();
    }, [Row]);

    const Update = (info) => {
        setError({
            message: 'Please Wait',
            color: 'info',
            val:true
        })
        function getData() {
            const url = "https://apogee.makeitfar.com/api/category";
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    name: info
                })
            })
                .then(res => res.json())
                .then((res) => {
                    console.log(res);
                    if (res.code === "internal")
                    {
                        setError({ message: res.message, color: "error",val:true })
                    }
                    else
                        setError({message:'Successfully Added',color:'success',val:true})
                })
                .catch((err) => setError({ message: err, color: "error",val:true }));
        }
        getData();
        setSearch('');
        setRow([]);
    }

    const handleSearch = (e) => {
        var T = e.target.value;
        setSearch(T);
        if (T == "") {
            setRow([]);
        }
        else {
            var temp = []
            T = T.toLowerCase();
            orRow.forEach((item) => {
                var name = item.category.toLowerCase()
                var Chk = name.includes(T);
                if (Chk) {
                    temp.push(item);
                }
            })
            setRow(temp);
        }
    }

    return (
        <Page className={classes.root} title="Category">
            <SnackBar data={error}/>
            <Container maxWidth={false}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h3">Category</Typography>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <Input Update={Update} handleChange={handleSearch} search={search} setError={setError} />
                    </Grid>
                    <Grid item xs={12} >
                        {
                            search == '' ?
                                <></> :
                                <Table row1={Row} column1={column} />
                        }
                    </Grid>
                </Grid>
            </Container>
        </Page>
    );
};

export default Category;