import { NavLink } from 'react-router-dom';
import FriendsContainer from './Friends/Friend/FriendContainer';
import st from './Navbar.module.css'

const SelectedLink = () => {
   return (
      select => select.isActive ? st.active : st.item
   )
}

const Navbar = () => {

   return (
      <div className={st.sideBar}>
         <nav className={st.nav}>
            <div className={st.item}>
               <NavLink to='/profile' className={SelectedLink()}>Profile</NavLink>
            </div>
            <div className={st.item}>
               <NavLink to='/dialogs' className={SelectedLink()}>Messeges</NavLink>
            </div>
            <div className={st.item}>
               <NavLink to='/users' className={SelectedLink()}>Users</NavLink>
            </div>
            <div className={st.item}>
               <NavLink to='/news' className={SelectedLink()}>News</NavLink>
            </div>
            <div className={st.item}>
               <NavLink to='/music' className={SelectedLink()}>Music</NavLink>
            </div>
            <div className={st.item}>
               <NavLink to='/settings' className={SelectedLink()}>Settings</NavLink>
            </div>

            <FriendsContainer />
         </nav>
      </div>
   );
}

export default Navbar;