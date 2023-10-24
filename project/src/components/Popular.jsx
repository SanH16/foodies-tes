import { useEffect, useState } from "react";
import { Wrapper, Card, Gradient } from "./Style";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import "@splidejs/react-splide/css";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const apiResponse = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=15`
      );
      const data = await apiResponse.json();

      localStorage.setItem("popular", JSON.stringify(data.recipes)); // save string in localStorage
      setPopular(data.recipes);
      //   console.log(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 4,
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
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                  </Link>
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

export default Popular;
