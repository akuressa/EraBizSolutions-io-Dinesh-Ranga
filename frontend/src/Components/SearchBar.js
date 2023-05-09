import React, { useState } from 'react';
import '../Scss/Searchbar.scss';
import {Input} from 'antd';

const { Search } = Input;

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    // call a function to perform the search using searchQuery
    // display search results
  };

  return (
    <div>
        <div className="label">Search</div>
        <form onSubmit={handleSubmit}>
            <Search placeholder="Search" value={searchQuery} onChange={handleInputChange} enterButton />
        </form>
    </div>
  );
}

export default SearchBar;
