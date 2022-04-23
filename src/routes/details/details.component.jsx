import { useLocation } from "react-router-dom"
import Post from "../../components/post/post.component"

const Details = () => {
    const location = useLocation()
    const {post} = location.state
   // console.log(post)
    return (

        <div>
           <Post post={post}/>
        </div>
    ) 
}

export default Details