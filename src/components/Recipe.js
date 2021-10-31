import React from 'react'
import { ButtonVariant } from 'react-bootstrap/esm/types';

const Recipe = ({recipe, onDelete}) => {
    return (
        <div>
            <h2>{recipe.name}</h2>
            <p>{recipe.type}</p>
            <p>{recipe.author}</p>
            <p>{recipe.url}</p>
            <p>{recipe.rating}</p>
            <button type="button" onClick={() => onDelete(recipe.id)}>Delete</button>
        </div>
    )
}

export default Recipe
