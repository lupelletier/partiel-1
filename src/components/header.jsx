import logo from '../img/logo.png';
export default function Header() {
  return (
    <header className='separador'>
      <img src={logo} alt="drink-budy-logo" className='logo'/>
    </header>
  );
}