import React from "react";
import ReactDom from "react-dom";
import './index.css'
import {Header, List } from "semantic-ui-react";
import Container from '@material-ui/core/Container';
import pkg from 'semantic-ui-react/package.json'
import { Icon, Table } from 'semantic-ui-react'
import Grid from '@material-ui/core/Grid';
import Group76 from './Group 76 .png'
import Divider from '@material-ui/core/Divider';
import Group44 from './Group 44.png'
import MaskGrouph from './Mask Grouph.png';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Group65 from './Group 65.png';
import Bell from './bell.png'
import Group94 from './Group 9454.png'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ShiftsMenu from "./ShiftsMenu";
import ToolsMenu from "./ToolMenu";
import AccountsMenu from "./ACMenu";
import {Link} from 'react-router-dom';


const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const drawerWidth = 280;

const useStyles1 = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(1),
      },
    }));

const Faci = () => {
  const classes = useStyles1();

  return(
  <div>
  <div className={classes.root}>
          <CssBaseline />
           <AppBar style={{backgroundColor:'#FFF', height:'100px'}}className={classes.appBar} position="fixed">
           <Toolbar>
                <img src={Group65} alt="Group" className="sulogotop"/>

                <button style={{
                        marginLeft:'500px',
                        paddingTop:"0.3rem",
                        paddingRight:"0.3rem",
                        paddingBottom:"0.3rem",
                        paddingLeft:"0.3rem"
                        }}
                        className="subutt3" >
                        <span style={{fontSize:"0.9rem"}}>Post a Request</span></button>



                <button style={{
                        marginLeft:'10px',
                        marginTop:'15px',
                        marginRight:'10px',
                        paddingTop:"0.3rem",
                        paddingRight:"0.7rem",
                        paddingBottom:"0.3rem",
                        paddingLeft:"0.7rem"
                        }}
                        className="subutt7plain" >
                        <span style={{fontSize:"0.9rem"}}>Dashboard</span></button>

                        <div className="sushifts">
                        <ShiftsMenu/> </div>

                        <div className="sushifts">
                        <ToolsMenu />
                        </div>

                        <img src={Bell} alt="Bell" className="subell"/>

                        <div className="suac">
                        <AccountsMenu />
                        </div>

              </Toolbar>
           </AppBar>
           <Drawer
     className={classes.drawer}
     variant="permanent"
     classes={{
       paper: classes.drawerPaper,
     }}
   >
     <Toolbar />
     <div className={classes.drawerContainer}>
       <img src={MaskGrouph} alt="MaskGrouph" className="suavatar"/>
       <p className="suhead7"> Anna C. </p>
       <div>
       <p className="sulist">Schedule </p>
       <p className="sulist" > Schedule shifts </p>
       <p className="sulist"> Live Feed</p>
       <p className="sulist"> Billing </p>
       <p className="sulist">Shift Settings </p>


       </div>
     </div>
   </Drawer>
         </div>
  <div style={{marginTop:'80px'}}>
  <Container style={{width:'60rem'}}>

  <div className="suupcoming">
                    <p style={{marginBottom:'10px'}}className="suup"> Upcoming Shifts for </p>
                    <img src={Group76} alt="Group76" className="suleft"/>
                    <p style={{marginBottom:'10px'}} className="suup"> 12th Jul'20 - 19thJul'20</p>
                    <img src={Group44} alt="Group44" className="suright"/>
                    <Divider />
  </div>
  <div className="sucardhead1" style={{marginLeft:'100px'}}>
    <p className="suinsight"> 12th Jul'20, Sunday </p>
    <button style={{
      float:'right',
      width:'10%',
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.3rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.3rem"
                                      }}>
    <span style={{fontSize:"1.0rem"}}>edit</span></button>
  </div>
  <Table celled structured style={{marginLeft:'100px'}}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell rowSpan='2' style={{backgroundColor:'#F1FFFC',textAlign:'center',color:'#1082CB'}}>   </Table.HeaderCell>
        <Table.HeaderCell rowSpan='2' style={{backgroundColor:'#F1FFFC',textAlign:'center',color:'#1082CB'}}>Ward 1</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2' style={{backgroundColor:'#F1FFFC',textAlign:'center',color:'#1082CB'}}>Ward 2</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2' style={{backgroundColor:'#F1FFFC',textAlign:'center',color:'#1082CB'}}>Ward 3</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2' style={{backgroundColor:'#F1FFFC',textAlign:'center',color:'#1082CB'}}>Ward 4</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2' style={{backgroundColor:'#F1FFFC',textAlign:'center',color:'#1082CB'}}>Ward 5</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2' style={{backgroundColor:'#F1FFFC',textAlign:'center',color:'#1082CB'}}>Ward 6</Table.HeaderCell>

      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell style={{backgroundColor:'#FFF500',textAlign:'center'}}>
        Morning
        <p> 6:30-2:30</p>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}} >
        All shifts are assigned
        <p> (3 Nurses) </p>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}} >
        All shifts are assigned
        <p> (2 Nurses) </p>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        All shifts are assigned
        <p> (3 Nurses) </p>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        No one assigned (3) <br/>
        <button className=" subutt"  style={{
                                      align:'center',
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.6rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.6rem",

                                      }}>
                                      <span style={{fontSize:"1.0rem"}}>Schedule shift</span></button>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        All shifts are assigned
        <p> (2 Nurses) </p>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        All shifts are assigned
        <p> (2 Nurses) </p>
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell style={{backgroundColor:'#00FD65',textAlign:'center'}}>
        Evening
        <p>2:30-10:30 </p>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        No shifts added <br/>
        <Link to ="/upcomingshifts">
        <button className=" subutt" align="center" style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.6rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.6rem",

                                      }}>
                                      <span style={{fontSize:"1.0rem"}}>Add a shift</span></button>
                                      </Link>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        All shifts are assigned
        (1 Nurses)
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}} >
        Two shifts unassigned (3) <br/>
        <button className=" subutt" align="center" style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.6rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.6rem",

                                      }}>
                                      <span style={{fontSize:"1.0rem"}}>Schedule shift</span></button>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        No one assigned (2) <br/>
        <button className=" subutt" align="center" style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.6rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.6rem",

                                      }}>
                                      <span style={{fontSize:"1.0rem"}}>Schedule shift</span></button>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        All shifts are assigned
        (1 Nurses)
        </Table.Cell>
        No one assigned (2) <br/>
        <button className=" subutt" align="center" style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.6rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.6rem",

                                      }}>
                                      <span style={{fontSize:"1.0rem"}}>Schedule shift</span></button>
      </Table.Row>
      <Table.Row>
        <Table.Cell style={{backgroundColor:'#A09EFF',textAlign:'center'}}>
        Night
        <p> 10:30-6:30</p>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        All shifts are assigned
        <p> (3 Nurses) </p>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        All shifts are assigned
        <p> (3 Nurses) </p>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        One shifts unassigned (2) <br/>
        <button className=" subutt" align="center" style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.6rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.6rem",

                                      }}>
                                      <span style={{fontSize:"1.0rem"}}>Schedule shift</span></button>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        All shifts are assigned
        <p> (3 Nurses) </p>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        No shifts added <br/>
        <Link to="/upcomingshifts">
        <button className=" subutt" align="center" style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.6rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.6rem",

                                      }}>
                                      <span style={{fontSize:"1.0rem"}}>Add a shift</span></button>
                                      </Link>
                                      
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        All shifts are assigned
        <p> (1 Nurses) </p>
        </Table.Cell>
      </Table.Row>

    </Table.Body>
  </Table>

  <div className="sucardhead1" style={{marginLeft:'100px',marginBottom:'20px'}}>
    <p className="suinsight"> 13th Jul'20, Monday </p>
    <button style={{
      float:'right',
      width:'10%',
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.3rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.3rem"
                                      }}>
    <span style={{fontSize:"1.0rem"}}>edit</span></button>
  </div>
  <Table celled structured style={{marginLeft:'100px'}}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell rowSpan='2' style={{backgroundColor:'#F1FFFC',textAlign:'center',color:'#1082CB'}}>   </Table.HeaderCell>
        <Table.HeaderCell rowSpan='2' style={{backgroundColor:'#F1FFFC',textAlign:'center',color:'#1082CB'}}>Ward 1</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2' style={{backgroundColor:'#F1FFFC',textAlign:'center',color:'#1082CB'}}>Ward 2</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2' style={{backgroundColor:'#F1FFFC',textAlign:'center',color:'#1082CB'}}>Ward 3</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2' style={{backgroundColor:'#F1FFFC',textAlign:'center',color:'#1082CB'}}>Ward 4</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2' style={{backgroundColor:'#F1FFFC',textAlign:'center',color:'#1082CB'}}>Ward 5</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2' style={{backgroundColor:'#F1FFFC',textAlign:'center',color:'#1082CB'}}>Ward 6</Table.HeaderCell>

      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell style={{backgroundColor:'#FFF500',textAlign:'center'}}>
        Morning
        <p> 6:30-2:30</p>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}} >
        All shifts are assigned
        <p> (3 Nurses) </p>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}} >
        All shifts are assigned
        <p> (2 Nurses) </p>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        All shifts are assigned
        <p> (3 Nurses) </p>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        No one assigned (3) <br/>
        <button className=" subutt"  style={{
                                      align:'center',
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.6rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.6rem",

                                      }}>
                                      <span style={{fontSize:"1.0rem"}}>Schedule shift</span></button>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        All shifts are assigned
        <p> (2 Nurses) </p>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        All shifts are assigned
        <p> (2 Nurses) </p>
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell style={{backgroundColor:'#00FD65',textAlign:'center'}}>
        Evening
        <p>2:30-10:30 </p>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        No shifts added <br/>
        <button className=" subutt" align="center" style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.6rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.6rem",

                                      }}>
                                      <span style={{fontSize:"1.0rem"}}>Add a shift</span></button>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        All shifts are assigned
        (1 Nurses)
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}} >
        Two shifts unassigned (3) <br/>
        <button className=" subutt" align="center" style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.6rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.6rem",

                                      }}>
                                      <span style={{fontSize:"1.0rem"}}>Schedule shift</span></button>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        No one assigned (2) <br/>
        <button className=" subutt" align="center" style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.6rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.6rem",

                                      }}>
                                      <span style={{fontSize:"1.0rem"}}>Schedule shift</span></button>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        All shifts are assigned
        (1 Nurses)
        </Table.Cell>
        No one assigned (2) <br/>
        <button className=" subutt" align="center" style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.6rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.6rem",

                                      }}>
                                      <span style={{fontSize:"1.0rem"}}>Schedule shift</span></button>
      </Table.Row>
      <Table.Row>
        <Table.Cell style={{backgroundColor:'#A09EFF',textAlign:'center'}}>
        Night
        <p> 10:30-6:30</p>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        All shifts are assigned
        <p> (3 Nurses) </p>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        All shifts are assigned
        <p> (3 Nurses) </p>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        One shifts unassigned (2) <br/>
        <button className=" subutt" align="center" style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.6rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.6rem",

                                      }}>
                                      <span style={{fontSize:"1.0rem"}}>Schedule shift</span></button>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        All shifts are assigned
        <p> (3 Nurses) </p>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        No shifts added <br/>
        <Link to ="/upcomingshifts">
        <button className=" subutt" align="center" style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.6rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.6rem",

                                      }}>
                                      <span style={{fontSize:"1.0rem"}}>Add a shift</span></button>
                                      </Link>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        All shifts are assigned
        <p> (1 Nurses) </p>
        </Table.Cell>
      </Table.Row>

    </Table.Body>
  </Table>

</Container>
</div>
</div>
);
};

//ReactDom.render(<Faci />, document.querySelector('#root'))

export default Faci;
