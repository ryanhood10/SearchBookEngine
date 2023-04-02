import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { searchGoogleBooks } from '../utils/API';

const SearchBooks = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await searchGoogleBooks(searchTerm);
      if (!response.ok) {
        throw new Error('Error fetching books');
      }
      const data = await response.json();
      setBooks(data.items);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Search for Books</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="search">Search Term</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a keyword or title"
                name="search"
                onChange={handleInputChange}
                value={searchTerm}
                required
              />
            </Form.Group>
            <Button type="submit" variant="success">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Search Results</h2>
          <div>
            {books.map((book, index) => (
              // Render each book here, for example:
              <div key={index}>
                <h3>{book.volumeInfo.title}</h3>
                <p>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBooks;
