import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MDBBtn } from 'mdbreact';
import FormInput from 'src/components/FormInput';
import DropDown from './DropDown';
import { Container, Grid } from '@material-ui/core';

export default function FormDialog({ refresh ,setError}) {
    const [searchdata, setSearchdata] = React.useState(
        []
    );
    const [searchinput, setSearchinput] = React.useState('')
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState(
        {
            name: '',
            count: ''
        }
    );

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = (event) => {
        event.preventDefault();
        setOpen(false);
        //Add to inventory
        setError({
            message: 'Please Wait',
            color: 'info',
            val:true
        })
        fetch('https://reqres.in/api/users', {
            method: 'POST',
            body: JSON.stringify({
                name: data.name,
                job: data.count
            })
        })
            .then(res => res.json())
            .then(response => {
                setError({
                    message: 'Successfully Added',
                    color: 'success',
                    val:true
                })
            })
            .catch(err => console.log(err))
        setData({
            name: '',
            count: ''
        });

        refresh();
    };

    const handleChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    const handleChange1 = (e) => {
        setSearchinput(e.target.value);
    }

    const FindNames = () => {
        //input in searchinput
        setSearchdata(['hello', 'world']);
        setSearchinput('');
    }

    const ResetNames = () => {
        setSearchdata([]);
    }
    return (
        <div>
            <form onSubmit={handleSave}>
                <MDBBtn color="primary" onClick={handleClickOpen} style={{ marginTop: "2.0rem" }}>
                    Add Inventory
                </MDBBtn>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
                    <DialogTitle id="form-dialog-title">Add New Inventory</DialogTitle>

                    <DialogContent dividers>
                        <Grid container spacing ={3}>
                            <Grid item xs={7}>
                                <label >
                                    Name
                                </label>
                                {
                                    !searchdata.length ?
                                        <input type="text" name="name" placeholder="Name" className="form-control" value={searchinput} onChange={handleChange1} />
                                        :
                                        <DropDown data={searchdata} handleChange={handleChange} />
                                }
                            </Grid>
                            <Grid xs={4} style={{paddingTop:"2.9rem",paddingLeft:"3rem"}}>
                                {

                                    searchdata.length ?
                                        <MDBBtn size="sm" color="primary" onClick={ResetNames}>
                                            Reset
                                        </MDBBtn> :
                                        <MDBBtn size="sm" color="primary" onClick={FindNames}>
                                            Search
                                        </MDBBtn>
                                }
                            </Grid>
                        </Grid>


                        <br />
                        <FormInput
                            autoFocus
                            margin="dense"
                            name="count"
                            label="Count"
                            type="number"
                            value={data.count}
                            variant="outlined"
                            onChange={handleChange}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <MDBBtn onClick={handleClose} size="sm" color="primary" variant="contained">
                            Cancel
                    </MDBBtn>
                        <MDBBtn type="submit" size="sm" color="info" variant="contained" onClick={handleSave}>
                            Submit
                    </MDBBtn>
                    </DialogActions>
                </Dialog>
            </form>
        </div >
    );
}
