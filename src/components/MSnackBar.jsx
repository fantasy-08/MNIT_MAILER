import React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';

function MyApp({data}) {
    const { enqueueSnackbar } = useSnackbar();
    const handleClickVariant = () => {
        enqueueSnackbar(data.message, { variant:data.color });
    };
    React.useEffect(() => {
        if(data.val)
            handleClickVariant();
    }, [data])
    return (
        <> 
        </>
    );
}

export default function IntegrationNotistack({ data }) {
    return (
        <SnackbarProvider maxSnack={2} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <MyApp data={data} />
        </SnackbarProvider>
    );
}
