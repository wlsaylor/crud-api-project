import React from 'react'
import { Button } from 'react-bootstrap';
import { Card, Col } from 'react-bootstrap';

const Recipe = ({recipe, onDelete, onEdit }) => {
    return (
        <Col lg={6} className="mb-1">
            <Card className="h-100">
            <Card.Header className="m-2 p-2"><h3>{recipe.name}</h3></Card.Header>
            <Card.Body>
                <p><em>{recipe.author}</em></p>
                {recipe.category ? <h4>{recipe.category}</h4> : <p>No category</p>}
                {recipe.rating ? <p>{recipe.rating}/10</p> : <p>No rating</p>}
                <p>{recipe.comment}</p>
                <p><a href={recipe.url} target="_blank" rel="noreferrer noopener">{recipe.url}</a></p>
                <Button variant="danger" className="m-1" type="button" onClick={() => onDelete(recipe._id)}>Delete</Button>
                <Button variant="warning" className="m-1" type="button" onClick={() => onEdit(recipe._id)}>Edit</Button>
            </Card.Body>
            </Card>
        </Col>
    )
};

export default Recipe;
