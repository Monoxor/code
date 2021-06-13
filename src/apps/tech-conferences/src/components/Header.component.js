import {
    Box, Divider
} from '@material-ui/core'

function Header() {
  return (
    <Box 
      style={{
        display: 'flex',
        height: 60, 
        alignItems: 'center',
      }}
    >
      <Box 
        style = {{marginLeft: 20, fontSize: 18, fontWeight: 'bold'}}
      >
        Find Best Tech Conferences
      </Box>
    </Box>
  );
}

export default Header;