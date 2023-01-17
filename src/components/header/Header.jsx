import logo from '../../media/logo.png';
import st from './Header.module.css'


const Header = () => {
   return (
      <header className={st.header}>
         <img src={logo} alt={logo} />
      </header>
   );
}

export default Header;