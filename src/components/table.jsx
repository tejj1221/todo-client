import React from 'react'
import Timer from './timer'
export default function Table(props) {
  const{data}=props
  return (
    <div>
      <table>
        <thead>
          <th>Activity</th>
          <th>Status</th>
          <th>Time taken</th>
          <th>Action</th>
        </thead>
      
      <tbody>
        {data.map(x=>{
          return(
            <tr>
              <td>{x.activity}</td>
              <td>{x.status}</td>
              <td>{x.status=="Completed"||"Ongoing"?<Timer/>:x.timetaken}</td>
              {x.status=="Completed"?<td>{" "}</td>:<td><button>Start</button></td>}
            </tr>
          )
        })}
      </tbody>
      </table>



    </div>
  )
}
