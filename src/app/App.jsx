import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomePage />} path={'*'}></Route>
        <Route element={<CartPage />} path={'/cart'}></Route>
      </Routes>
    </>
  );
}

export default App;
