import React from "react";
import RecipeList from "./components/RecipeList";
import { useState } from 'react';

function App() {
  
    const [recipeList, setRecipes] = useState ([
        {
            name: "The Best Crispy Roast Potatoes Ever Recipe",
            id: "1",
            author: "J. Kenji López-Alt",
            url: "https://www.seriouseats.com/the-best-roast-potatoes-ever-recipe",
            type: "Side Dish",
            comments: [],
            rating: "10",
        },
        {
            name: "Slow-Roast Gochujang Chicken",
            id: "2",
            author: "Molly Baz",
            url: "https://www.bonappetit.com/recipe/slow-roast-gochujang-chicken",
            type: "Main",
            comments: [],
            rating: "8",
        },
    ]);

    const deleteRecipe = (id) => {
        setRecipes(recipeList.filter((recipe) => recipe.id !== id));
    }

    return (
        <div className="App">
            <h1>Recipe Keeper</h1>
            {recipeList.length > 0 ? (
            <RecipeList recipeList={recipeList} onDelete={deleteRecipe}/>
            ) : (
                'No Recipes'
            )}
        </div>
    );
}

export default App;

// Recipe Tracking
// RecipeList Component
// Recipes Component
// Recipe Form Component
// Recipe Comments Prop
// Recipe Rating Prop
// Recipe URL Prop
// Recipe Author Prop
// Recipe Type Prop
