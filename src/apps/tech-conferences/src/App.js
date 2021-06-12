import logo from './logo.svg';
import './App.css';
import {
  Box
} from '@material-ui/core'
import { observer } from 'mobx-react'
import ConferencesStore from './stores/conferences.store'

import React, { Component } from 'react'

class App extends Component {
  async componentDidMount() {
    await ConferencesStore.getConfernces()
  }
  render () {
    let conferences = ConferencesStore.conferences
    return (
      <Box style={{display: 'flex', flexDirection: 'column', padding: '5%'}}>
        <Box style={{fontSize: 36}}>Tech Conferences Help</Box>
        <Box>two</Box>
        {/* <Box>{ConferencesStore.count}</Box> */}
        <Box>{conferences ? conferences.page: 'No'}</Box>
      </Box>
    );
    
  }
}


export default observer(App);
