import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { Grid, CardImage } from "../components/Style";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams([]);

  const getCuisine = async (category) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&cuisine=${category}&number=8`
    );
    const recipes = await data.json();

    setCuisine(recipes.results);
    // console.log(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.category);
    console.log(params);
  }, [params.category]);

  return (
    <Grid animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {cuisine.map((item) => {
        return (
          <CardImage key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </CardImage>
        );
      })}
    </Grid>
  );
}

export default Cuisine;
