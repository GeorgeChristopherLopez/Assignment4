import React from "react"
import BLOG_DATA from '../../blog_post.json'

const Post = ({post})=> {
    

  
    return(
      <div>
      <img src={post.imageURL} alt={post.title} />
      <h2>{post.title}</h2>
    
      <p>{post.author}</p>
      <p>{post.date}</p>
      <p>{post.summary}</p>
      <p>{post.body}</p>
      
      </div>
           
           
           
    )
}


export default Post;