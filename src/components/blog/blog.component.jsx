import React from "react"
import BLOG_DATA from '../../blog_post.json'

const Blog = ()=> {
    const [posts, setPosts] = React.useState([])


  
    React.useEffect(()=>{
        setPosts(BLOG_DATA.posts)
  
    },[])
  
  
  
    

  
    return(

            <div className="blog-posts-container">
            <h2>The Blog</h2>
            {
              posts.map(({title, body, author, summary, date})=>
               <div>


              <h4>{title}</h4>
            
              <span>{author}</span> | <span>{date}</span>
              <h6>{summary}</h6>
                <p>{body}</p>
                </div>
              )
            }
    
            </div>
           
           
    )
}


export default Blog;