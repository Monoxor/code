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
    let conferences=ConferencesStore.conferences
    return (
      <Box 
        style={{
          display: 'flex', flexDirection: 'column', position: 'absolute', 
          minHeight: '100%', width: '100%', maxWidth: '100%', 
          backgroundColor: '#FAFAFA', minHeight: '100%'
        }}
      >
        <Header />
        <Divider />
        
        
        <Box style={{display: 'flex', flexDirection: 'row', paddingLeft: 20, paddingRight: 20}}>
          <Box style={{flex: 8}}>
          <Box style={{fontSize: 32, paddingTop: 30, paddingBottom: 30}}>
            Upcoming Conferences
          </Box>
          <Box id='conferences-list' style={{marginRight: 30}}>
            <Box id='conference-card' 
              style={{
                display: 'flex', flexDirection: 'row', backgroundColor: 'white', borderRadius: 4,
                height: 200
              }}
            >
              <Box id='conference-img' style={{flex: 1, backgroundColor: 'lightgrey', margin: 10, borderRadius: 8}}>
                <Box style={{padding: 75}}>Image</Box>
              </Box>
              <Box id='conference-summary' style={{flex: 3}}>Summary</Box>
            </Box>
          </Box>
          </Box>
          <Box style={{flex: 5, backgroundColor: 'blue'}}>2</Box>
        </Box>
        {/* <Box>{ConferencesStore.count}</Box> */}
        <Box>{conferences ? conferences.page: 'No'}</Box>
        
      </Box>
    );
    
  }
}


export default observer(App);
