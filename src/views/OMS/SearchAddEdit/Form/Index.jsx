import React, { useState } from 'react'
import {
    Grid,
} from '@material-ui/core';
import { MDBBtn } from 'mdbreact';
import DatePicker from 'src/components/Forms/DatePicker';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
function Index({ handleSearchSubmit }) {
    const INITIAL_STATE = {
        startdate: '',
        enddate: '',
        status:''
    }
    const [info, setInfo] = useState(
        INITIAL_STATE
    )
    const [Value, setValue] = React.useState('');

    const status=[
        {
            name:'Order Received'
        },
        {
            name:'freight approved'
        },
        {
            name:'freight sent'
        },
        {
            name:'invoice sent'
        },
        {
            name:'Ewaybill received'
        },
        {
            name:'freight delivered'
        }
    ]
    const handleChange1 = (e) => {
        var name = e.target.name;
        var val = e.target.value;
        setInfo((prev) => {
            return {
                ...prev,
                [name]: val
            }
        })
    }
    const Search = (e) => {
        e.preventDefault();
        // console.log(info);
        handleSearchSubmit(info);
        setValue('')
        setInfo(INITIAL_STATE)
    }
    const handleChange = (name, val) => {
        setInfo((prev) => {
            return {
                ...prev,
                [name]: val
            }
        })
    }
    return (
        <>
            <form onSubmit={Search}>
                <Grid container spacing={2} >
                    <Grid item xs={12} sm={9}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={4}>
                                <label>Start Date</label>
                                <DatePicker handleChange={handleChange1} name="startdate" value={info.startdate} />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <label>End Date</label>
                                <DatePicker handleChange={handleChange1} name="enddate" value={info.enddate} />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <label>Status</label>
                                <Autocomplete
                                    style={{background:"white"}}
                                    fullWidth={true}
                                    id="combo-box-demo"
                                    size="small"
                                    value={info.status}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                        if (newValue)
                                            handleChange("status", newValue);
                                    }}
                                    options={status}
                                    getOptionLabel={(option) => option.name}
                                    renderInput={(params) => <TextField size="small" {...params} placeholder="Status" variant="outlined" />}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <MDBBtn color="info" type="submit">
                            Search Order
                        </MDBBtn >
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default Index

