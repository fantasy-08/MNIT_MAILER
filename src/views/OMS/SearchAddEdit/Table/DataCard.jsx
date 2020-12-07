import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign:'left'
  },
});

export default function DataCard(details) {
  const classes = useStyles();
  const data=details.details;
  return (
    <Card className={classes.root} varient="outlined">
      <CardContent>
        <Typography variant="h5" component="h2" align="center">
            {data.name} 
       </Typography>
       <Typography variant="body1" component="h2">
            Customer Name: {data.cname} 
       </Typography>
       <Typography variant="body1" component="h2">
            Customer Name: {data.cname} 
       </Typography>
       <Typography variant="body1" component="h2">
            GST Number: {data.gstno} 
       </Typography>
       <Typography variant="body1" component="h2">
            Address: {data.address} 
       </Typography>
       <Typography variant="body1" component="h2">
            Raw Materials: 
            {
                data.raw_material.map((item)=> {return item+','})
            } 
       </Typography>

      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}