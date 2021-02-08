import { Link } from 'react-router-dom';
import logoImage from '../assets/images/logo-rimac.png';

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img className="logo__img" src={logoImage} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
