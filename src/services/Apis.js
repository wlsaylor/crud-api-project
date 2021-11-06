
const RECIPE_ENDPOINT = "https://crudcrud.com/api/12a18c4d6bec4c699f185070c626b3eb/recipes";

const getFetchOptions = (method, data) => ({ 
    method: method, 
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
});

/** 
 * GETS recipes from server
 */
export const getRecipes = async () => {
    try {
        const resp = await fetch(RECIPE_ENDPOINT);
        return await resp.json();
    } 
    catch(e) {
        console.log('There was an error retrieving the recipes', e);
        return null;
    }
}

/**
 * POSTS recipe to server
 * @param {object} recipe
 * @returns object
 */
export const createRecipe = async (recipe) => {
    try {
        const resp = await fetch(RECIPE_ENDPOINT, getFetchOptions("POST", recipe))
        return await resp.json();
    }
    catch(e) {
        console.log('There was an error adding the recipe', e);
        return null;
    }
}

/**
 * UPDATES recipe in server
 * @param {string} _id Recipe ID
 * @param {object} recipeWithoutId 
 * @returns 
 */
export const updateRecipe = async (_id, recipeWithoutId) => {
    try {
        const resp = await fetch(`${RECIPE_ENDPOINT}/${_id}`, getFetchOptions("PUT", recipeWithoutId));
        return resp;
    }
    catch(e) {
        console.log('There was an error updating the recipe', e);
        return null;
    }
}

/**
 * DELETES recipe from server
 * @param {string} _id Recipe ID
 * @returns null
 */
export const deleteRecipeApi = async (_id) => {
    try {
        const resp = await fetch(`${RECIPE_ENDPOINT}/${_id}`, { method: "DELETE" })
        return resp;
    }
    catch(e) {
        console.log('There was an error deleting the recipe', e);
        return null;
    }
}
