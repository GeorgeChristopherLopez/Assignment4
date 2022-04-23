import { Link } from "react-router-dom"

const PostPreview = ({el}) => {
    return (
        <div style={{display: 'flex', padding: '1em'}}>
               
                <div>
                <Link to="/details"  state={{ post: el}}>
             
                <h2>{el.title}</h2>

                </Link>
                <p>{el.summary}</p>
                <p>{el.author}</p>
               
                
                </div>
               
                 <div>
                 <Link to="/details"  state={{ post: el}}>
             
                <img src={el.imageURL} alt={el.title} />
                   </Link>

                </div>
             
             
              
                </div>
    )
}

export default PostPreview