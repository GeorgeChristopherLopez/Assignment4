import React from "react"
import { Link } from "react-router-dom"
import BLOG_DATA from '../../blog_post.json'
import Blog from "../../components/blog/blog.component"

const Home = ()=> {
    const [posts, setPosts] = React.useState([])


  
    React.useEffect(()=>{
        setPosts(BLOG_DATA.posts)
  
    },[])
  
  
  
    console.log(posts)

  
    return(

            <main>
              <Blog/>
            </main>
           
           
    )
}


export default Home;