import { FC, useState } from 'react';
import { IPlaces, places } from '../../data/places';
import Filter from './Filter';
import PlacesList from '../general/PlacesList';


const PlacesPage: FC = () => {
  const [filter, setFilter] = useState('all');
  const filterIsAll = filter === 'all';
  const newListOfPlaces: IPlaces[] = places.filter((place) => filterIsAll ? place : place.filter === filter);

  const handleClick = ( category: string ) => {
    setFilter(category);
  }

  return (
  <>
      <h1 className="text-h text-center mt-5">Места</h1>
      <div className="container mt-3">
        <Filter onClick={handleClick}/>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {newListOfPlaces.map((place) => {
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
}

export default PlacesPage;