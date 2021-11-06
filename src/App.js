import React from "react";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import EditRecipeModal from "./components/EditRecipeModal";
import { getRecipes, createRecipe, updateRecipe, deleteRecipeApi } from "./services/Apis";

const App = () => {
    
    // Give Edit Form initial state to keep it controlled
    const initialEditFormState = {_id: null, name: '', author: '', URL:'', category:'', rating:'', comment:''};

    // Add state
    const [recipeList, setRecipeList] = useState([]);
    const [show, setShow] = useState(false);
    const [recipeToEdit, setRecipeToEdit] = useState(initialEditFormState);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Iniitialize client state from server payload
    useEffect(() => {
        fetchRecipes();
    }, []);

    // GET recipes from server
    const fetchRecipes = async () => {
        const recipesFromServer = await getRecipes();
        setRecipeList(recipesFromServer);
    };
    
    // ADD recipe to state and server
    const addRecipe = async (recipe) => {
        const data = createRecipe(recipe);
        setRecipeList([...recipeList, data]);
    };
  
    // DELETE target recipe from state and server
    const deleteRecipe = async (_id) => {
        deleteRecipeApi(_id);
        setRecipeList(recipeList.filter((recipe) => recipe._id !== _id));
    };

    // Display edit recipe modal with populated values
    const editRecipe = (_id) => {
        setRecipeToEdit(recipeList.filter((recipe) => recipe._id === _id));
        handleShow();
    };

    // UPDATE recipe from edit form and refresh page
    const onUpdate = async (editedRecipe) => {
        const { _id, ...recipeWithoutId} = editedRecipe;
        updateRecipe(_id, recipeWithoutId);
        await fetchRecipes();
    }

    return (
        <Container>
            <h1 className="mb-4">Recipe Keeper</h1>
            <EditRecipeModal recipeToEdit={recipeToEdit} show={show} handleClose={handleClose} onUpdate={onUpdate} /> 
            {recipeList.length > 0 
            ? <RecipeList recipeList={recipeList} onDelete={deleteRecipe} onEdit={editRecipe} />
            : <h2>No Recipes</h2>}
            <RecipeForm onAdd={addRecipe} />
        </Container>
    )
};

export default App;
