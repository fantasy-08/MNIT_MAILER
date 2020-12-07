import React from 'react'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import './TableY.styles.css';

function TableY({rows,columns}) {
    return (
        <>
            <MDBTable  maxHeight="50vh" scrollY reponsive small bordered>
                <MDBTableHead columns={columns} />
                <MDBTableBody rows={rows} />
            </MDBTable>
        </>
    )
}

export default TableY
