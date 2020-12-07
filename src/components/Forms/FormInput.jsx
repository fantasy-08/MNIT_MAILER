import React from 'react'
// import TextField from '@material-ui/core/TextField';

function FormInput({ helperText, label, name, handleChange, value, type }) {
    const onChange1 = (ev) => {
        const val = ev.target.value;
        var e = {
            target: {
                name: { name },
                value: { val }
            }
        }
        console.log(ev.target.name);
        onChange(e);
    }
    return (
        <>
            <label>
                {label}
            </label>
            <input type="text" placeholder={label} name={name} id="defaultFormLoginEmailEx" className="form-control" value={value} onChange={handleChange} />

            {/* <TextField
                fullWidth
                helperText={helperText}
                label={label}
                name={name}
                onChange={handleChange}
                required
                value={value}
                variant={type} //filled standard
            />   */}
        </>
    )
}

export default FormInput
