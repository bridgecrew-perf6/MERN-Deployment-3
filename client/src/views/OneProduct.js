import React, {useState, useEffect} from "react";
import axios from 'axios';
import {useParams, useHistory} from "react-router-dom";
import { Link } from "react-router-dom";

const OneProduct = (props) => {
    const {_id} = useParams()
    const [products, setProducts] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        // console.log("use effect is running for the char" + props.id);
        axios.get("http://localhost:8000/api/products/" + _id )
            .then(res => {
                setProducts(res.data);
            })
            .catch(err=>console.log("Uh oh, no product!"))
    },[])

    const onDeleteHandler = () => {
        if(window.confirm(`Are you sure you want to slam ${products.title}?`)){
            axios.delete(`http://localhost:8000/api/products/${_id}/delete`)
                .then(res=>{
                    history.push("/");
                })
        }
    }

    return(
        <div className='products'>
            <h1>{products ? products.title : ""}</h1>
            <p><span>Price:</span> {products ? products.price : ""} </p>
            <p><span>Description:</span> {products ? products.description : ""} </p>
            <div>
                <button onClick={onDeleteHandler} className="btn btn-lg btn-danger">Slam it!</button>
                <Link to={`/products/${_id}/editProduct`} className="btn btn-warning btn-lg m-3">Edit</Link>
            </div>
            
        </div>
    )
}

export default OneProduct;