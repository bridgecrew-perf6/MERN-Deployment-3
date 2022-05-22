import React, {useState, useEffect} from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';

const EditProduct = (props) => {
    const { _id } = useParams();
    const [form, setForm] = useState({
        title: "",
        price: 0,
        description: ""
    })

    const[errors,setErrors] = useState({});
    const history = useHistory();

    const onChangeHandler = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
 
        })
    }

    useEffect(()=>{
        // console.log("use effect is running for the char" + props.id);
        axios.get("http://localhost:8000/api/products/" + _id )
            .then(res => {
                setForm(res.data);
            })
            .catch(err=>console.log("Uh oh, no product!"))
    },[_id])

    //ToDo:  Fix to edit; not to create
    const onSubmitHandler = (e) =>{
        e.preventDefault();

        axios.patch(`http://localhost:8000/api/products/${_id}/update`, form)
            .then(res => {
                history.push("/");
            })
            .catch(err=> {
                setErrors(err.response.data.err.errors);
            })
    }

    return (
        <div>
            <form onSubmit= {onSubmitHandler} className="w-50 d-block mx-auto my-3 p-5">
            <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input value={form.title} onChange={onChangeHandler} type="text" name='title' className="form-control"/>
                    <span className = "alert-danger">{errors.title && errors.title.message}</span>
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="price">Price:</label>
                    <input value={form.price} onChange={onChangeHandler} type="number" name='price' className="form-control"/>
                    <span className = "alert-danger">{errors.price && errors.price.message}</span>
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="description">Description:</label>
                    <input value={form.description} onChange={onChangeHandler} type="text" name='description' className="form-control"/>
                    <span className = "alert-danger">{errors.description && errors.description.message}</span>
                 </div>

                <input type="submit" className="btn btn-lg btn-success mt-3"/>

            </form>
        </div>

    )
}

export default EditProduct;