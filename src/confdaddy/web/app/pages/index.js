import Head from 'next/head'
import Image from 'next/image'
import {
  Box
} from '@material-ui/core'
import { Timeline } from 'react-twitter-widgets'
import ConfList from './../components/conferences/ConfList'

function _renderTwitterFeeds () {
  return (
    <Box style={{background: 'white', padding: 10, marginTop: 10, marginLeft: 20}}>
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'TechCrunch'
        }}
        options={{
          height: 800
        }}
      />
    </Box>
  )
}


export default function Home() {
  return (
    <Box style={{display: 'flex', flexDirection: 'row', marginLeft: 10}}>
      <Box style={{flex: 8}}>
        <ConfList />
      </Box>
      <Box style={{flex: 4}}>
        {_renderTwitterFeeds()}
      </Box>
    </Box>
  )
}
