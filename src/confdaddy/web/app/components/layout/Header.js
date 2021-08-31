import Image from 'next/image'
import {
  Box, Divider
} from '@material-ui/core'
import classes from './Layout.module.css'
import Logo from './../../public/confdaddy-logo.png'
function Header(props) {
  return (
    <Box 
      className = {classes.header}
    >
      <Box>
        <Box className = {classes.header_title} style={{display: 'flex', flexDirection: 'row'}}>
          <Box><Image src={Logo} alt="ConfDaddy" width='20px' height='20px'/></Box>
          <Box style={{marginLeft: 5}}>ConfDaddy</Box>
        </Box>
        <Box className={ classes.header_summary }>Find conferences that matter to you...</Box>
      </Box>
      <Divider />
    </Box>
  );
}

export default Header;
