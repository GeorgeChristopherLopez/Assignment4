import React from 'react'
import { getNewsUrl } from '../services/news.service'
const News = () => {
    const [news, setNews] = React.useState([])
    
    const getNews = async () => {
    
      await fetch(getNewsUrl)
      .then((res)=> res.json().then((data=>{ 
        
      setNews(data.articles)
      })))
      
        console.log('the news fetched/re-fetched', new Date())
        
    }

    React.useEffect(()=>{
        getNews()
        // updates every 60 seconds
        
        const interval=setInterval(()=>{
          getNews()
         }, 60000)
           
           
         return()=>clearInterval(interval)
       
    
    },[])
    
    return(
        <div className='news-container'>
        {
          news.length ? (news.map(({title, author, description, content})=> 
          <div className="news-card" key={title}>


          <h3 className='news-title'>{title}</h3>
          <p className='news-author'>{author}</p>
         <hr className='linebreak'/>
          </div> 
          
          )): <h3> Sorry, no news available </h3>
        }

        </div>
    )
}

export default News;