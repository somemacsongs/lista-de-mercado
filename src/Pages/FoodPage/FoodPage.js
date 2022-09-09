import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import style from "./FoodPage.module.css";
import toast from "react-hot-toast";

function FoodPage (){
    const { id } = useParams();
    const [food, setFood] = useState({});
    const navigate = useNavigate();
  
    useEffect(() => {
      async function fetchFood() {
        try {
          const response = await axios.get(
            `https://ironrest.herokuapp.com/mac-vitro-listamercado/${id}`
          );
  
          setFood({ ...response.data });
        } catch (err) {
          console.log(err);
        }
      }
      fetchFood();
    }, []);

    function handleToast(){
      toast((t) => (
        <span>
          Tem certeza que quer <b>deletar</b> {food.name}?
          <button onClick={() => toast.dismiss(t.id)}>
            Nao
          </button>
          <button onClick={()=>{
            handleDelete(t);
            }}
          >
            Sim
          </button>
        </span>
      ));
    }
    async function handleDelete(t) {
        try{
          await axios.delete(`https://ironrest.herokuapp.com/mac-vitro-listamercado/${id}`);
          toast.dismiss(t.id);
          navigate("/");
        } catch (err) {
          console.log(err);
        }
    }
    
  
    return (
      <>
        <img src={food.image} alt={food.name} className={style.img}/>
        <h1>Name: {food.name}</h1>
        <h4>Servings: {food.servings}</h4>
        <h4>Calories: {food.calories}</h4>
        <Link to={`/${id}/edit`}><button>Editar</button></Link>
        <button onClick={handleToast}>Deletar</button>
      </>
    );
}

export default FoodPage;