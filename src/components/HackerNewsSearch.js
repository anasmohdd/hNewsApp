import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HackerNewsSearch() {
  // State to store search query and results
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate(); 


  const handleSearchSubmit = () => {
    if(!query){
      window.alert("Please Enter The Desired News")
      return
    }
    // Use the provided API to fetch search results
    fetch(`https://hn.algolia.com/api/v1/search?query=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.hits);
      })
      .catch((error) => {
        console.error(error);

      });
  };

  return (
    <div>
      <h1 className='psb'>Hacker News</h1>
      <div className="sbp">
      <input
        type="text"
        placeholder="Search Here ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button  className='button-85' onClick={handleSearchSubmit}>Search</button>
      </div>
      
      <div className="shadow p-3 mb-4 bg-body-tertiary rounded">
        {searchResults.map((result) => (
          <div className="box1 user-card shadow p-3 mb-4 bg-body-tertiary rounded">
            <span className='csr'
            key={result.objectID}
              onClick={() => navigate(`/post/${result.objectID}`)}>📍 {result.title}
            </span>
            </div>
        ))}
        </div>

    </div>
  );
}

export default HackerNewsSearch;
