import React, { useState } from 'react';
import { createClient } from 'appwrite';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const client = new createClient({
        endpoint: 'YOUR_APPWRITE_ENDPOINT',
        project: 'YOUR_APPWRITE_PROJECT_ID',
      });

      const response = await client.database.listDocuments('YOUR_COLLECTION_ID', searchTerm ? `?search=${searchTerm}` : '');

      setResults(response.documents);
    } catch (error) {
      console.error('Error searching:', error);
    }
    setLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter search term"
      />
      <button onClick={handleSearch} disabled={loading}>Search</button>
      {loading && <p>Loading...</p>}
      <ul>
        {results.map((result) => (
          <li key={result.$id}>{result.name}</li> // Assuming 'name' is the field you want to display
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
