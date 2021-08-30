import {
  Box, Divider
} from '@material-ui/core'
import classes from './Layout.module.css'

function Header(props) {
  return (
    <Box 
      className = {classes.header}
    >
      <Box >
        <Box className = {classes.header_title}>ConfDaddy</Box>
        <Box className={ classes.header_summary }>Find conferences that matter to you...</Box>
      </Box>
      <Divider />
    </Box>
  );
}

export default Header;
