import React from "react";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import EditRecipeForm from "./components/EditRecipeForm";
const App = () => {
    const RECIPE_ENDPOINT = "https://crudcrud.com/api/e891aab3f5544f0ca4a694084fa5fbfe/recipes";

    // Add state
    const [recipeList, setRecipeList] = useState([]);
    const [editing, setEditing] = useState(false);
    const [recipeToEdit, setRecipeToEdit] = useState({});

    // Iniitialize state from server
    useEffect(() => {
        const getRecipes = async () => {
            const recipesFromServer = await fetchRecipes();
            setRecipeList(recipesFromServer);
        }
        getRecipes();
    }, []);

    // GET recipes from server
    const fetchRecipes = async () => {
        const res = await fetch(RECIPE_ENDPOINT);
        const data = await res.json();

        return data;
    };
    
    // ADD recipe to state and server
    const addRecipe = async (recipe) => {
        const res = await fetch(RECIPE_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(recipe),
        });
        const data = await res.json();

        setRecipeList([...recipeList, data]);
    };
  
    // DELETE target recipe from state and server
    const deleteRecipe = async (_id) => {
        await fetch(`${RECIPE_ENDPOINT}/${_id}`, {
            method: 'DELETE'
        });

        setRecipeList(recipeList.filter((recipe) => recipe._id !== _id));
    };

    // TODO: Finish Update https://jsonworld.com/demo/crud-application-in-reactjs-with-hooks-example-and-tutorial
    // UPDATE target recipe in state and server in dedicated edit form
    const editRecipe = (_id) => {
        console.log(_id);
        setRecipeToEdit(recipeList.filter((recipe) => recipe._id === _id));
        setEditing(true);
        setRecipeList(recipeList.map())
        setEditing(false);
    };

    return (
        <Container>
                <h1 className="mb-4">Recipe Keeper</h1>
                {editing 
                    ? <EditRecipeForm onEdit={editRecipe} recipeToEdit={recipeToEdit}/> 
                    : <div><RecipeList recipeList={recipeList} onDelete={deleteRecipe} onEdit={editRecipe} />
                    <RecipeForm onAdd={addRecipe} />
                    </div>
                }
        </Container>
    )
};

export default App;
