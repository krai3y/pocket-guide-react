import { FC } from 'react';
import { routes } from '../../data/routes';
import { places } from '../../data/places';

const About: FC = () => {
  return (
    <div className="container marg-container">
      <div className="row">
        <div className="col-lg">
          <img className="mw-100" src="../../images/images.png" alt="indexImg2" />
        </div>
        <div className="col-lg-5 mt-3 mt-sm-5">
          <h2 className="text-h">Посмотрите на данные без прикрас</h2>
          <p className="text-p mt-5">Откройте для себя увлекательные достопримечательности и места в вашем окружении. Узнайте, сколько интересных мест доступно вам.</p>
          <div className="row mt-4 mt-sm-5">
            <div className="col-sm-3 text-center text-sm-start">
              <p className="number-about m-0">{places.length}</p>
              <p className="text-about">Количество мест</p>
            </div>
            <div className="col-sm-3 text-center text-sm-start">
              <p className="number-about m-0">{routes.length}</p>
              <p className="text-about">Количество маршрутов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;