import React from 'react'
import Page from 'src/components/Page';
import {
    Container,
    Grid
} from '@material-ui/core';
import Content from './Content';
import { Typography } from '@material-ui/core';
import Table from './Table/Index';
import SnackBar from 'src/components/SnackBar';

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
        label: 'Address',
        field: 'address',
    }
]
const INITIAL_ERROR = {
    message: '',
    color: '',
    val: false
}
function Index() {
    const [row, setRow] = React.useState([]);
    const [error, setError] = React.useState(INITIAL_ERROR);
    const Search = (info) => {
        console.log(info)
        if (info.name === '') {
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
    }
    return (
        <Page title="Customers">
        <SnackBar data={error} />
            <Container maxWidth={true}>
                <Grid
                    container
                    spacing={2}
                    direction="column"
                >
                    <Grid item xs={12}>
                        <br />
                        <Typography variant="h3">Customers</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Content Search={Search} setError={ setError}/>
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
    )
}

export default Index
