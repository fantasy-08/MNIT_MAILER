import React, { useState } from 'react';

import ReactVirtualizedTable from 'src/components/Table/TableY';

function DataTable({ row, col }) {
    return (
        <ReactVirtualizedTable rows={row} columns={col} />
    )
}

export default DataTable
