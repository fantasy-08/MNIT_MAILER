import React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

function AutoCompleteMultiSelect({ handleChange, name, data,label }) {
    return (
        <>
            <label >
                {label}
            </label>
            <Autocomplete
                style={{background:"white"}}
                multiple
                onChange={(event, newValue) => {
                    var e = {
                        target: {
                            name: name ,
                            value: newValue
                        }
                    }
                    handleChange(e);
                }}
                id="tags-outlined"
                options={data}
                getOptionLabel={(option) => option.name}
                defaultValue={[]}
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                        placeholder="Raw Materials"
                        size="small"
                    />
                )}
            />
        </>
    )
}

export default AutoCompleteMultiSelect
