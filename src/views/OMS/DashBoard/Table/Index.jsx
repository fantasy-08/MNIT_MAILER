import React, { useState } from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import DataTable from './DataTable';

import { MDBCard, MDBCardBody, MDBCardImage } from
  'mdbreact';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Index = ({ row1, column1 }) => {
  const classes = useStyles();
  const [search, setSearch] = useState(
    {
      name: '',
      category: ''
    }
  )
  const [row, setRow] = useState(null);

  return (
    <Page
      className={classes.root}
      title="Account"
    >
      <Grid
      item
      xs={12}
    >
        <MDBCard>
          <MDBCardImage
            className='black-text d-flex justify-content-center align-items-left flex-column pl-4 pt-1 rounded'
            tag='div'
          >
            <br/>
            <h4>Inventory</h4>
          </MDBCardImage>
          <MDBCardBody cascade className='text-center'>
            <DataTable row={row1} col={column1} />
          </MDBCardBody>
        </MDBCard>
      </Grid>
    </Page >
  );
};

export default Index;