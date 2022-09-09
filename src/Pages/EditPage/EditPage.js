import {useParams, useNavigate} from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

function EditPage (){
    const { id } = useParams();
    const [form, setForm] = useState({
        name: "",
        image: "",
        calories: "",
        servings: "",
    });
    const navigate = useNavigate();
  
    useEffect(() => {
      async function fetchFood() {
        try {
          const response = await axios.get(
            `https://ironrest.herokuapp.com/mac-vitro-listamercado/${id}`
          );
          delete response.data._id
          setForm({ ...response.data });
        } catch (err) {
          console.log(err);
        }
      }
      fetchFood();
    }, []);

    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault();
    
        try {
          const response = await axios.put(
            `https://ironrest.herokuapp.com/mac-vitro-listamercado/${id}`,
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
                value={form.image}
                onChange={handleChange}
            />
            <label htmlFor="calories">Calories</label>
            <input 
                id="calories"
                name="calories"
                value={form.calories}
                onChange={handleChange}
            />
            <label htmlFor="servings">Servings</label>
            <input 
                id="servings"
                name="servings"
                value={form.servings}
                onChange={handleChange}
            />
            <button type="submit">Edit</button>
        </form>
    );
}

export default EditPage;