import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

function EditRecipeModal({show, handleClose, recipeToEdit, onUpdate}) {
    // Initialize state on form
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [URL, setURL] = useState('');
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');
    const [_id, set_id] = useState('');

    useEffect(
        () => {
            if (show) {fillForm(recipeToEdit[0]);}
        },
        [recipeToEdit, show]
    )

    const fillForm = (recipeToEdit) => {
        setName(recipeToEdit.name);
        setAuthor(recipeToEdit.author);
        setURL(recipeToEdit.URL);
        setCategory(recipeToEdit.category);
        setRating(recipeToEdit.rating);
        setComment(recipeToEdit.comment);
        set_id(recipeToEdit._id);
    }

    // Handle form submission. Adds to state and server. Resets form.
    const onSubmit = (e) => {
        e.preventDefault();

        onUpdate({name, author, URL, category, rating, comment, _id})

        setName('');
        setAuthor('');
        setURL('');
        setCategory('');
        setRating('');
        setComment('');
    };

    return (
      <>
        <Modal show={show} onHide={handleClose}>
        <Form onSubmit={onSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button variant="primary" type="submit" onClick={handleClose}>
                Save Changes
                </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
  
  export default EditRecipeModal;
