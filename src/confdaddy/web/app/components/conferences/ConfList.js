import {
  Box
} from '@material-ui/core'
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import ConfSummary from "./ConfSummary";


const ConfList = ( {data, pagination} ) => {
  console.log('ConfList')
  console.log(data)
  const [conferences, setConferences] = useState(data);
  const [hasMore, setHasMore] = useState(true)
  const [pageNum, setPageNum] = useState(1)

  const getMoreConferences = async () => {
    console.log('getMoreConferences')
    console.log(data)
    const res = await fetch(`https://confdaddy-services-i7cau.ondigitalocean.app/service/confdaddy/conferences?page_num=${pageNum}`);
    let newConferences = await res.json();
    newConferences = newConferences.data
    setConferences((conferences) => [...conferences, ...newConferences]);
    if (pagination.next_page_exists) {
        let newHasMore = true
        setHasMore(newHasMore)
    }
    let newPageNum = pageNum + 1
    setPageNum(newPageNum)
  };
  return (
    <InfiniteScroll
      dataLength={conferences.length}
      next={getMoreConferences}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      {conferences.map((conference) => (
        <ConfSummary key={Math.random()} conference={conference} />
      ))}
    </InfiniteScroll>
  );
};


export default ConfList;