import Head from 'next/head'
import Image from 'next/image'
import {
  Box, Divider, Chip
} from '@material-ui/core'
import { Timeline } from 'react-twitter-widgets'
import Layout from './../components/layout/Layout'


export default function Home() {
  return (
    <Box style={{display: 'flex', flexDirection: 'row'}}>
      <Box style={{flex: 8}}>
        <Box style={{fontSize: 32, paddingTop: 30}}>
          Upcoming Conferences
        </Box>
        <Box id='conferences-list' style={{marginRight: 10}}>
          {/* {this._renderConferencesList()} */}
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
              height: 800
            }}
          />
        </Box>
      </Box>
    </Box>

  )
}
