import logo from './logo.svg';
import './App.css';
import {
  Box, Divider, Chip
} from '@material-ui/core'
import { observer } from 'mobx-react'
import ConferencesStore from './stores/conferences.store'
import FeedsStore from './stores/feeds.store'
import Header from './components/Header.component'
import ConferenceSummary from './components/ConferenceSummary.component'
import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Timeline } from 'react-twitter-widgets'
import conferencesStore from './stores/conferences.store';

class App extends Component {
  async componentDidMount() {
    await ConferencesStore.getNextBatch()
    await FeedsStore.getFeed()
  }

  _renderConferencesList() {
    let data = ConferencesStore.conferences
    if (!data) {
      return 
    }
    let feeds = FeedsStore.feed
    console.log(feeds)
    let numConferences = ConferencesStore.apiPage*5
    return (
      <InfiniteScroll
        dataLength={numConferences}
        next={async () => await ConferencesStore.getNextBatch()}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {data.map((conference) => (
          <ConferenceSummary key={Math.random()} conference={conference} />
        ))}
      </InfiniteScroll>
    )
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
            <Box id='conferences-list' style={{marginRight: 10}}>
              {this._renderConferencesList()}
            </Box>
          </Box>
          <Box style={{flex: 4, marginTop: 87}}>
            <Box style={{background: 'white', padding: 10, marginTop: 10, marginLeft: 20}}>
              <Timeline
                dataSource={{
                  sourceType: 'profile',
                  screenName: 'TechCrunch'
                }}
                options={{
                  height: window.innerHeight
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    );
    
  }
}


export default observer(App);
