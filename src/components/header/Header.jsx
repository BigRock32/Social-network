import { NavLink } from 'react-router-dom';
import logo from '../../media/logo.png';
import st from './Header.module.css'


const Header = (props) => {
   return (
      <header className={st.header}>
         <img src={logo} alt={logo} />
         <div className={st.loginBlock}>
            {props.isAuth
               ? <div>{props.login} - <button onClick={props.logout} >Log out</button> </div>
               : <NavLink to={'/login'}>Login</NavLink>}
         </div>
      </header>
   );
}

export default Header;