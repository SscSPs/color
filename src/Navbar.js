import logo from './logo.svg'
const Navbar = () => (
  <nav className='header'>
    <img src={logo} alt="Logo"  className='header--logo'/>
    <h1 className='header--text'>Color Picker</h1>
  </nav>
);

export default Navbar;
