import {
  Box, Divider
} from '@material-ui/core'
import classes from './Layout.module.css'

function Header(props) {
  return (
    <Box 
      style={{
        display: 'flex',
        height: 60, 
        alignItems: 'center',
      }}
    >
      <Box 
        // style = {{marginLeft: 20, fontSize: 18, fontWeight: 'bold'}}
        className = {classes.header}
      >
        ConfDaddy
      </Box>
    </Box>
  );
}

export default Header;
