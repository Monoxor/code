import {
  Box
} from '@material-ui/core'
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import ConfSummary from "./ConfSummary";


const ConfList = ( data ) => {
  console.log(data)
  const [conferences, setConferences] = useState(data);

  const getMoreConferences = async () => {
    console.log('getMoreConferences')
    const res = await fetch(`https://confdaddy-services-i7cau.ondigitalocean.app/service/confdaddy/conferences?page_num=1`);
    let newConferences = await res.json();
    newConferences = newConferences.data
    setConferences((conferences) => [...conferences, ...newConferences]);
  };
  console.log(data)
  return (
    <InfiniteScroll
      dataLength={5}
      next={getMoreConferences}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      {conferences.map((conference) => (
        <ConfSummary key={Math.random()} conference={conference} />
      ))}
    </InfiniteScroll>

      // <InfiniteScroll
      //   dataLength={posts.length}
      //   next={getMorePosts}
      //   hasMore={hasMore}
      //   loader={<h4>Loading...</h4>}
        
      // >
      //   {posts.map((post) => (
      //     <Post key={post.id} post={post} />
      //   ))}
      // </InfiniteScroll>
    
  );
};

export async function getServerSideProps() {
  console.log('getServerSideProps')
  const res = await fetch(`https://confdaddy-services-i7cau.ondigitalocean.app/service/confdaddy/conferences?page_num=1`);
  // const data = await res.json();
  const data = {
    data: [
      {
        "description": "Find out how Airflow is being used by leading companies, what is its roadmap and how you can participate in its development.", 
        "end_date": "2021-07-16T00:00:00", 
        "img_link": "https://i.imgur.com/1meNRB4.jpg", 
        "link": "https://airflowsummit.org/", 
        "name": "Airflow Summit 2021", 
        "start_date": "2021-07-08T00:00:00", 
        "uuid": "041aed49-0ebe-4fd0-a9c1-914c371597f9"
      }
    ]
  }
  return {
    props: {
      data
    },
  };
}

export default ConfList;