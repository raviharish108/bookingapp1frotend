import { useState} from "react"
import { useNavigate } from "react-router-dom";
import {url} from "./url"
export function Createroom() {
  const[seats,setseats]=useState("");
   const [amendis,setamendis]=useState("");
   const[price,setprice]=useState("");
   const[room_id,setroom_id]=useState("");
   
   const new_room={"seats_available":seats,"amendis":amendis,"prize_per_hour":price,"room_id":room_id};
   console.log(new_room);
   const navigate=useNavigate();
   const navi=()=>{
    navigate("/");
   }
   
   const add=async()=>{
    //await fetch("http://localhost:3000/createroom",
    await fetch(`${url}/createroom`,
    {method:"POST",
    body: JSON.stringify(new_room),
    headers: {"Content-Type": "application/json"}});
    navi();
 };
  return (
    <div className="select">
      <br/>
               <div >
                 <select class="form-select" aria-label="Default select example" onChange={(event)=>setseats(event.target.value)}>
                 <option selected>seats available</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                   <option value="3">Three</option>
                  <option value="4">four</option>
                  <option value="5">five</option>
                 </select>
                </div>
                <br/>
      <div>
      <select class="form-select" aria-label="Default select example" onChange={(event)=>setamendis(event.target.value)}>
           <option selected>amendis</option>
           <option value="personal care">personal care</option>
           <option value="Tissue Paper">Tissue Paper</option>
          <option value="Toiletries">Toiletries</option>
          <option value="Coffekit">Coffekit</option>
          <option value="personal care,Tissue Paper,Toiletries,Coffekit">all</option>
         </select>
      </div>
      <br/>
               <div >
                <select class="form-select" aria-label="Default select example" onChange={(event)=>setprice(event.target.value)}>
                 <option selected>price per hour</option>
                   <option value="400">Rs/-400</option>
                    <option value="500">Rs/-500</option>
                     <option value="600">Rs/-600</option>
                   </select>
                   </div>
                   <br/>
     <div class="mb-3" >
     <label for="exampleInputEmail1" class="form-label">room_id</label>
      <input type="text" class="form-control" id="exampleInputEmail1" onChange={(event)=>setroom_id(event.target.value)} placeholder="AA11"/>
     </div>
     <br/>
     <div>
     <button type="button" class="btn btn-success" onClick={()=>add()}>create room</button>
     </div>
    
    </div>
  );
}
