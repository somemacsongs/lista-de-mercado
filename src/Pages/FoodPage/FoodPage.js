import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import style from "./FoodPage.module.css";

function FoodPage (){
    const { id } = useParams();
    const [food, setFood] = useState({});
  
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
  
    return (
      <>
        <img src={food.image} alt={food.name} className={style.img}/>
        <h1>Name: {food.name}</h1>
        <h4>Servings: {food.servings}</h4>
        <h4>Calories: {food.calories}</h4>
      </>
    );
}

export default FoodPage;