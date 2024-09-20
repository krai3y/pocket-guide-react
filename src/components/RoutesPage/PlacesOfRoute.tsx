import { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import PlacesList from '../general/PlacesList';
import { routes } from '../../data/routes';
import { places } from '../../data/places';


const PlacesOfRoute: FC = () => {

  const {link} = useParams();
  const routeWithLink = routes.filter(route => route.link === link)[0];

  if (!routeWithLink) {  
    return <Navigate to="/404" />;
  }

  const filterForRoute = places.filter(place => place.route === routeWithLink.id);

  return (
    <>
    <h1 className="h3 text-center mt-5">{`Маршрут «${routeWithLink.name}»`}</h1>
    <p className="fs-5 text-center">Список мест</p>
    <div className="container mt-3">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {filterForRoute.map((place) => {
          return(
            <PlacesList
              key={place.id}
              img={place.img}
              name={place.name}/>
          );
        })}
      </div>
    </div>
  </>
  );
};

export default PlacesOfRoute;
