import {useState} from "react";
import { useNavigate } from "react-router-dom";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {url} from "./url";
export function Booking(){
  const[room,setroom]=useState(null)
  const {id}=useParams();
  let result=async()=>{
    //let response=await fetch(`http://localhost:3000/getroom/${id}`);
    let response=await fetch(`${url}/getroom/${id}`);
    let data=await response.json();
    setroom(data)
  }
  useEffect(()=>{
    result();
  },[])
  return(
    room ? <Booking1 getroom={room}/> : "loading..."   
  )
}


export function Booking1({getroom}) {
  const [name,setname]=useState("");
  const[date,setdate]=useState("");
  const[start_time,setstart_time]=useState("");
  const[end_time,setend_time]=useState("");
  const[room_id]=useState(getroom.room_id)
  let new_book={"name":name,"date":date,"statrt_time":start_time,"end_time":end_time,"room_id":room_id};
  console.log(new_book);
  const navigate=useNavigate();
  const navii=()=>{
    navigate("/bookedroom")
  }
  const add=async()=>{
    await fetch(`${url}/booking`,
    {method:"POST",
    body: JSON.stringify(new_book),
    headers: {"Content-Type": "application/json"}});
    navii();
 };
  return (
    <div className="select">
      <div class="mb-3" >
     <label for="exampleInputEmail1" class="form-label">customername</label>
      <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="your name please" onChange={(event)=>setname(event.target.value)} />
     </div>
     <div class="mb-3" >
     <label for="exampleInputEmail1" class="form-label">date</label>
      <input type="date" class="form-control" id="exampleInputEmail1"  placeholder="please choose the date" onChange={(event)=>setdate(event.target.value)} />
     </div>
     <div class="mb-3" >
     <label for="exampleInputEmail1" class="form-label">start_time</label>
      <input type="time" class="form-control" id="exampleInputEmail1"  placeholder="please choose the date" onChange={(event)=>setstart_time(event.target.value)} />
     </div>
     <div class="mb-3" >
     <label for="exampleInputEmail1" class="form-label">end_time</label>
      <input type="time" class="form-control" id="exampleInputEmail1"  placeholder="please choose the date" onChange={(event)=>setend_time(event.target.value)} />
     </div>
     <div class="mb-3" >
     <label for="exampleInputEmail1" class="form-label">end_time</label>
      <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="please choose the date" value={room_id} />
     </div>
     <br/>
     
     <div>
     <button type="button" class="btn btn-success" onClick={()=>add()}>Book Now</button>
     </div>
   
    </div>
  );
}
