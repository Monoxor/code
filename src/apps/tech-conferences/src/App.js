import logo from './logo.svg';
import './App.css';
import {
  Box, Divider
} from '@material-ui/core'
import { observer } from 'mobx-react'
import ConferencesStore from './stores/conferences.store'
import Header from './components/Header.component'

import React, { Component } from 'react'

class App extends Component {
  async componentDidMount() {
    await ConferencesStore.getConfernces()
  }
  render () {
    let conferences = ConferencesStore.conferences
    return (
      <Box 
        style = {{
          display: 'flex', flexDirection: 'column', position: 'absolute', 
          minHeight: '100%', width: '100%', maxWidth: '100%', 
          backgroundColor: '#FAFAFA', minHeight: '100%'
        }}
      >
        <Header />
        <Divider />
        
        
        <Box style={{display: 'flex', flexDirection: 'row', paddingLeft: 20, paddingRight: 20}}>
          <Box style = {{flex: 8, backgroundColor: 'lightgrey'}}>
          <Box style={{fontSize: 32, height: 100, paddingTop: 20}}>
            Upcoming Conferences
          </Box>
          </Box>
          <Box style = {{flex: 5, backgroundColor: 'blue'}}>2</Box>
        </Box>
        {/* <Box>{ConferencesStore.count}</Box> */}
        <Box>{conferences ? conferences.page: 'No'}</Box>
        
      </Box>
    );
    
  }
}


export default observer(App);
