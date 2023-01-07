import React from 'react'
//import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

export default function Timer() {
    const[sec,setsec]=useState(0)
    const[min,setmin]=useState(0)
    const[isrunning,setrunning]=useState(false)
    const[intervaid,setIntervalid]=useState(null)
    useEffect(()=>{
        console.log("hi")
        if(isrunning){
            const id=setInterval(()=>{
                 setsec(pre=>pre+1)
                 if(sec==59){
                    setsec(0)
                    setmin(min+1)
                 }
                 console.log(sec)
             },1000)
             setIntervalid(id)
            }
             
        else{
            clearInterval(intervaid)
        }
         
       
    },[isrunning])
   
  
  return (
    <>
    <div>{min>9?min:"0"+min}:{sec>9?sec:"0"+sec}</div>
    
    <button onClick={()=>setrunning(true)}>start</button>
    <button onClick={()=>setrunning(!isrunning)}>pause</button>
    <button onClick={()=>{setrunning(false);console.log(min,sec)}}>stop</button>
    </>
    
  )
}

