import React, { useState } from 'react'
import {
    Grid,
} from '@material-ui/core';
import { MDBBtn } from 'mdbreact';
import FormDialog from './FormDialog';
import FormInput from 'src/components/FormInput';
import DatePicker from 'src/components/Forms/DatePicker';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import AutoCompleteMultiSelect from 'src/components/AutoCompleteMultiSelect';

function Index({ handleSearchSubmit, handleAddOrder, predata }) {
    const INITIAL_STATE = {
        name: "",
        product: [],
        billno: '',
        startdate: '',
        enddate: ''
    }
    const [info, setInfo] = useState(
        INITIAL_STATE
    )
    const [value, setValue] = React.useState('');
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
    const handleSubmit = (data) => {
        // console.log(data);
        handleAddOrder(data, info);
    }
    const handleSearchSubmitL = () => {
        console.log(info)
        handleSearchSubmit(info);
        setInfo(INITIAL_STATE)
    }
    const Search = (e) => {
        e.preventDefault();
        handleSearchSubmitL();
        setValue('')
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
                                <label>Customer Name</label>
                                <Autocomplete
                                    style={{ background: "white" }}
                                    fullWidth={true}
                                    id="combo-box-demo"
                                    size="small"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                        if (newValue)
                                            handleChange("name", newValue);
                                    }}
                                    options={predata.customer}
                                    getOptionLabel={(option) => option.category}
                                    renderInput={(params) => <TextField size="small" {...params} placeholder="Category" variant="outlined" />}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <AutoCompleteMultiSelect
                                    handleChange={handleChange1}
                                    name="product"
                                    data={predata.product}
                                    label="Product"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormInput
                                    label="Bill Number"
                                    name="billno"
                                    onChange={handleChange1}
                                    value={info.billno}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <label>Start Date</label>
                                <DatePicker handleChange={handleChange1} name="startdate" value={info.startdate} />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <label>End Date</label>
                                <DatePicker handleChange={handleChange1} name="enddate" value={info.enddate} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormDialog title="Add Product" handleSubmit={handleSubmit} predata={predata}/>
                    </Grid>
                    <Grid item xs={12} sm={2}>
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

/*
<>
        <Grid container spacing={2} alignItems="center"
        justify="center"
        direction="column"
        style={{ minHeight: '5vh' }}>
        <br/>
        <Grid container spacing={4} alignItems="center" justify="center">
            <Grid item xs={4}>
                <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    fullWidth
                    label="SQU"
                    name="squ"
                    variant="outlined"
                />
            </Grid>
        </Grid>

        <Grid item xs={5}>
            <Autocomplete
                id="combo-box-demo"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    if (newValue)
                        handleChange("category", newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                options={rows}
                getOptionLabel={(option) => option.category}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Raw Materials" variant="outlined" />}
            />
        </Grid>
    </Grid>
    <br/>
    <Divider />
    <br/>
    <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '5vh' }}
        spacing={2}
    >

    <Grid item xs={3}>
        <Button variant="outlined" color="primary" onClick={handleSubmit}>
            Submit
        </Button>
    </Grid>
    </Grid>
        </>
*/
