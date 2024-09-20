import { FC } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { routes } from '../data/routes';

const Header: FC = () => {
  const {link} = useParams();
  const routeWithLink = routes.filter(route => route.link === link)[0];
  return (
    <>
      <header className="main-view py-3 bg-white shadow-sm" id="main">
        <nav className="navbar navbar-expand-md">
          <div className="container p-0">
            <NavLink to="/" className="navbar-brand ms-3 ms-lg-0">
              <img src="../../images/logo.svg" className="brand w-nav-brand" alt='logo'/>
            </NavLink>
            <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"> 
              <img src="../../images/bur.svg" alt="burgerIcon" />
            </button>
            <div className="collapse navbar-collapse ms-3 ms-lg-4" id="navbarCollapse"> 
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"> 
                  <NavLink to="/routes" className="nav-link color-blue">Маршруты</NavLink> 
                </li>
                <li className="nav-item"> 
                  <NavLink to="/places" className="nav-link color-blue">Места</NavLink>
                </li> 
                <li className="nav-item">
                  <NavLink to={`/routes/${link}/places`} className="nav-link color-blue">{link ? `Места «${routeWithLink.name}»` : null}</NavLink>
                </li> 
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;