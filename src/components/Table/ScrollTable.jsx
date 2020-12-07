import React from 'react';
import { MDBDataTableV5,MDBDataTable,MDBTableHead,MDBTableBody } from 'mdbreact';
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import './ScrollTable.styles.css';
const TablePage = ({ columns, rows }) => {
  var data = {
    columns: columns,
    rows: rows
  }
  return (
    // <MDBDataTableV5
    //   hover
    //   striped
    //   data={data}
    //   responsive
    //   searchTop
    //   hover
    //   info={false}
    //   paging={false}
    //   scrollY
    //   maxHeight="40vh"
    //   small
    //   searchBottom={false}
    // />
    <MDBDataTable  maxHeight="50vh" scrollY paging={false} reponsive small bordered data={data}/>
    //             <MDBTableHead columns={columns} />
    //             <MDBTableBody rows={rows} />
    // </MDBTable>
  );
};

export default TablePage;