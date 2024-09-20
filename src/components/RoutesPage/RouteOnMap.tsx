import { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { YMaps, Map, GeoObject, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import { places } from '../../data/places';
import { routes } from '../../data/routes';

const RouteOnMap: FC = () => {
  const {link} = useParams();
  const routeWithLink = routes.filter(route => route.link === link)[0];

  if (!routeWithLink) {  
    return <Navigate to="/404" />;  
  }

  const filterForRoute = places.filter(place => place.route === routeWithLink.id);
  const coordinates = filterForRoute.map(coord => {
    return(
      [coord.coordX, coord.coordY]
    );
  });

  return (
    <YMaps query={{apikey: 'a52c9117-0c92-4019-824e-df6145a1426e'}}>
      <Map
        defaultState={{
          center: routeWithLink.center,
          zoom: 15,
        }}
        width="100%"
        height="85vh"
      >
        <GeoObject
          geometry={{
            type: "LineString",
            coordinates: coordinates,
          }}
          options={{
            geodesic: true,
            strokeWidth: 5,
            strokeColor: "#F008",
          }}
        />
        <ZoomControl />
        {coordinates.map((coord, i) => {
          return(
            <Placemark
              key={i}
              geometry={coord}
              properties={{
                iconContent: i + 1,
              }} 
            />
          );
        })}
      </Map>
    </YMaps>
  );
};

export default RouteOnMap;
