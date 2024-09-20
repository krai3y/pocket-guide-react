import { FC } from 'react';

interface FilterProps {
  onClick: (value: string) => void;
}

const Filter: FC<FilterProps> = ({ onClick }) => {

  return (
    <>
      <div className="dropdown d-flex justify-content-end">
        <button className="btn dropdown-toggle set-place py-2 px-2 br-14 border-color" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <span className="me-3">Фильтр</span><img src="../../images/funnel.svg" alt="" width="16" height="16" />
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><button type='submit' className="dropdown-item" onClick={() => onClick('all')}>Все</button></li>
          <li><button className="dropdown-item" onClick={() => onClick('dost')}>Достопримечательности</button></li>
          <li><button className="dropdown-item" onClick={() => onClick('gost')}>Гостиницы</button></li>
          <li><button className="dropdown-item" onClick={() => onClick('cafe')}>Кафе</button></li>
          <li><button className="dropdown-item" onClick={() => onClick('park')}>Сквер, парк культуры и отдыха</button></li>
        </ul>
      </div>
    </>
  );
}

export default Filter;