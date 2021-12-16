import { Link } from "react-router-dom";
import {  useEffect, useState } from "react";

export default function ProductList(){

    



let[productlist,setProductlist] = useState([]);

useEffect(() =>{
    async function fetchData(){
        let product = await fetch("https://605da6189386d200171baf68.mockapi.io/Products");
        let productData = await product.json();
        console.log(productData);
        setProductlist([...productData])

    }
    fetchData();

},[])



    return(
        <>
            <h1 class="h3 mb-2 text-gray-800">Tables</h1>
                    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the  
                            official DataTables documentation.</p>

            <Link to="/productcreate">
                <button className="btn btn-primary">Create Product</button>
            </Link>

                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Product Name</th>
                                            <th>ID</th>
                                            <th>Brand</th>
                                            <th>Price</th>
                                            <th>Description</th>
                                            <th>Action Edit</th>
                                            <th>Action Delete</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                        {
                                            productlist.map((obj,index)=>{
                                                console.log(obj)
                                                return<tr>
                                                <td>{obj.productName}</td>
                                                <td>{obj.productId}</td>
                                                <td>{obj.productBrand}</td>
                                                <td>{obj.price}</td>
                                                <td>{obj.description}</td>
                                               <td>
                                                   <Link to={`/productedit/${obj.id}`}>
                                                       <button className="btn btn-info">Edit Product</button>
                                                   </Link>
                                               </td>
                                               <td>
                                                    <button className="btn btn-danger" onClick={async ()=>{
                                                         await fetch(`https://605da6189386d200171baf68.mockapi.io/Products/${obj.id}`,{
                                                             method:"DELETE"
                                                
                                                         });

                                                         setProductlist(productlist.splice(index,0))

                                                    }}>Delete</button>
                                               </td>
    
                                            </tr>
                                            })
                                        }
                                        
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
        </>
    )
}