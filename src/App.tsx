import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './components/HomePage/HomePage';
import RoutesPage from './components/RoutesPage/RoutesPage';
import PlacesPage from './components/PlacesPage/PlacesPage';
import RouteOnMap from './components/RoutesPage/RouteOnMap';
import PlacesOfRoute from './components/RoutesPage/PlacesOfRoute';
import Page404 from './components/Page404';


import './App.css';
import './components/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='routes' element={<RoutesPage />} />
          <Route path='places' element={<PlacesPage />} />
          <Route path='create_route' element />
          <Route path='routes/:link' element={<RouteOnMap />} />
          <Route path='routes/:link/places' element={<PlacesOfRoute />}/>
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
