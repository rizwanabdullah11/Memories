import { makeStyles } from '@material-ui/core/styles'; // or '@mui/styles' if using v5+

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',  // Corrected 'alignitems' to 'alignItems'
    },
    heading: {
        color: 'rgba(0,183,255,1)',
    },
    image: {
        marginLeft: '15px',
    },
}));
