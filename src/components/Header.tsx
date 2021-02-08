import Logo from './Logo';
const Header = () => {
  return (
    <header className={`header`}>
      <div className="container header__content">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
