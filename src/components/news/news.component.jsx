import React from 'react'

const News = () => {
    const [news, setNews] = React.useState([])
  
    const getNews = () => {
      console.log("getting news...")
      fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0f5aaaf46c6943a196e19b750f199b32')
      .then((res)=> res.json().then((data=>{ 
        
        setNews(data.articles)})))
        console.log("updated news...")
        
    }

    React.useEffect(()=>{
        getNews()
        // updates every 60 seconds
        /*
        const interval=setInterval(()=>{
          getNews()
         },60000)
           
           
         return()=>clearInterval(interval)
         */
    
    },[])
    return(
        <div className='news-container'>
        {
          news.map(({title})=> <h6>{title}</h6>)
        }

        </div>
    )
}

export default News;