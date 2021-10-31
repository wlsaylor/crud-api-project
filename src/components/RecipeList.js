import React from 'react'
import Recipe from './Recipe';

const RecipeList = ({ recipeList, onDelete}) => {

    return (
        <div>
            {recipeList.map((recipe, id) => (
                <Recipe key={id} recipe={recipe} onDelete={onDelete} />
            ))}
        </div>
    )
}

export default RecipeList
