import React from 'react'
import {
    Grid
} from '@material-ui/core';
import { MDBBtn } from "mdbreact";
import FormInput from 'src/components/FormInput';
import FormDialog from './FormDialog';

function Content({ Search, handleChange, data, setError }) {
    const refresh = () => {
        Search();
    }
    return (
        <>
            <form onSubmit={Search}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={4}>
                        <FormInput
                            label="Search"
                            name="search"
                            value={data.search}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <FormDialog refresh={refresh} setError={setError} />
                    </Grid>
                    <Grid item xs={2}>
                        <MDBBtn color="info" type="submit">
                            Search Inventory
                    </MDBBtn >
                    </Grid>
                </Grid>

            </form>
        </>
    )
}

export default Content

{/* <Grid container spacing={2}>
<Grid item xs={4}>
<FormDialog refresh={refresh}/>
</Grid>
</Grid>  */}