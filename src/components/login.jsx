import React from 'react'
import { useState } from 'react'
import {Link,useNavigate} from"react-router-dom"
export default function Login(props) {
    const nav=useNavigate()
    const{settoken,setemail}=props
    const[form,setform]=useState({email:"",password:""})
    const eventhandler=(e)=>{
        e.preventDefault()
        console.log(form)
        fetch("https://todo-server-hyok43u6i-tejj1221.vercel.app/login",{
            method:"POST",
            headers:{
            "Accept":"application/json",
            "Content-Type":"application/json" 
           },
           body:JSON.stringify(form)
        }).then(x=>x.json()).then(y=>{
            if(y.status=="sucess"){
                setemail(form.email)
                settoken(y.token)
                nav("/home")
            }else{
                alert(y.message)
            }
            })
    }
  return (
    <div className='parent'>
        <div className="container">
            <h1>login</h1>
            <form onSubmit={eventhandler}>
                <div>
                    <input type="email" required placeholder='abc@email.com' onChange={(e)=>setform({...form,email:e.target.value})}/>
                </div>
                <div>
                    <input type="password" required placeholder='password'onChange={(e)=>setform({...form,password:e.target.value})}/>
                </div>
                <button type="submit">login</button>
            </form>
            Not an user?<Link to="/">signup</Link>
        </div>
    </div>
  )
}
