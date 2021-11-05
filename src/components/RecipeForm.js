import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

const RecipeForm = ({ onAdd }) => {

    // Initialize state on form
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [URL, setURL] = useState('');
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');

    // Handle form submission. Adds to state and server. Resets form.
    const onSubmit = (e) => {
        e.preventDefault();

        onAdd({name, author, URL, category, rating, comment})
        
        setName('');
        setAuthor('');
        setURL('');
        setCategory('');
        setRating('');
        setComment('');
    };

    return (
        <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" id="recipeForm.name">
            <Form.Label>Recipe Name</Form.Label>
            <Form.Control type="input" value={name} onChange={(e) => setName(e.target.value)} required placeholder="e.g. 'Spicy Cocunut Shrimp'" />
        </Form.Group>
        <Form.Group className="mb-3" id="recipeForm.author">
            <Form.Label>Author</Form.Label>
            <Form.Control type="input" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="e.g. 'Bill Saylor'" />
        </Form.Group>
        <Form.Group className="mb-3" id="recipeForm.url">
            <Form.Label>URL</Form.Label>
            <Form.Control as="input" value={URL} onChange={(e) => setURL(e.target.value)} required placeholder="https://recipeurl.com/" />
        </Form.Group>
        <Row className="my-3">
            <Col>
                <Form.Select value={category} onChange={(e) => setCategory(e.target.value)} id="recipeForm.category">
                    <option>Recipe Category</option>
                    <option value="main">Main Dish</option>
                    <option value="side">Side Dish</option>
                    <option value="dessert">Dessert</option>
                    <option value="soup">Soup</option>
                    <option value="salad">Salad</option>
                    <option value="snack">Snack/Appetizer</option>
                    <option value="breakfast">Breakfast</option>
                </Form.Select>
            </Col>
            <Col>
                <Form.Select value={rating} onChange={(e) => setRating(e.target.value)} id="recipeForm.rating">
                    <option>Rate this Recipe</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                    <option value="5">Six</option>
                    <option value="7">Seven</option>
                    <option value="8">Eight</option>
                    <option value="9">Nine</option>
                    <option value="10">Ten</option>
                </Form.Select>
            </Col>
        </Row>
        <Form.Group className="mb-3" value={comment} onChange={(e) => setComment(e.target.value)} id="recipeForm.comment">
            <Form.Label>Recipe Comments</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">Add Recipe</Button>
        </Form>
    )
};

export default RecipeForm;
