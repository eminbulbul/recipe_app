import React from "react";

const RecipeCard = () => {
  const APP_ID = "be397a7a";
  const APP_KEY = "b7714734a6ac97a1ffa5b4b2df436119";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  return <div>RecipeCard</div>;
};

export default RecipeCard;
