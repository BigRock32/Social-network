import st from './../Dialogs.module.css'

import { NavLink } from 'react-router-dom';

import avatar from '../../../media/avatar_3.jpeg'

const SelectedLink = () => {
   return (
      select => select.isActive ? st.active : st.dialog
   )
}

const DialogItem = (props) => {
   let path = '/dialogs/' + props.id

   return (
      <div className={st.dialog}>
         <img src={avatar} alt="" />
         <NavLink className={SelectedLink()} to={path} >{props.name}</NavLink>
      </div>
   )
}

export default DialogItem;