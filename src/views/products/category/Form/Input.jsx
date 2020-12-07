import React from 'react';
import {
    Grid
} from '@material-ui/core';
import FormDialog from './FormDialog';
import FormInput from 'src/components/FormInput';

function Input({ Update,handleChange,search}) {
    const [local, setLocal] = React.useState('');
    const handleSubmit = (info) => {
        Update(info);
        setLocal('');
    }
    const handleLChange = (e) => {
        setLocal(e.target.value);
        handleChange(e);
    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <FormInput
                    label="Search Category"
                    placeholder="Search Category"
                    name="category"
                    value={local}
                    onChange={handleLChange}
                />
            </Grid>
            <Grid item xs={4}>
                <FormDialog title="Add New Category" handleSubmit={handleSubmit} />
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={4}></Grid>

        </Grid>
    )
}
export default Input
