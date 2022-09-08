import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import style from "./Home.module.css";

import FoodBox from "../../Components/FoodBox/FoodBox";

function Home() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    async function fetchFoods() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/mac-vitro-listamercado"
        );

        setFoods([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchFoods();
  }, []);

  return (
    <>
        <Link to="/create-food">
            <button>Adicione uma comida!</button>
        </Link>
        <div className={style.grid}>
           {foods.map((current) => {return <FoodBox food={current} />})}
        </div>
        
    </>
  )

}

export default Home;