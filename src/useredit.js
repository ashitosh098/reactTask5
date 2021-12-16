
import {  useState } from "react";
import { useContext } from "react";
import  UserContext  from "./usercontext";



export default function UserEdit(props){
    
    

    let [firstName,setFirstName] = useState("");
    let [lastName,setLastName] = useState("");
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");
    
    let userData= useContext(UserContext);

    return(
        <>
            <h1>User Edit {props.match.params.id}</h1>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h3>User EDIT</h3>
                    </div>
                </div>
                <form onSubmit={async (e)=>{
                    e.preventDefault();
                    userData.setUserList([...userData.userList,{
                        firstName,
                        lastName,
                        email,
                        password
                    }])

                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setPassword("");
                    
                    await fetch(`https://605da6189386d200171baf68.mockapi.io/users/${props.match.params.id}`,{
                        method: "PUT",
                        body: JSON.stringify({
                            firstName,
                            lastName,
                            email,
                            password
                        }),
                        headers:{
                            "content-type":"application/json"
                        }
                    })
                }}>
                <div className="row">
                    <div className="col-lg-6">
                        <label>First Name</label>
                        <input className="form-control" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                    </div>
                    <div className="col-lg-6">
                        <label>Last Name</label>
                        <input className="form-control" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <label>Email Id</label>
                        <input className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="col-lg-6">
                        <label>Password</label>
                        <input className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                </div>        
                
                <div className="row mt-3">
                    <div className="col-lg-6">
                        <button className="btn btn-success">Update</button>
                    </div>
                </div>   
            </form>
            </div>
        </>
    )
}
        
    
