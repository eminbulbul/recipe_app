import axios from "axios";
import React from "react";
import { useState } from "react";
import Header from "../../components/header/Header";
import homeSvg from "../../assets/home.svg";
import { HomeImg, ImgDiv, MainContainer } from "./HomeStyles";
import RecipeCardComp from "./RecipeCardComp";

const APP_ID = "be397a7a";
const APP_KEY = "b7714734a6ac97a1ffa5b4b2df436119";

const Home = () => {
  const [query, setQuery] = useState("");
  const [food, setFood] = useState();

  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;
  const getData = async () => {
    if (query) {
      const result = await axios.get(url);

      setFood(result.data.hits);
    }
  };
  return (
    <div>
      <Header
        setQuery={setQuery}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
      />
      {food ? (
        <MainContainer>
          {food.map((liste, index) => (
            <RecipeCardComp key={index} recipe1={liste.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};
export default Home;
