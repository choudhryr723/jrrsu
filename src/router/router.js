import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../components/Home'
import ShastriConent from '../components/Shastri/Shastri';
import Acharya from '../components/Acharya/Acharya';
import SikshaShastriBed from '../components/SikshaShastriBed/SikshaShastriBed';
import ShastriSikshaShastri from '../components/ShastriSikshaShastri/ShastriSikshaShastri';
import Pgdca from '../components/Pgdca/Pgdca';

const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='shastri' element={<ShastriConent />} />
      <Route path='acharya' element={<Acharya/>}/>
      <Route path='siksha_shastri_bed' element={<SikshaShastriBed/>}/>
      <Route path='shastri_siksha_shastri' element={<ShastriSikshaShastri/>}/>
      <Route path='/pgdca' element={<Pgdca/>}/>

      </Route>
  )
);

export default routers;
