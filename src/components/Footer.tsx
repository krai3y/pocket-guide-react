import { FC } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { routes } from '../data/routes';

const Footer: FC = () => {
  const {link} = useParams();
  const routeWithLink = routes.filter(route => route.link === link)[0];
  return (
    <footer className="shadow-footer mt-5"> 
      <nav className="navbar navbar-expand-lg pt-4"> 
        <div className="container d-flex justify-content-center justify-content-sm-start"> 
          <NavLink to="/" className="navbar-brand"> 
            <img src="../../images/logo.svg" className="brand w-nav-brand" alt='logo' /> 
          </NavLink>
          <div className="col text-center">
            <ul className="navbar-nav ms-0 ms-sm-4">
              <li className="nav-item"> 
                <NavLink to="/routes" className="nav-link color-blue">Маршруты</NavLink> 
              </li> 
              <li className="nav-item"> 
                <NavLink to="/places" className="nav-link color-blue">Места</NavLink> 
              </li>
              <li className="nav-item"> 
                <NavLink to={`routes/${link}/places`} className="nav-link color-blue">{link ? `Места «${routeWithLink.name}»` : null}</NavLink>
              </li>
            </ul>
          </div> 
        </div> 
      </nav>
      <div className="container text-center mt-4"> 
        <p className="pb-4 m-0">copyright 2024 kp - design: 351015</p> 
      </div> 
    </footer>
  );
}

export default Footer;