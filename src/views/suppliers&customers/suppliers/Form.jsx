import React, { useState } from 'react'
import { MDBBtn } from "mdbreact";
import {
    Container
} from '@material-ui/core';


function Form({ data, handleChange }) {
    return (
        <>
            <Container>
                <label>
                    Name
                    </label>
                <input type="text" placeholder="Name" className="form-control" name="name" value={data.name} onChange={handleChange} />
                <br />
                <label>
                    GST Number
                </label>
                <input type="number" placeholder="GST Number" className="form-control" name="gstno" value={data.gstno} onChange={handleChange} />
                <br />
                <label>
                    Address Line 1
                </label>
                <input type="text" placeholder="Address Line 1" className="form-control" name="adrl1" value={data.adrl1} onChange={handleChange} />
                <br />
                <label>
                    Address Line 2
                </label>
                <input type="text" placeholder="Address Line 2" className="form-control" name="adrl2" value={data.adrl2} onChange={handleChange} />
                <br />
                <label>
                    Address Line 3
                </label>
                <input type="text" placeholder="Address Line 3" className="form-control" name="adrl3" value={data.adrl3} onChange={handleChange} />
                <br />
            </Container>
        </>
    )
}

export default Form
