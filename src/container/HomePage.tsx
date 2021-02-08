import Sider from '../components/Sider';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Header from '../components/Header';
import shieldIcon from '../assets/icons/shield-icon.png';
import mobileIcon from '../assets/icons/mobile-icon.png';
import moneyIcon from '../assets/icons/money-icon.png';
import clinicIcon from '../assets/icons/clinic-icon.png';

const HomePage = () => {
  return (
    <div className="home">
      <Sider />
      <div className="container">
        <Header />
        <div className="home__container">
          <div className="home__left">
            <div className="benefits">
              <div className="benefits__title">
                <h1>
                  Seguro de <b>Salud</b>
                </h1>
                <ul className="benefits__list">
                  <li className="benefits__item">
                    <i>
                      <img src={shieldIcon} alt="shield icon" />
                    </i>
                    <span>Cómpralo de manera fácil y rápida</span>
                  </li>
                  <li className="benefits__item">
                    <i>
                      <img src={mobileIcon} alt="mobile icon" />
                    </i>
                    <span>Cotiza y compra tu seguro 100% digital </span>
                  </li>
                  <li className="benefits__item">
                    <i>
                      <img src={moneyIcon} alt="money icon" />
                    </i>
                    <span>Hasta S/.12 millones de cobertura anual</span>
                  </li>
                  <li className="benefits__item">
                    <i>
                      <img src={clinicIcon} alt="clinic icon" />
                    </i>
                    <span>Más de 300 clínicas en todo el Perú</span>
                  </li>
                </ul>
              </div>
              <div className="benefits__footer">
                © 2020 RIMAC Seguros y Reaseguros.
              </div>
            </div>
          </div>
          <div className="home__right">
            <Form />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
