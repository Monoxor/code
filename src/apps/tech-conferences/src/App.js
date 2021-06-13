import logo from './logo.svg';
import './App.css';
import {
  Box, Divider, Chip
} from '@material-ui/core'
import { observer } from 'mobx-react'
import ConferencesStore from './stores/conferences.store'
import Header from './components/Header.component'
import ConferenceSummary from './components/ConferenceSummary.component'
import React, { Component } from 'react'
import { light } from '@material-ui/core/styles/createPalette';

class App extends Component {
  async componentDidMount() {
    await ConferencesStore.getNextBatch()
  }

  _renderConferencesList() {
    let data = ConferencesStore.conferences
    if (!data) {
      return 
    }
    let conferences = []
    data.map((conference)=>{
      conferences.push(
        <ConferenceSummary key={Math.random()} conference={conference} />
      )
    })
    return conferences
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
            <Box style={{fontSize: 32, paddingTop: 30}}>
              Upcoming Conferences
            </Box>
            <Box id='conferences-list' style={{marginRight: 30}}>
              {this._renderConferencesList()}
            </Box>
          </Box>
          <Box style={{flex: 5, backgroundColor: 'blue'}}>2</Box>
        </Box>
      </Box>
    );
    
  }
}


export default observer(App);
