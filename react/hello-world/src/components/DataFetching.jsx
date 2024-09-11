import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

function DataFetching() {

    const [posts,setPosts]=useState([]);
    const [id,setId]=useState(1);
    const [upid,upsetid]=useState();
   function handle(){
     upsetid(id)
    }

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${upid}`).then(res=>{console.log(res);
        setPosts(res.data);
    }).catch(e=>{
        console.log(e);
    })
  },[upid])




  return (
    <>
    <div>DataFetching</div>
    <input type="text" onChange={(e)=>setId(e.target.value)} />
    <button onClick={handle}>update</button>
    <li>{posts.title}</li>
    {/* <ul>{posts.map(posts=>{
        return <li key={posts.id}>{posts.title}</li>
    })}</ul> */}
    </>
  )
}

export default DataFetching