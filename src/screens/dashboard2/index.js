import React from "react";
import ReactDom from "react-dom";
import './index.css'
import {Header, List } from "semantic-ui-react";
import Container from '@material-ui/core/Container';
import pkg from 'semantic-ui-react/package.json'
import { Icon, Table } from 'semantic-ui-react'
import Grid from '@material-ui/core/Grid';
import Group76 from './Group 76 .png'
import Group44 from './Group 44.png'
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Faci = () => {
  return(
  <div>
  <div style={{marginBottom:'50px'}}>
          <AppBar style={{backgroundColor:'#FFF'}}className="sctopnav" position="static">
            <Toolbar>
              <img src={Group65} alt="Group" className="sclogotop"/>

              <button style={{
                      marginLeft:'500px',
                      paddingTop:"0.3rem",
                      paddingRight:"0.3rem",
                      paddingBottom:"0.3rem",
                      paddingLeft:"0.3rem"
                      }}
                      className="scbutt7" >
                      <span style={{fontSize:"0.9rem"}}>Post a Request</span></button>

              <button style={{
                      paddingTop:"0.3rem",
                      paddingRight:"0.7rem",
                      paddingBottom:"0.3rem",
                      paddingLeft:"0.7rem"
                      }}
                      className="scbutt7plain" >
                      <span style={{fontSize:"0.9rem"}}>Dashboard</span></button>






                      <div className="scshifts">
                      <ShiftsMenu/> </div>

                      <div className="scshifts">
                      <ToolsMenu />
                      </div>

                      <img src={Bell} alt="Bell" className="scbell"/>

                      <div className="scac">
                      <AccountsMenu />
                      </div>
            </Toolbar>
          </AppBar>
        </div>
  <Container style={{width:'90rem'}}>

  <p style={{textAlign:'center'}}> Hi Anna! Today's Schedule for Elixy Medical Facility, Illionis 60025 </p>
  <div className="sccardhead1" style={{marginBottom:'2px'}}>
    <p className="scinsight"> Schedule: </p>
    <img src={Group76} alt="Group76" className="scleft"/>
    <p className="scdate"> 13thJul'20</p>
    <img src={Group44} alt="Group44" className="scright"/>
  </div>
  <Table celled structured>
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
        <button className=" scbutt"  style={{
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
        <button className=" scbutt" align="center" style={{
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
        <button className=" scbutt" align="center" style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.6rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.6rem",

                                      }}>
                                      <span style={{fontSize:"1.0rem"}}>Schedule shift</span></button>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        No one assigned (2) <br/>
        <button className=" scbutt" align="center" style={{
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
        <button className=" scbutt" align="center" style={{
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
        <button className=" scbutt" align="center" style={{
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
        <button className=" scbutt" align="center" style={{
                                      paddingTop:"0.3rem",
                                      paddingRight:"0.6rem",
                                      paddingBottom:"0.3rem",
                                      paddingLeft:"0.6rem",

                                      }}>
                                      <span style={{fontSize:"1.0rem"}}>Add a shift</span></button>
        </Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>
        All shifts are assigned
        <p> (1 Nurses) </p>
        </Table.Cell>
      </Table.Row>

    </Table.Body>
  </Table>
  <div className="sccardhead">
    <p className="scinsight"> Insights: </p>
    <img src={Group76} alt="Group76" className="scleft"/>
    <p className="scdate"> 5th Jul'20 - 11thJul'20</p>
    <img src={Group44} alt="Group44" className="scright"/>
  </div>
  <div className="sccardbott">
   <Grid container>
   <Grid item xs={6}>
    <p className="scschedule"> Scheduled Hours</p>
    <p className="sczero"> 138 </p> <p className="schrs"> Hrs </p>
    <p className="scweek"> Scheduled this week </p>
    <div>
    <p className="scDZ"> 5.7% </p> <p className="scDZL"> increase from schedule last week </p>
    </div>
    <div>
    <p className="scDZ1"> 2.2% </p> <p className="scDZL1"> higher than the 4 week schedule average </p>
    </div>
   </Grid>
   <Grid item xs={6}>
    <p className="scschedule"> Utilized Hours</p>
    <p className="sczero"> 120 </p> <p className="schrs"> Hrs </p>
    <p className="scweek"> utilised this week </p>
    <div>
    <p className="scDZ"> 7.8% </p> <p className="scDZL"> more hours worked then scheduled this week </p>
    </div>
    <div>
    <p className="scDZ1"> 4.5% </p> <p className="scDZL1"> more hours worked than schedule over 4 weeks </p>
    </div>
   </Grid>


   </Grid>
  </div>
</Container>
</div>
);
};

//ReactDom.render(<Faci />, document.querySelector('#root'))
export default Faci;