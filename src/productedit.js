import { useContext, useState } from "react";
import UserContext from "./usercontext";

export default function ProductEdit(props){
    console.log(props)

    let [productName,setProductName] = useState("");
    let [productBrand,setProductBrand] = useState("");
    let [productId,setProductId] = useState("");
    let [price,setPrice] = useState("");
    let [description,setDescription] = useState("");

    let userData = useContext(UserContext);

    return(
        <>
            <h1>Product Edit {props.match.params.id} </h1>

            <div className="container">
               <div className="row">
                   <div className="col-lg-12">
                       <h3>Here we are going to UPDATE Product</h3>
                   </div>
               </div>
               <form onSubmit={async (e)=>{
                   e.preventDefault();
                   userData.setProductList([...userData.productList,{
                       productName,
                       productId,
                       productBrand,
                       price,
                       description
                   }])

                   setProductName("");
                   setProductBrand("");
                   setProductId("");
                   setPrice("");
                   setDescription("");

                 await  fetch(`https://605da6189386d200171baf68.mockapi.io/Products/${props.match.params.id}`,{
                     method: "PUT",
                     body: JSON.stringify({
                        productName,
                        productId,
                        productBrand,
                        price,
                        description
                    }),
                   headers:{
                    "content-type": "application/json"
                   }

                   })
               }}>
               <div className="row">
                   <div className="col-lg-6">
                       <lable>Product Name</lable>
                       <input className="form-control" value={productName} onChange={(e)=>setProductName(e.target.value)} />
                    </div>
                    <div className="col-lg-6">
                       <lable>Product ID</lable>
                       <input className="form-control" value={productId} onChange={(e)=> setProductId(e.target.value)} />
                   </div>
               </div>
               
               <div className="row">
                   <div className="col-lg-6">
                       <lable>Product Brand</lable>
                       <input className="form-control" value={productBrand} onChange={(e)=>setProductBrand(e.target.value)} />
                    </div>
                    <div className="col-lg-6">
                       <lable>Price</lable>
                       <input className="form-control" value={price} onChange={(e)=>setPrice(e.target.value)} />   
                    </div>
                       
                   
               </div>
               <div className="row">
                   <div className="col-lg-12">
                       <lable>Description</lable>
                       <input className="form-control" value={description} onChange={(e)=>setDescription(e.target.value)} />  
                   </div>
               </div>
               <div className="row mt-3">
                   <div className="col-lg-12">
                       <button className="btn btn-success">Update</button>
                    </div>
               </div>
               </form>
           </div>
        </>
    )
}