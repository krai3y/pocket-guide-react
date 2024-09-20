import { FC } from 'react';

import Home from './Home'
import About from './About'
import Recommendation from './Recommendation'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


const HomePage: FC = () => {
  return (
    <>
      <Home />
      <About />
      <Recommendation />
    </>
  );
}

export default HomePage;