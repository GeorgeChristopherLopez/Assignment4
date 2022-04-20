import React from "react"
import BLOG_DATA from '../../blog_post.json'

const Blog = ()=> {
    const [posts, setPosts] = React.useState([])


  
    React.useEffect(()=>{
        setPosts(BLOG_DATA.posts)
  
    },[])
  
  
  
    

  
    return(

            <div className="blog-posts-container">
            <h1>The Blog</h1>
            {
              posts.map(({id,title, body, author, summary, date})=>
                <div key={id} className="blog-card">
                  <h2 className="blog-title">{title}</h2>
                  <span className="blog-author">{author}</span> | <span className="blog-date">{date}</span>
                  <h4 className="blog-summary">{summary}</h4>
                  <p className="blog-body">{body}</p>
                </div>
              )
            }
    
            </div>
           
           
    )
}


export default Blog;