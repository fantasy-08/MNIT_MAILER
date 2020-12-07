import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MDBBtn } from 'mdbreact';
import Form from './Form';
const INITIAL_STATE = {
    name: '',
    gstno: '',
    adrl1: '',
    adrl2: '',
    adrl3: ''
}
export default function FormDialog({ title, handleSubmitS,setError }) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState(INITIAL_STATE);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setError({
            message: 'Please Wait',
            color: 'info',
            val:true
        })
        fetch('https://reqres.in/api/users', {
            method: 'POST',
            body: JSON.stringify({
                name: data.name,
                job: data.gstno
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
        handleSubmitS();
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = (e) => {
        setOpen(false);
        handleSubmit(e);
        setData({
            name: '',
            category: ''
        });
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <MDBBtn color="primary" onClick={handleClickOpen} style={{ marginTop: '0.5rem' }}>
                    {title}
                </MDBBtn>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
                    <DialogTitle id="form-dialog-title">Add Supplier</DialogTitle>
                    <DialogContent dividers>
                        <Form data={data} handleChange={handleChange} />
                    </DialogContent>
                    <DialogActions>
                        <MDBBtn onClick={handleClose} size="sm" color="primary" variant="contained">
                            Cancel
                    </MDBBtn>
                        <MDBBtn type="submit" onClick={handleSave} size="sm" color="info" variant="contained">
                            Submit
                    </MDBBtn>
                    </DialogActions>
                </Dialog>
            </form>
        </div>
    );
}
