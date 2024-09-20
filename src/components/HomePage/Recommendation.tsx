import React, { FC } from 'react';
import { IRoutes, routes } from '../../data/routes';
import RoutesList from '../general/RoutesList';

const Recommendation: FC = () => {
  const newListOfRoutes: IRoutes[] = routes.filter((route, i) => i < 3);

  return (
    <div className="container marg-container">
      <h2 className="text-h">Рекомендации</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {newListOfRoutes.map((route) => {
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
  );
}

export default Recommendation;