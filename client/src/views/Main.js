import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom";

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const history = useHistory();
    useEffect(()=> {
        axios.get("http://localhost:8000/api/products/all")
            .then(res=>{
                // console.log(res);
                setProducts(res.data);
            })
            .catch(err=>console.log(err))
    },[products])

    const onDeleteHandler = (_id) => {
        if(window.confirm(`Are you sure you want to slam ${products.title}?`)){
            axios.delete(`http://localhost:8000/api/products/${_id}/delete`)
                .then(res=>{
                    history.push("/");
                })
        }
    }

    return (
        <div className="container w-75 d-flex justify-content-center" >
            <table className="table table-striped w-auto">
                <thead>
                    {/* <th><h3>ID</h3></th> */}
                    <th><h3>Title</h3></th>
                    <th><h3>Price</h3></th>
                    <th><h3>Description</h3></th>
                </thead>
                <tbody>
                {
                    products.map((product,i)=>{
                        return <tr key={product._id}>
                        {/* <td>key={product._id}</td> */}
                        <td><Link to={`/products/${product._id}`}>{product.title}</Link></td> 
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <button onClick={(e)=>onDeleteHandler(product._id)} className="btn btn-lg btn-danger">Delete?</button>
                        </tr>
                    })
                }
                </tbody>
            </table>

         </div>
    )
}

export default Main;