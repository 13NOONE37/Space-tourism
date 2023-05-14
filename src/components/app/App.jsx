import { Route, Routes, redirect } from 'react-router-dom';
import Header from '../header/Header';
import paths from '../../pages/Paths';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<h1>Not found</h1>} />
        {paths.map((path) => (
          <Route {...path} key={path.path} />
        ))}
      </Routes>
    </>
  );
}

export default App;
