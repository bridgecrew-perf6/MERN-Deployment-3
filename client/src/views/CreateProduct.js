import React, {useState} from "react";
import axios from 'axios';
import {useHistory} from "react-router-dom";

const CreateProduct = (props) => {
    const history = useHistory();
    const [form, setForm] = useState({
        title: "",
        price: 0,
        description: ""
    })

    const [errors, setErrors] = useState({});


    const onChangeHandler = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
 
        })
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault();

        axios.post("http://localhost:8000/api/products/new", form)
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
                    <input onChange={onChangeHandler} type="text" name='title' className="form-control"/>
                    <span className = "alert-danger">{errors.title && errors.title.message}</span>
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="price">Price:</label>
                    <input onChange={onChangeHandler} type="number" name='price' className="form-control"/>
                    <span className = "alert-danger">{errors.price && errors.price.message}</span>
                 </div>

                <div className="form-group mt-3">
                    <label htmlFor="description">Description:</label>
                    <input onChange={onChangeHandler} type="text" name='description' className="form-control"/>
                    <span className = "alert-danger">{errors.description && errors.description.message}</span>
                </div>

                <input type="submit" className="btn btn-lg btn-success mt-3"/>

            </form>
        </div>
    )
}

export default CreateProduct;
