import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

import blog_data_xml from "../../blog_post_example.xml"
import PostPreview from "../../components/post-preview/post-preview.component";

const Home = () => {
    const [data, setData] = React.useState([])
    
     React.useEffect(()=>{
            
          fetch(blog_data_xml)
	.then((res)=> res.text().then((data)=> {
        let parser = new DOMParser()
        let xml = parser.parseFromString(data, "application/xml")
        let posts =  xml.getElementsByTagName("post")
        //console.log(posts)
        
        for(let i = 0; i < posts.length; i++){
            buildPost(posts[i])
        }

        return()=>setData([])
    }))
	.catch(function(error) {
		console.log(error);
	});


    }
    ,[])
   // console.log(data)
   const buildPost = (x) => {
       
       let date = x.getElementsByTagName("date")[0].innerHTML
       let author = x.getElementsByTagName("author")[0].innerHTML
       let title = x.getElementsByTagName("title")[0].innerHTML
       let body = x.getElementsByTagName("body")[0].innerHTML
       let summary = x.getElementsByTagName("summary")[0].innerHTML
       let imageURL = x.getElementsByTagName("imageURL")[0].innerHTML
       let newElement = {
           title,
           author,
           body,
           summary,
           date,
          imageURL
       }
       setData(theData => [...theData,newElement]);

      
   }
 //  console.log(data)
    return (
        <main>
  
        <div>
       
       
  
        
        {
            data.map((el)=>{
                return <PostPreview key={el.title} el={el} />
            })
        }
       
    </div>

        </main>
    )
}

export default Home;