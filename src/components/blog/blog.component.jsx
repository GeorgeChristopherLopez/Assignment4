import React from "react"
import BLOG_DATA from '../../blog_post.json'

const Blog = ()=> {
    const [posts, setPosts] = React.useState([])


  
    React.useEffect(()=>{
        setPosts(BLOG_DATA.posts)
  
    },[])
  
  
  
    console.log(posts)

  
    return(

            <div className="blog-posts-container">
            <h2>The Blog</h2>
            {
              posts.map(({title, body, author, summary})=>
                <h4>{title}</h4>
              )
            }
    
            </div>
           
           
    )
}


export default Blog;