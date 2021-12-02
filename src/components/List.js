import axios from 'axios';
import React, {useState} from "react";
import Details from './Details';



const List = () => {
      const [list, setList] = useState([]);


      useState(()=>{
            axios.get("http://127.0.0.1:8000/api/list").then(resp=>{
                  console.log(resp.data);
                  setList(resp.data);
            }).catch(err=>{
                  console.log(err);
            })
      },[])
      return (
            <>
            <div className="container my-3">
                  <div className="row">
                        {list.map(std=>(
                              <div key={std.id}> 
                                    <Details id={std.id} s_id={std.s_id} name={std.name} email={std.email} contact={std.phone}/>
                              </div>    
                        ))}
                  </div>

            </div>
            
            </>
      )
}

export default List
