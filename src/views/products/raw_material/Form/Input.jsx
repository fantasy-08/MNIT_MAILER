import React, { useState } from 'react'
import {
    Grid
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import FormDialog from './FormDialog';
import { MDBBtn } from "mdbreact";
import FormInput from 'src/components/FormInput';
// do the map part here in handlesearchsubmitL
function Input({ handleSearchSubmit, allcategory,setError }) {
    const [info, setInfo] = useState(
        {
            name: "",
            category: ""
        }
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
        console.log(data);
        handleSearchSubmitL();
    }
    const handleSearchSubmitL = () => {
        //search submit is this function 
        handleSearchSubmit(info);
        setInfo({
            name: "",
            category: ""
        })
        setValue('');
        setInputValue('');
    }
    const handleSubmitF = (e) => {
        e.preventDefault();
        handleSearchSubmitL();
    }
    return (
        <>
            <form onSubmit={handleSubmitF}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={4}>
                        <FormInput
                            fullWidth
                            label="Name"
                            name="name"
                            variant="outlined"
                            value={info.name}
                            onChange={handleChange1}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <label>
                            Category
                    </label>
                        <Autocomplete
                            style={{ background: "white" }}
                            fullWidth={true}
                            size="small"
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
                            options={allcategory}
                            getOptionLabel={(option) => option.category}
                            renderInput={(params) => <TextField size="small" {...params} placeholder="Category" variant="outlined" />}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <label htmlFor="defaultFormLoginEmailEx" className="grey-text"></label>
                        <FormDialog title="Add Raw Material" handleSubmit={handleSubmit} allcategory={allcategory} setError={setError} />
                    </Grid>
                    <Grid item xs={6}>
                        <MDBBtn color="info" type="submit" onClick={handleSearchSubmitL}>
                            Search Raw material
                    </MDBBtn >
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default Input
