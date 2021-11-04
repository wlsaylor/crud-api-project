import React from 'react'
import Recipe from './Recipe';

const RecipeList = ({ recipeList, onDelete, onEdit}) => {

    return (
        <div>
            {recipeList.map((recipe, id) => (
                <Recipe key={id} recipe={recipe} onDelete={onDelete} onEdit={onEdit} />
            ))}
        </div>
    )
}

export default RecipeList
