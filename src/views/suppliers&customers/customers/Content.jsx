import React from 'react'
import {
    Grid
} from '@material-ui/core';
import FormInput from 'src/components/FormInput';
import { MDBBtn } from 'mdbreact';
import FormDialog from './FormDialog';

const INITIAL_STATE = {
    name: ''
}
function Content({Search,setError}) {
    const [data, setDate] = React.useState(INITIAL_STATE);
    const handleChange = (e) => {
        setDate((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    const handleSubmit = (e) => {
        if(e)
            e.preventDefault();
        Search(data);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={4}>
                        <FormInput
                            fullWidth
                            label="Name"
                            name="name"
                            variant="outlined"
                            value={data.name}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <label htmlFor="defaultFormLoginEmailEx" className="grey-text"></label>
                        <FormDialog title="Add Customer" handleSubmitS={handleSubmit} setError={setError} />
                    </Grid>
                    <Grid item xs={6}>
                        <MDBBtn color="info" type="submit" onClick={handleSubmit}>
                            Search Customer
                    </MDBBtn >
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default Content

{/* <MDBCard>
    <MDBCardImage
        className='black-text d-flex justify-content-center align-items-center flex-column pl-4 pt-1 rounded'
        tag='div'
    >
    </MDBCardImage>
    <MDBCardBody cascade className='text-center'>
        <br/>
        <Form/>
    </MDBCardBody>
</MDBCard> */}