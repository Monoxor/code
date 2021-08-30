import { Box } from '@material-ui/core'
import { Timeline } from 'react-twitter-widgets'
import MediaQuery from 'react-responsive'
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


export default function Home({data, pagination}) {
  return (
    <Box style={{display: 'flex', flexDirection: 'row', marginLeft: 10, marginRight: 10}}>
      <Box style={{flex: 8}}>
        <ConfList data={data} pagination={pagination}/>
      </Box>
      <MediaQuery minWidth={680}>
        <Box style={{flex: 4}}>
          {_renderTwitterFeeds()}
        </Box>
      </MediaQuery>
      
    </Box>
  )
}


export async function getServerSideProps() {
  const API_URL = 'https://platform.monoxor.com/service/confdaddy/conferences?page_num=1'
  const res = await fetch(API_URL)
  let data = await res.json()
  let pagination = data.pagination
  pagination['page_num'] = 2
  data = data.data
  return {
      props: {
          data: data,
          pagination
      }
  }
}