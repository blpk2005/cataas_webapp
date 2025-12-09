import Card from '../components/Card';
import { fetchRandomCat } from '../services/cataas';
import { useAsync } from '../hooks/useCataas';
import { useEffect } from 'react';

function RandomCat() {
  const { data: catUrl, loading, error, execute } = useAsync(fetchRandomCat, false);

  useEffect(() => {
    execute();
    // eslint-disable-next-line
  }, []);

  return (
    <Card>
      <h2>Random Cat</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Failed to load cat 😿</p>}
      {catUrl && <img src={catUrl} alt="Random Cat" />}
      <button onClick={execute} style={{ marginTop: '1rem' }}>New Cat</button>
    </Card>
  );
}

export default RandomCat;
