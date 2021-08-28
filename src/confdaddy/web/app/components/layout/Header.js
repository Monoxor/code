import {
  Box, Divider
} from '@material-ui/core'
import classes from './Layout.module.css'

function Header(props) {
  return (
    <Box 
      className = {classes.header}
    >
      <Box 
        className = {classes.header_title}
      >
        ConfDaddy
      </Box>
      <Divider />
    </Box>
  );
}

export default Header;
