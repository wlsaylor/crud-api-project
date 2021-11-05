import React from "react";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import EditRecipeModal from "./components/EditRecipeModal";

const App = () => {
    const RECIPE_ENDPOINT = "https://crudcrud.com/api/1517a813a7fc4eb49749670987f68672/recipes";

    // Give Edit Form initial state to keep it controlled
    const initialEditFormState = {_id: null, name: '', author: '', URL:'', category:'', rating:'', comment:''};

    // Add state
    const [recipeList, setRecipeList] = useState([]);
    const [show, setShow] = useState(false);
    const [recipeToEdit, setRecipeToEdit] = useState(initialEditFormState);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        try {
            const res = await fetch(RECIPE_ENDPOINT);
            const data = await res.json();
    
            return data;
        } catch(e) {
            console.log('There was an error retrieving the recipes', e);
        }

    };
    
    // ADD recipe to state and server
    const addRecipe = async (recipe) => {
        try {
            const res = await fetch(RECIPE_ENDPOINT, 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(recipe),
            });
            const data = await res.json();
    
            setRecipeList([...recipeList, data]);
        } catch(e) {
            console.log('There was an error adding the recipe', e);
        }

    };
  
    // DELETE target recipe from state and server
    const deleteRecipe = async (_id) => {
        try {
            await fetch(`${RECIPE_ENDPOINT}/${_id}`, 
            {
                method: 'DELETE'
            });
    
            setRecipeList(recipeList.filter((recipe) => recipe._id !== _id));
        } catch(e) {
            console.log('There was an error deleting the recipe', e);
        }

    };

    // Load edit recipe modal
    const editRecipe = (_id) => {
        setRecipeToEdit(recipeList.filter((recipe) => recipe._id === _id));
        handleShow();
    };

    // UPDATE recipe from edit form and refresh page
    const onUpdate = async (editedRecipe) => {
        try {
            const { _id, ...recipeWithoutId} = editedRecipe;
            const resp = await fetch(`${RECIPE_ENDPOINT}/${_id}`, 
            { 
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(recipeWithoutId)
            });
            const recipesFromServer = await fetchRecipes();
            setRecipeList(recipesFromServer);

            return resp;
        } catch(e) {
            console.log('There was an error updating the recipe', e);
        }
    }

    return (
        <Container>
            <h1 className="mb-4">Recipe Keeper</h1>
            <EditRecipeModal recipeToEdit={recipeToEdit} show={show} handleClose={handleClose} onUpdate={onUpdate} /> 
            <RecipeList recipeList={recipeList} onDelete={deleteRecipe} onEdit={editRecipe} />
            <RecipeForm onAdd={addRecipe} />
        </Container>
    )
};

export default App;
