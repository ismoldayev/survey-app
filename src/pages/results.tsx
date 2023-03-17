import { useState } from 'react';
import { useRouter } from 'next/router';
import RankingResults from '../components/RankingResults';
import { getResults } from '../utils/api';
import { Person } from '../utils/types';

const ResultsPage = () => {
  const [password, setPassword] = useState('');
  const [people, setPeople] = useState<Person[]>([]);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const results = await getResults(password);
    setPeople(results);
  };

  const goBack = () => {
    router.push('/');
  };

  return (
    <div>
      <h1>Results</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">Enter password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {people.length > 0 && <RankingResults people={people} />}
      <button onClick={goBack}>Go back</button>
    </div>
  );
};

export default ResultsPage;
