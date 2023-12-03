import { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = e => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onSubmit}>
        <button type="submit" value={searchTerm} className="SearchForm-button">
          <span>Search</span>
        </button>

        <input
          className="SearchForm-input"
          value={searchTerm}
          onChange={handleInputChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
