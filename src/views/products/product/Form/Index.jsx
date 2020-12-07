import React, { useState } from 'react'
import {
    Grid, OutlinedInput
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { MDBBtn } from 'mdbreact';
import FormDialog from './FormDialog';
import AutoCompleteMultiSelect from 'src/components/AutoCompleteMultiSelect';
import FormInput from 'src/components/FormInput';

function Index({ handleSearchSubmit,categorydata,rawdata,handleAddProduct}) {
    const INITIAL_STATE = {
        name: "",
        category: "",
        sku: '',
        raw_material: []
    }
    const [info, setInfo] = useState(
        INITIAL_STATE
    )
    const [value, setValue] = React.useState('');
    const [inputValue, setInputValue] = React.useState('');
    const handleChange = (name, value) => {
        setInfo((prev) => {
            return {
                ...prev,
                [name]: value.category
            }
        })
    }
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
        handleAddProduct(data,info);
    }
    const handleSearchSubmitL = () => {
        console.log(info)
        handleSearchSubmit(info);
        setInfo(INITIAL_STATE)
    }
    return (
        <>
            <form>
                <Grid container spacing={2} >   
                    <Grid item xs={12} sm={9}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={3}>
                                <FormInput
                                    label="SKU"
                                    name="sku"
                                    onChange={handleChange1}
                                    value={info.sku}
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                    <label >
                                    Category
                                    </label>
                                <Autocomplete
                                    style={{ background: "white" }}
                                    fullWidth={true}
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
                                    options={categorydata}
                                    getOptionLabel={(option) => option.category}
                                    renderInput={(params) => <TextField {...params} size="small" placeholder="Category" variant="outlined" />}
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <FormInput
                                    label="Name"
                                    name="name"
                                    value={info.name}
                                    onChange={handleChange1}
                                    value={info.name}
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <label >
                                    Raw Material
                                    </label>
                                <AutoCompleteMultiSelect
                                    handleChange={handleChange1}
                                    name="raw_material"
                                    data={rawdata}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormDialog title="Add Product" handleSubmit={handleSubmit} categorydata={categorydata} rawdata={rawdata}/>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <MDBBtn color="info" onClick={handleSearchSubmitL}>
                            Search Product
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
