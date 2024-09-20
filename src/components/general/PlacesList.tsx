import { FC } from 'react';

interface PlacesListProps{
  img: string,
  name: string,
}

const PlacesList: FC<PlacesListProps> = ({ img, name }) => {

  return (
    <div className="col marg-top-20">
      <div className="card card-place card-cursor">
        <img src={img} className="card-img-top" alt="cardImg" />
        <div className="card-body d-flex align-items-center">
          <p className="card-title h-place m-0">{name}</p>
        </div>
      </div>
    </div>
  );
}

export default PlacesList;