import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../components/Home'
import ShastriConent from '../components/Shastri/Shastri';
import Acharya from '../components/Acharya/Acharya';

const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='shastri' element={<ShastriConent />} />
      <Route path='acharya' element={<Acharya/>}/>
      </Route>
  )
);

export default routers;
