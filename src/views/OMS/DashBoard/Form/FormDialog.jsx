import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MDBBtn } from 'mdbreact';
import FormInput from 'src/components/FormInput';
import FileUpload from 'src/components/Forms/FileUpload';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AutoCompleteMultiSelect from 'src/components/AutoCompleteMultiSelect';
import {
    Container,
    makeStyles,
    Grid
} from '@material-ui/core';
const INITIAL_STATE = {
    name: "",
    product: "",
    billno: '',
    mrp: '',
    file: '',
    file_name: 'Choose File'
}
export default function FormDialog({ title, handleSubmit, predata }) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState(INITIAL_STATE);
    const [value, setValue] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = (e) => {
        setOpen(false);
        e.preventDefault();
        handleSubmit(data);
        setData(INITIAL_STATE);
    };

    const fileSave = (e) => {
        setData((prev) => {
            return {
                ...prev,
                file: e.target.files[0],
                file_name: e.target.files[0].name
            }
        }, () => console.log(data))
        setValue('');
    }
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
    const handleChange1 = (name, val) => {
        setData((prev) => {
            return {
                ...prev,
                [name]: val
            }
        })
    }
    return (
        <div>
            <MDBBtn color="primary" onClick={handleClickOpen} style={{ marginTop: "2rem" }}>
                {title}
            </MDBBtn>
            <form onSubmit={handleSave}>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
                    <DialogTitle id="form-dialog-title">Add Order</DialogTitle>
                    <DialogContent dividers>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6}>
                                <label>Customer Name</label>
                                <Autocomplete
                                    style={{ background: "white" }}
                                    fullWidth={true}
                                    id="combo-box-demo"
                                    size="small"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                        if (newValue)
                                            handleChange1("name", newValue);
                                    }}
                                    options={predata.customer}
                                    getOptionLabel={(option) => option.category}
                                    renderInput={(params) => <TextField size="small" {...params} placeholder="Category" variant="outlined" />}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <AutoCompleteMultiSelect
                                    handleChange={handleChange}
                                    name="product"
                                    data={predata.product}
                                    label="Product"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormInput
                                    label="Bill Number"
                                    name="billno"
                                    value={data.billno}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormInput
                                    label="MRP"
                                    name="mrp"
                                    type="number"
                                    value={data.mrp}
                                    onChange={handleChange}
                                    step="0.01"
                                />
                                <br/>
                            </Grid>
                            <Grid item xs={12}>
                                <FileUpload fileSave={fileSave} val={data.file_name} />
                            </Grid>
                        </Grid>
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
