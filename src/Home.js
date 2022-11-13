import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {url} from "./url";
export function Home() {
 
  const[state1,setstate1]=useState([]);
  let rooms=async()=>{
    //let response=await fetch("http://localhost:3000/rooms");
    let response=await fetch(`${url}/rooms`);
    let data=await response.json();
    setstate1(data);
  }
  useEffect(()=>{
    rooms();
  },[])
 

  return (
    <div>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">room_id</th>
          <th scope="col">amendis</th>
          <th scope="col">price_per_hour</th>
          <th scope="col">booknow</th>
        </tr>
      </thead>
      <tbody>
           {state1.map((value)=><Component value={value} />)}
      </tbody>
    </table>
    </div>
  );
}


function Component({value}){
  const navigate=useNavigate();
   const navi=(id)=>{
     navigate(`/booking/${id}`)
  }
  return(
    <tr>
      <th scope="row">{value.room_id}</th>
      <td>{value.amendis}</td>
      <td>{value.prize_per_hour}</td>
        <td><button class= "btn btn-success" onClick={()=>{ navi(value.room_id) }}>BookNow</button></td>
    </tr>
  )
}
