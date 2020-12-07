import React from 'react'
import Page from 'src/components/Page';
import {
    Container,
    Grid
} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Content from './Content'
import Table from './Table/Index';
import SnackBar from 'src/components/SnackBar';
const INITIAL_ERROR = {
    message: '',
    color: '',
    val: false
}
const INITIAL_STATE = {
    search: ''
}
const column = [
    {
        label: 'ID',
        field: 'id',
    },
    {
        label: 'Name',
        field: 'name',
    }
    ,
    {
        label: 'Count',
        field: 'category',
    }
]
function Index() {
    const [data, setData] = React.useState(INITIAL_STATE)
    const [row, setRow] = React.useState([]);
    const [error, setError] = React.useState(INITIAL_ERROR);

    const search = (event) => {
        if (!event) {
            setData(INITIAL_STATE);
            return null;
        }
        event.preventDefault();
        console.log(data);
        // API Call
        if (data.search === '') {
            setRow([])
        }
        else {
            const url = 'https://reqres.in/api/users?page=2'
            fetch(url)
                .then(res => res.json())
                .then(response => {
                    var temp = []
                    response.data.forEach((item) => {
                        temp.push({
                            id: item.id,
                            name: item.first_name,
                            address: item.email
                        })
                    })
                    setRow(temp);
                })
                .catch(err => console.log(err))
        }
        setData(INITIAL_STATE);
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    return (
        <>
            <Page title="Category">
                <SnackBar data={error}/>
                <Container maxWidth={true}>
                    <Grid
                        container
                        spacing={2}
                    >
                        <Grid item xs={12}>
                            <br />
                            <Typography variant="h3">Inventory</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Content Search={search} handleChange={handleChange} data={data} setError={setError}/>
                        </Grid>
                        <Grid item xs={12}>
                            {
                                row.length ?
                                    <Table row1={row} column1={column} /> :
                                    <></>
                            }
                        </Grid>
                    </Grid>
                </Container>
            </Page>
        </>
    )
}

export default Index
