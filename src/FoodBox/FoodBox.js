import { Card, Col, Button } from 'antd';
import style from "./Food.module.css";
import { useState, useEffect} from "react";

export default function FoodBox (prop){
    return (
        <Col>
          <Card
            title={prop.food.name}
            style={{ width: 230, height: 300, margin: 10 }}
            className = {style.card}
          >
            <img src={prop.food.image} height={60} alt="food" />
            <p>Calories: {prop.food.calories}</p>
            <p>Servings: {prop.food.servings}</p>
            <p>
              <b>Total Calories: {prop.food.calories * prop.food.servings} </b> kcal
            </p>
            <Button type="primary"> Delete </Button>
          </Card>
        </Col>
      );
}
