import '../styles/DystoTable.css';
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Avatar} from '@material-ui/core';
import {AvatarGroup} from '@material-ui/lab';

// Aliens
import alien1 from '../images/aliens/alien1.png';
import alien2 from '../images/aliens/alien2.png';
import alien3 from '../images/aliens/alien3.png';
import alien4 from '../images/aliens/alien4.png';
import alien5 from '../images/aliens/alien5.png';
import alien6 from '../images/aliens/alien6.gif';
import alien7 from '../images/aliens/alien7.gif';

// Apes
import ape1 from '../images/apes/ape1.png';
import ape2 from '../images/apes/ape2.png';
import ape3 from '../images/apes/ape3.png';
import ape4 from '../images/apes/ape4.png';
import ape5 from '../images/apes/ape5.png';
import ape6 from '../images/apes/ape6.png';
import ape7 from '../images/apes/ape7.png';

// Robots
import robot1 from '../images/robots/robot1.png';
import robot2 from '../images/robots/robot2.png';
import robot3 from '../images/robots/robot3.png';
import robot4 from '../images/robots/robot4.png';
import robot5 from '../images/robots/robot5.png';
import robot6 from '../images/robots/robot6.png';
import robot7 from '../images/robots/robot7.png';

// Females
import female1 from '../images/females/female1.png';
import female2 from '../images/females/female2.png';
import female3 from '../images/females/female3.png';
import female4 from '../images/females/female4.png';
import female5 from '../images/females/female5.png';
import female6 from '../images/females/female6.png';
import female7 from '../images/females/female7.png';

// Males
import male1 from '../images/males/male1.png';
import male2 from '../images/males/male2.png';
import male3 from '../images/males/male3.png';
import male4 from '../images/males/male4.png';
import male5 from '../images/males/male5.png';
import male6 from '../images/males/male6.png';
import male7 from '../images/males/male7.png';

const useStyles = makeStyles({
    DystoTable: {
        maxWidth: 700, 
        margin: 'auto',
        fontFamily: 'm5x7',
        fontSize: 'calc(12px + 2vmin)',
    },
    DystoTableTittle: {
        fontSize: 'calc(12px + 3vmin)',
        marginBottom: '20px',
        marginLeft: '15px',
        marginTop: '40px',
        marginRight: '-25px',
    },
    DystoTableLine: {
        borderTop: '1px solid rgba(224, 224, 224, 1)',
    },
    DystoTableColor: { 
        fontFamily: 'm5x7',
        fontSize: 'calc(12px + 2vmin)',
        color: '#E54286',
    }
})

const data= [
    { attribute: 'Alien', number: 7, example: <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={alien1} />, examples: <AvatarGroup max={6} spacing={0}>
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={alien2} />
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={alien3} />
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={alien4} />
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={alien5} />
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={alien6} />
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={alien7} />
  </AvatarGroup> },
    { attribute: 'Ape', number: 20, example: <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={ape1} />, examples: <AvatarGroup max={6} spacing={0}>
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={ape2} />
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={ape3} />
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={ape4} />
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={ape5} />
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={ape6} />
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={ape7} />
  </AvatarGroup> },
    { attribute: 'Robot', number: 50, example: <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={robot1} />, examples: <AvatarGroup max={6} spacing={0}>
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={robot2} />
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={robot3} />
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={robot4} />
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={robot5} />
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={robot6} />
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={robot7} />
  </AvatarGroup> },
    { attribute: 'Female', number: 800, example: <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={female1} />, examples: <AvatarGroup max={6} spacing={0}>
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={female2} />
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={female3} />
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={female4} />
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={female5} />
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={female6} />
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={female7} />
  </AvatarGroup> },
    { attribute: 'Male', number: 1200, example: <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={male1} />, examples: <AvatarGroup max={6} spacing={0}>
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={male2} />
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={male3} />
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={male4} />
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={male5} />
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={male6} />
    <Avatar style={{ border: "0px", height: "48px", width: "48px"}} variant="square" src={male7} />
  </AvatarGroup> }
];

function DystoTable() {
    const classes=useStyles();
    return (
        <div className="DystoTable">
            <TableContainer>
                <Table className={classes.DystoTable}>
                    <TableHead>
                    <h4 className={classes.DystoTableTittle}>Punk Types</h4>
                        <TableRow className={classes.DystoTableLine}>
                            <TableCell className={classes.DystoTable}><b>Attribute</b></TableCell>
                            <TableCell className={classes.DystoTable}><b>#</b></TableCell>
                            <TableCell className={classes.DystoTable}><b>Example</b></TableCell>
                            <TableCell className={classes.DystoTable}><b>More Examples</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map (cell => (
                            <TableRow>
                                <TableCell className={classes.DystoTableColor}><b>{cell.attribute}</b></TableCell>
                                <TableCell className={classes.DystoTable}>{cell.number}</TableCell>
                                <TableCell className={classes.DystoTable}>{cell.example}</TableCell>
                                <TableCell className={classes.DystoTable}>{cell.examples}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default DystoTable;
