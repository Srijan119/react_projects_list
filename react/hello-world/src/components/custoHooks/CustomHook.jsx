import React, { useEffect } from 'react'

function CustomHook(count) {
    useEffect(()=>{
document.title = `count ==> ${count}`
    },[count])


}

export default CustomHook