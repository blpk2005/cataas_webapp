import Card from '../components/Card';
import { fetchRandomGif } from '../services/cataas';
import { useAsync } from '../hooks/useCataas';
import { useEffect } from 'react';

function RandomGif() {
  const { data: gifUrl, loading, error, execute } = useAsync(fetchRandomGif, false);

  useEffect(() => {
    execute();
    
  }, []);

  return (
    <Card>
      <h2>Random Cat GIF</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Failed to load cat GIF 😿</p>}
      {gifUrl && <img src={gifUrl} alt="Random Cat GIF" />}
      <button onClick={execute} style={{ marginTop: '1rem' }}>New GIF</button>
    </Card>
  );
}

export default RandomGif;
