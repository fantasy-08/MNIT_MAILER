import React from 'react'
// import { Container } from '@material-ui/core';
function DropDown({ data ,handleChange}) {
    const handle = (event) => {
        var e = {
            target: {
                name: "name",
                value:event.target.value
            }
        }
        handleChange(e);
    }
    return (
        <>
            {/* <Container> */}
                <select className="browser-default custom-select" onChange={handle}>
                    <option>Choose Name</option>
                    {
                        data.map((item) => {
                            return <option value={item}>{item}</option>
                        })
                    }
                </select>
            {/* </Container> */}
        </>
    )
}

export default DropDown
