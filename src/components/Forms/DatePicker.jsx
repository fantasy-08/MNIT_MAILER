import React from "react";
import TextField from "@material-ui/core/TextField";

export default function DatePicker({ defaultValue, handleChange,name,value }) {

    return (
        <TextField
            style={{background:"white"}}
            fullWidth
            variant="outlined"
            type="date"
            defaultValue={defaultValue}
            size="small"
            name={name}
            value={value}
            onChange={handleChange}
        />
    );
}
