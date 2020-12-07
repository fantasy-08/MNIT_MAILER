import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MDBBtn } from 'mdbreact';
import AutoComplete from 'src/components/AutoComplete';
import FormInput from 'src/components/FormInput';
export default function FormDialog({ title, handleSubmit, allcategory, setError }) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState(
        {
            name: '',
            category: ''
        }
    );
    function getID(name) {
        for (var i = 0; i < allcategory.length; i++) {
            var item = allcategory[i];
            if (item.category == name) {
                return item.id;
            }
        }
        return -1;
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        setOpen(false);
        //new raw material crete api
        console.log(getID(data.category))
        setError({
            message: 'Please Wait',
            color: 'info',
            val: true
        })
        const url = "https://apogee.makeitfar.com/api/raw"
        var Body = {
            "name": data.name,
            "categoryid": getID(data.category)
        }
        console.log(Body);
        fetch(url,
            {
                method: "POST",
                body: JSON.stringify({
                    name: data.name,
                    categoryid: getID(data.category)
                })
            })
            .then(res => res.json())
            .then(response => {
                if (response.code === "internal") {
                    setError({ message: response.message, color: "error", val: true })
                }
                else {
                    setError({message:'Successfully Added',color:'success',val:true})
                }
            })
        .catch(err=>setError({ message: err, color: "error",val:true }))
        handleSubmit(data);
        setData({
            name: '',
            category: ''
        });
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
            <form onSubmit={handleSave}>
                <MDBBtn color="primary" onClick={handleClickOpen} style={{ marginTop: "0.5rem" }}>
                    {title}
                </MDBBtn>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
                    <DialogTitle id="form-dialog-title">Add Raw Material</DialogTitle>
                    <DialogContent dividers>
                        <FormInput
                            autoFocus
                            margin="dense"
                            name="name"
                            label="Name"
                            type="text"
                            value={data.name}
                            variant="outlined"
                            onChange={handleChange}
                            fullWidth
                        />
                        <br />
                        <label>
                            Category
                    </label>
                        <AutoComplete rows={allcategory} setInfo={setData} />
                        <br />
                    </DialogContent>
                    <DialogActions>
                        <MDBBtn onClick={handleClose} size="sm" color="primary" variant="contained">
                            Cancel
                    </MDBBtn>
                        <MDBBtn onClick={handleSave} type="submit" size="sm" color="info" variant="contained">
                            Submit
                        </MDBBtn>
                    </DialogActions>
                </Dialog>
            </form>
        </div>
    );
}
