import st from './../Dialogs.module.css'

import avatar from '../../../media/avatar.webp'


const Message = (props) => {
   return (
      <div className={st.message}>
         <img src={avatar} alt="" />
         <p>
            {props.message}
         </p>
      </div>
   )
}

export default Message;