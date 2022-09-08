import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FoodBox from "../FoodBox/FoodBox";

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
        {foods.map((current) => {<FoodBox food={current} />})}
    </>
  )

}

export default Home;