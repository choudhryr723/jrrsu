import {  RouterProvider } from 'react-router-dom';
import routers from '../src/router/router'
import './App.css';
import { Suspense } from 'react';




function App() {
  return (
    <Suspense fallback={null}>
    <RouterProvider router={routers} />
    {/*  */}
  </Suspense>
  );
}

export default App;
