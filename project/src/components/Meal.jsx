import { useState, useEffect } from "react";
import { Wrapper, Card, Gradient } from "./Style";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Meal() {
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    getMeal();
  }, []);

  const getMeal = async () => {
    const check = localStorage.getItem("meal");

    if (check) {
      setMeal(JSON.parse(check));
    } else {
      const apiResponse = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=9&tags=meal,dessert`
      );
      const data = await apiResponse.json();

      localStorage.setItem("meal", JSON.stringify(data.recipes)); // save string in localStorage
      setMeal(data.recipes);
      console.log(data.recipes);
    }
  };
  return (
    <div>
      <Wrapper>
        <h3>Meal Dessert</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "5rem",
            breakpoints: {
              1440: {
                perPage: 4,
                perMove: 4,
              },
              1024: {
                perPage: 3,
                perMove: 3,
              },
              768: {
                perPage: 2,
                perMove: 2,
              },
              640: {
                perPage: 1,
                perMove: 1,
              },
            },
          }}
        >
          {meal.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

export default Meal;
