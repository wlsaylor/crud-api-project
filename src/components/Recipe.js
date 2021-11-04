import React from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const Recipe = ({recipe, onDelete, onEdit}) => {
    return (
        <Card className="col-10">
            <Card.Header className="m-2 p-2"><h3>{recipe.name}</h3></Card.Header>
            <Card.Body>
                <p><em>{recipe.author}</em></p>
                <h4>{recipe.type}</h4>
                <p>{recipe.rating}/10</p>
                <p>{recipe.comment}</p>
                <p><a href={recipe.url} target="_blank" rel="noreferrer noopener">{recipe.url}</a></p>
                <Button variant="danger" type="button" onClick={() => onDelete(recipe.id)}>Delete</Button>
            </Card.Body>
        </Card>
    )
}

export default Recipe
