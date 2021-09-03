import React, { useState } from "react";
import {
    Box, Dialog
} from '@material-ui/core'
import moment from 'moment'
import classes from './Conf.module.css'



function ConfSummary(props) {
  const [open, setOpen] = useState(false);
  if (!props.conference.name) {
    return null
  }
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    // <a  target='_blank' href={props.conference.link} rel='noopener noreferrer'>
    <React.Fragment>
      <Box id='conference-card' 
        style={{
          display: 'flex', flexDirection: 'row',
          backgroundColor: 'white', borderRadius: 4, height: 130, marginTop: 30, padding: 20
        }}
        onClick={()=>setOpen(true)}
      >
        <Box id='conference-summary' 
          style={{flex: 3, display: 'flex', flexDirection: 'column'}}
        >
          <Box style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Box style={{fontSize: 20, fontWeight: 'bold'}} className={classes.confName}>{props.conference.name}</Box>
          </Box>
          <Box style={{
            display: 'flex', flexDirection: 'row', 
            fontSize: 12, fontStyle: 'italic', fontWeight: 200
          }}>
            <Box style={{marginTop: 2}}>
              {moment(props.conference.start_date).format('MMM Do')} 
              {' to '} 
              {moment(props.conference.end_date).format('MMM Do')}
            </Box> 
          </Box>
          <Box className={classes.giveMeEllipsis} style={{flex: 1, marginTop: 15, fontSize: 12, fontStyle: 'italic'}}>
            {props.conference.description}
          </Box>
          <Box style={{marginRight: 20, marginTop: 10, alignItems: 'space-around', }}>
            {/* <Chip style={{marginRight: 10}} label='Security' size='small'/>
            <Chip style={{marginRight: 10}} label='Hacking' size='small'/> */}
          </Box>
        </Box>
      </Box>
      <Dialog fullScreen
        // style={{width: window.innerWidth, height: window.innerHeight}}
        open={open}                                                          
        onClose={()=>setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <button onClick={()=>setOpen(false)} style={{height: 50}}>Close</button>
        <iframe height='100%' src={props.conference.link}></iframe>
      </Dialog>
    </React.Fragment>
    //</a>
  );
}

export default ConfSummary;