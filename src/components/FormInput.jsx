import React from 'react'

function FormInput({ label, name, value, onChange, type, step }) {
    const text = type ? type : "text";
    const jump = step ? step : '1'
    return (
        <>
            <label>
                {label}
            </label>
            <input type={text} placeholder={label} name={name} className="form-control" value={value} onChange={onChange} step={jump} />
        </>
    )
}

export default FormInput
