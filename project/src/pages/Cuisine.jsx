import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useParams } from "react-router-dom";
import { Grid, CardImage } from "../components/Style";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams([]);

  const getCuisine = async (category) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&cuisine=${category}&number=5`
    );
    const recipes = await data.json();

    setCuisine(recipes.results);
    console.log(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.category);
    console.log(params);
  }, [params.category]);

  return (
    <Grid>
      {cuisine.map((item) => {
        return (
          <CardImage key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </CardImage>
        );
      })}
    </Grid>
  );
}

export default Cuisine;
