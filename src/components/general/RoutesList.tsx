import { FC } from 'react';
import { Link } from 'react-router-dom';

interface RoutesListProps{
  img: string;
  name: string;
  distance: string;
  time: string;
  link: string;
}

const RoutesList: FC<RoutesListProps> = ({ link, img, name, distance, time }) => {
  return (
    <Link to={`/routes/${link}`} className="text-decoration-none text-dark">
      <div className="col marg-top-20">
        <div className="card card-hover mx-auto">
          <img className="card-img-top" src={img} alt="..." />
          <div className="card-body">
            <div className="mb-4">
              <p className="text-rec" style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>{name}</p>
            </div>
            <div className="row">
              <div className="col">
                <img src="../../images/map-fill.svg" alt="map" />
                <span className='ps-1'>{distance}</span>
              </div>
              <div className="col text-end">
                <img src="../../images/time.svg" alt="time" />
                <span className='ps-1'>{time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RoutesList;