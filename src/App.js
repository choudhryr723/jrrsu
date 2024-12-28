import { RouterProvider } from 'react-router-dom';
import routers from '../src/router/router'
import './App.css';
import { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Includes both Bootstrap JS and Popper.js


function App() {
  return (
    <Suspense fallback={null}>
      <RouterProvider router={routers} />
      {/*  */}
    </Suspense>
  );
}

export default App;
