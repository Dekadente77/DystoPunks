import '../styles/Metamask.css'
import {Fab} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';

const useStyle = makeStyles({
    metaButton: {
        backgroundColor: '#8CFF9B',
        color: '#12173D',
        fontSize: 'calc(12px + 2vmin)',
        fontFamily: 'm5x7',
        boxShadow: 'none',
        borderRadius: '0px',
        
        '&:hover': {
            backgroundColor: '#8CFF9B',
            color: '#ffffff',
            boxShadow: 'none',
        }
    }
})


function Metamask() {

    const classes = useStyle()

    return (
        <div className='metamask'>
            <Fab className={classes.metaButton} variant="extended">
                <b>Connect metamask</b>
            </Fab>
        </div>
    );
}

export default Metamask;