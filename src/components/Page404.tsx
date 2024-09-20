import { FC } from 'react';
import { Link } from 'react-router-dom';


const Page404: FC = () => {
  return (
    <main style={{paddingTop: '15%',}}>
      <p className="text-p text-center">Стараница не найдена</p>
      <h1 className="str-404 text-center">404</h1>
      <p className="text-p text-center">Вернуться на <Link className="text-decoration-none" to="/">главную</Link></p>
    </main>
  );
}

export default Page404;