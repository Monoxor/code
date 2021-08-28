import { useState } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import Post from './../components/blog/Post'



function Posts ({data}) {
    const [posts, setPosts] = useState(data)
    const getMorePosts = async() => {
        const res = await fetch('https://confdaddy-services-i7cau.ondigitalocean.app/service/confdaddy/conferences?page_num=2')
        const newPosts = (await res.json()).data
        setPosts(posts => [...posts, ...newPosts])
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
    data = data.data

    return {
        props: {
            data
        }
    }
}
export default Posts