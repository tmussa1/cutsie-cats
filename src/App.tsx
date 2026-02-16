import { Route, Routes } from 'react-router-dom';
import { Cats } from './components/cats';
import { CatDetailsCard } from './components/cat-details-card';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Cats />} />
      <Route path='/cat/:breedId' element={<CatDetailsCard />} />
    </Routes>
  );
}

export default App;
