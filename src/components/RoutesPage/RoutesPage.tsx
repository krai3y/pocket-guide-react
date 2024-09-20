import { FC } from 'react';

import { routes } from '../../data/routes';
import RoutesList from '../general/RoutesList';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


const HomePage: FC = () => {
  return (
    <>
      <h1 className="text-h text-center mt-5">Маршруты</h1>
      <div className="container mt-3">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {routes.map((route) => {
          return(
            <RoutesList 
              key={route.id}
              img={route.img}
              name={route.name}
              distance={route.distance}
              time={route.time}
              link={route.link}
            />
          );
        })}
        </div>
      </div>
    </>
  );
}

export default HomePage;