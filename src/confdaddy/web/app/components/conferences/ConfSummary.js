import {
    Box, Chip, 
} from '@material-ui/core'

function ConfSummary(props) {
  if (!props.conference.name) {
    return null
  }
  return (
    <Box id='conference-card' 
      style={{
        display: 'flex', flexDirection: 'row', backgroundColor: 'white', borderRadius: 4,
        height: 100, marginTop: 30, padding: 20
      }}
    >
      {/* <Box id='conference-img' style={{display: 'flex', flex: 1, backgroundColor: 'lightgrey', margin: 20, borderRadius: 8}}>
        <Box 
          style={{
            flex: 1, borderRadius: 8, width: 140, height: 160,
            backgroundImage: `url(${props.conference.img_link})`,
            backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
          }}
        > 
        </Box>
      </Box> */}
      <Box id='conference-summary' 
        style={{flex: 3, display: 'flex', flexDirection: 'column'}}
      >
        <Box style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <Box style={{fontSize: 20, fontWeight: 'bold'}}>{props.conference.name}</Box>
          <Box style={{display: 'flex', flexDirection: 'row', fontSize: 14}}>
            <Box>Aug 8 to Aug 11</Box>
          </Box>
        </Box>
        <Box style={{flex: 1, marginTop: 15, fontSize: 12, fontStyle: 'italic'}}>
          {props.conference.description}
        </Box>
        <Box style={{marginRight: 20, marginTop: 10, alignItems: 'space-around', }}>
          <Chip style={{marginRight: 10}} label='Security' size='small'/>
          <Chip style={{marginRight: 10}} label='Hacking' size='small'/>
        </Box>
      </Box>
    </Box>
  );
}

export default ConfSummary;