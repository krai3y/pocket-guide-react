import { FC } from 'react';
import { Link } from 'react-router-dom';

const Home: FC = () => {
  return (
    <div className="container marg-container">
      <div className="row">
        <div className="col-lg">
          <h1 className="text-h">Откройте для себя места из «Карманного путеводителя»</h1>
          <p className="text-p mt-4 mt-sm-5">Откройте местоположение знаковых мест и развлечений. Просмотрите все на карте. Составьте свой собственный путеводитель.</p>
          <Link to="/routes" className="btn btn-index fs-5 mt-4 mt-sm-5 py-3 px-5 rounded-pill">Начать путешествие</Link>
        </div>
        <div className="col-lg-5 mb-0 mb-sm-4 mb-lg-0 miu">
          <img className="float-start float-lg-end mw-100 d-none d-sm-block" src="../../images/tower.png" alt="indexImg" />
        </div>
      </div>
    </div>
  );
}

export default Home;