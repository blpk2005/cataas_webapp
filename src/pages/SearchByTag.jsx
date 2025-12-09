import { useState } from 'react';
import Card from '../components/Card';
import { fetchCatByTag } from '../services/cataas';
import { useAsync } from '../hooks/useCataas';

const exampleTags = ['cute', 'funny', 'sleepy', 'kitten', 'box'];

function SearchByTag() {
  const [tag, setTag] = useState('cute');
  const { data: catUrl, loading, error, execute } = useAsync(() => fetchCatByTag(tag), false);

  const handleSearch = (e) => {
    e.preventDefault();
    execute();
  };

  return (
    <Card>
      <h2>Search by Tag</h2>
      <form onSubmit={handleSearch} style={{ marginBottom: '1rem' }}>
        <select value={tag} onChange={e => setTag(e.target.value)}>
          {exampleTags.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <button type="submit" style={{ marginLeft: '1rem' }}>Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Failed to load cat 😿</p>}
      {catUrl && <img src={catUrl} alt={`Cat with tag ${tag}`} />}
    </Card>
  );
}

export default SearchByTag;
