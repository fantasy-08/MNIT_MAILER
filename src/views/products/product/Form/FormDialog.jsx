import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MDBBtn } from 'mdbreact';
import AutoComplete from 'src/components/AutoComplete';
import AutoCompleteMultiSelect from 'src/components/AutoCompleteMultiSelect';
import FormInput from 'src/components/FormInput';
const INITIAL_STATE = {
    name: '',
    category: '',
    sku: '',
    raw_material: []
};
export default function FormDialog({ title, handleSubmit,categorydata,rawdata}) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState(INITIAL_STATE);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        setOpen(false);
        handleSubmit(data);
        setData(INITIAL_STATE);
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

    return (
        <div>
            <MDBBtn color="primary" onClick={handleClickOpen} style={{ marginTop: "2rem" }}>
                {title}
            </MDBBtn>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
                <DialogTitle id="form-dialog-title">Add Product</DialogTitle>
                <DialogContent dividers>
                    <FormInput
                        label="SKU"
                        name="sku"
                        value={data.sku}
                        onChange={handleChange}
                    />
                    <br/>
                    <label >
                        Category
                    </label>
                    <AutoComplete
                        size="small"
                        rows={categorydata}
                        setInfo={setData}
                    />
                    <br/>
                    <FormInput
                        label="Name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                    />
                    <br/>
                    <AutoCompleteMultiSelect
                        handleChange={handleChange}
                        name="raw_material"
                        data={rawdata}
                        label="Raw Material"
                    />
                    <br/>
                </DialogContent>
                <DialogActions>
                    <MDBBtn onClick={handleClose} size="sm" color="primary" variant="contained">
                        Cancel
                    </MDBBtn>
                    <MDBBtn onClick={handleSave} size="sm" color="info" variant="contained">
                        Submit
                    </MDBBtn>
                </DialogActions>
            </Dialog>
        </div>
    );
}
