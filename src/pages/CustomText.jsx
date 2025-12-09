import { useState } from 'react';
import Card from '../components/Card';
import { fetchCatWithText } from '../services/cataas';
import { useAsync } from '../hooks/useCataas';

function CustomText() {
  const [text, setText] = useState('hello');
  const { data: catUrl, loading, error, execute } = useAsync(() => fetchCatWithText(text), false);

  const handleSubmit = (e) => {
    e.preventDefault();
    execute();
  };

  return (
    <Card>
      <h2>Cat Says...</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Enter text"
          style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ marginLeft: '1rem' }}>Show Cat</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Failed to load cat 😿</p>}
      {catUrl && <img src={catUrl} alt={`Cat says ${text}`} />}
    </Card>
  );
}

export default CustomText;
