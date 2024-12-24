import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../components/Home'
import ShastriConent from '../components/Shastri/Shastri';
import Acharya from '../components/Acharya/Acharya';
import SikshaShastriBed from '../components/SikshaShastriBed/SikshaShastriBed';
import ShastriSikshaShastri from '../components/ShastriSikshaShastri/ShastriSikshaShastri';
import Pgdca from '../components/Pgdca/Pgdca';
import Research from '../components/Research/Research';
import KarmKand from '../components/KarmKand/KarmKand';
import Vastu from '../components/Vastu/Vastu';
import Pgdyt from '../components/Pgdyt/Pgdyt';
import JyotishComponent from '../components/Jyotish/JyotishComponent';
import ImportantDate from '../components/ImportantDate/ImportantDate';
import HelpDesk from '../components/HelpDesk/HelpDesk';

const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='shastri' element={<ShastriConent />} />
      <Route path='acharya' element={<Acharya/>}/>
      <Route path='siksha_shastri_bed' element={<SikshaShastriBed/>}/>
      <Route path='shastri_siksha_shastri' element={<ShastriSikshaShastri/>}/>
      <Route path='/pgdca' element={<Pgdca/>}/>

      <Route path='/pgyt' element={<Pgdyt/>}/>
      <Route path='/karm_kand' element={<KarmKand/>}/>
      <Route path='/research' element={<Research/>}/>
      <Route path='/vastu' element={<Vastu/>}/>
      <Route path='/jyotish' element={<JyotishComponent/>}/>
      <Route path='/important_date' element={<ImportantDate/>}/>
      <Route path='/helpDesk' element={<HelpDesk/>}/>

      </Route>
  )
);

export default routers;
