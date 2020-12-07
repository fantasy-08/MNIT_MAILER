import React,{useState} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
function AutoComplete({rows,setInfo}) {
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
    return (
        <>
            <Autocomplete
                style={{background:"white"}}
                fullWidth={true}
                id="combo-box-demo"
                size="small"
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
                renderInput={(params) => <TextField size="small" {...params} placeholder="Category" variant="outlined" />}
            />
        </>
    )
}

export default AutoComplete
// MuiInputBase-root MuiOutlinedInput-root MuiAutocomplete-inputRoot MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd MuiInputBase-marginDense MuiOutlinedInput-marginDense