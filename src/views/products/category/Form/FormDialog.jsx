import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MDBBtn } from 'mdbreact'
import FormInput from 'src/components/FormInput'
export default function FormDialog({ title, handleSubmit }) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        setOpen(false);
        handleSubmit(data);
        setData('');
    };

    const handleChange = (e) => {
        setData(e.target.value);
    }

    return (
        <div>
            <form>
                <MDBBtn color="primary" onClick={handleClickOpen} style={{marginTop:"2.0rem"}}>
                    {title}
                </MDBBtn>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
                    <DialogTitle id="form-dialog-title">Category</DialogTitle>
                    <DialogContent dividers>
                        <FormInput
                            autoFocus
                            margin="dense"
                            id="name"
                            label={title}
                            type="text"
                            value={data}
                            variant="outlined"
                            onChange={handleChange}
                            fullWidth
                        />
                        <br/>
                    </DialogContent>
                    <DialogActions>
                        <MDBBtn onClick={handleClose} size="sm" color="primary" >
                            Cancel
                    </MDBBtn>
                        <MDBBtn onClick={handleSave} size="sm" color="info">
                            Submit
                    </MDBBtn>
                    </DialogActions>
                </Dialog>
            </form>
        </div>
    );
}
