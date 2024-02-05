import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBar = ({ onSearch, loading }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => setQuery(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <Form className="d-flex mt-4" onSubmit={handleSubmit}>
      <Form.Control
        type="search"
        placeholder="Search for music or images..."
        className="me-2"
        aria-label="Search"
        value={query}
        onChange={handleChange}
        disabled={loading}  // Disable input when loading
      />
      <Button variant="outline-success" type="submit" disabled={loading}> 
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
