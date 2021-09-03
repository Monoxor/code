import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import ConfSummary from "./ConfSummary";

const API_URL = 'https://platform.monoxor.com/service/confdaddy/conferences'
const ConfList = ( {data, pagination} ) => {
  const [conferences, setConferences] = useState(data);
  const [hasMore, setHasMore] = useState(true)
  const [pageNum, setPageNum] = useState(2)

  const getMoreConferences = async () => {
    const res = await fetch(`${API_URL}?page_num=${pageNum}`);
    let newConferences = await res.json();
    pagination = newConferences.pagination
    newConferences = newConferences.data
    setConferences((conferences) => [...conferences, ...newConferences]);
    if (pagination.next_page_exists) {
        let newHasMore = true
        setHasMore(newHasMore)
        setPageNum(pageNum+1)
    } else {
      setHasMore(false)
    }
  };
  return (
    <InfiniteScroll
      dataLength={conferences.length}
      next={getMoreConferences}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<div>End</div>}
    >
      {conferences.map((conference) => (
        <ConfSummary key={Math.random()} conference={conference} />
      ))}
    </InfiniteScroll>
  );
};


export default ConfList;