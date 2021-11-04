import React from "react";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";
import { useState } from "react";

const App = () => {
    const [recipeList, setRecipeList] = useState([
        {
            name: "The Best Crispy Roast Potatoes Ever Recipe",
            id: "1",
            author: "J. Kenji López-Alt",
            url: "https://www.seriouseats.com/the-best-roast-potatoes-ever-recipe",
            type: "Side Dish",
            comment: "",
            rating: "10",
        },
        {
            name: "Slow-Roast Gochujang Chicken",
            id: "2",
            author: "Molly Baz",
            url: "https://www.bonappetit.com/recipe/slow-roast-gochujang-chicken",
            type: "Main",
            comment: "Delicious. Use extra gochujang.",
            rating: "8",
        },
    ]);

    const addRecipe = (recipe) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newRecipe = { id, ...recipe };
        setRecipeList([...recipeList, newRecipe]);
    }
  
    const deleteRecipe = (id) => {
        setRecipeList(recipeList.filter((recipe) => recipe.id !== id));
    }

    return (
        <div className="App container">
            <h1>Recipe Keeper</h1>
            {recipeList.length > 0 ? (
            <RecipeList recipeList={recipeList} onDelete={deleteRecipe} />
            ) : ('No Recipes')}
            <RecipeForm onAdd={addRecipe} />
        </div>
    )
}

export default App
