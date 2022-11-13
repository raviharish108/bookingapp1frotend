import {useState,useEffect} from "react";
import {useNavigate,useParams} from "react-router-dom";
import {url} from "./url";

export function BookedRoom() {
  const[state,setstate]=useState([]);
  
  let bookedrooms=async()=>{
    let response=await fetch(`${url}/roomsbookeddatawith`);
    let data=await response.json();
    setstate(data);
  }
  useEffect(()=>{
    bookedrooms();
  },[])
  let dele=(id)=>{
    fetch(`${url}/checkout/${id}`,{method:"DELETE"})
   .then(()=>bookedrooms());
}
  return (
  
       <table className="table">
      <thead>
        <tr>
          <th scope="col">room_id</th>
          <th scope="col">booked Status</th>
          <th scope="col">customer Name</th>
          <th scope="col">Date</th>
          <th scope="col">start_time</th>
          <th scope="col">end_time</th>
          <th scope="col">About</th>
          <th scope="col">checkout</th>
        </tr>
      </thead>
      <tbody>
           {state.map((value)=><Component value={value} deletebutton={<button class="btn btn-danger" onClick={()=>dele(value.roomname)}>checkout</button>}/>)}
      </tbody>
    </table>
    
  );
}
function Component({value,deletebutton}){
  const navigate=useNavigate();
  return(
      <tr>
      <th scope="row">{value.roomname}</th>
      <td><button class="btn btn-success">{value.bookedstatues}</button></td>
      <td>{value.customername}</td>
      <td>{value.Date}</td>
      <td>{value.start_time}</td>
      <td>{value.end_time}</td>
      <td><button  class="btn btn-warning" onClick={(()=>navigate(`/customerdata/${value.roomname}`))}>Customer Data</button></td>
      <td>{deletebutton}</td>
    </tr>
  )
}

export function CustomerData(){
  const {id}=useParams();
  const [std, setstd] = useState({});
  let data=async()=>{
    let response=await fetch(`${url}/customerdata/${id}`);
    let data=await response.json();
     setstd(data);
  }
  useEffect(()=>{
    data();
  },);
  return(
<table className="table">
      <thead>
        <tr>
          <th scope="col">customername</th>
          <th scope="col">room_id</th>
          <th scope="col">date</th>
          <th scope="col">start_time</th>
          <th scope="col">end_time</th>
        </tr>
      </thead>
      <tbody>
           <tr>
            <td>{std.name}</td>
            <td>{std.room_id}</td>
            <td>{std.date}</td>
            <td>{std.start_time}</td>
            <td>{std.end_time}</td>
           </tr>
      </tbody>
    </table>
  )
}

