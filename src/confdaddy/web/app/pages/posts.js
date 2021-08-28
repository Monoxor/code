import { useState } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import Post from './../components/blog/Post'



function Posts ({data, pagination}) {
    const [posts, setPosts] = useState(data)
    const [hasMore, setHasMore] = useState(true)
    const [pageNum, setPageNum] = useState(1)
    const getMorePosts = async() => {
        const res = await fetch(`https://confdaddy-services-i7cau.ondigitalocean.app/service/confdaddy/conferences?page_num=${pageNum}`)
        const newPosts = (await res.json()).data
        setPosts(posts => [...posts, ...newPosts])
        if (pagination.next_page_exists) {
            let newHasMore = true
            setHasMore(newHasMore)
        }
        let newPageNum = pageNum + 1
        setPageNum(newPageNum)
    }
    return (
        <main>
            <div>Posts</div>
            <InfiniteScroll
                dataLength={posts.length}
                next={getMorePosts}
                hasMore={true}
                loader={<div>Loading</div>}
            >
                {    
                    posts.map((post) => (
                        <Post post={post} />
                    )) 
                }
            </InfiniteScroll>
        
        </main>
    )
}

export async function getServerSideProps() {
    const API_URL = 'https://confdaddy-services-i7cau.ondigitalocean.app/service/confdaddy/conferences?page_num=1'
    const res = await fetch(API_URL)
    let data = await res.json()
    let pagination = data.pagination
    pagination['page_num'] = 1
    data = data.data

    return {
        props: {
            data: data,
            pagination
        }
    }
}
export default Posts