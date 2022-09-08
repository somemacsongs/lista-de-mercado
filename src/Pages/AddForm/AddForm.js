import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom"


export default function List () {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        image: "",
        calories: "",
        servings: "",
    });

    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault();
    
        try {
          const response = await axios.post(
            "https://ironrest.herokuapp.com/mac-vitro-listamercado",
            form
          );
    
          navigate("/");
    
          console.log(response);
        } catch (err) {
          console.log(err);
        }
      }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input 
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
            />
            <label htmlFor="image">Image</label>
            <input 
                id="image"
                name="image"
                value={form.Image}
                onChange={handleChange}
            />
            <label htmlFor="calories">calories</label>
            <input 
                id="calories"
                name="calories"
                value={form.calories}
                onChange={handleChange}
            />
            <label htmlFor="servings">servings</label>
            <input 
                id="servings"
                name="servings"
                value={form.servings}
                onChange={handleChange}
            />
            <button type="submit">Submit!</button>
        </form>
    );
}