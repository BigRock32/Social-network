import st from './Friend.module.css'
import avatar from '../../../../media/avatar_2.jpeg'

const Friend = (props) => {
   return (
      <div className={st.item}>
         <img src={avatar} alt="" />
         <div className={st.name}>{props.name}</div>
      </div>
   );
}

export default Friend;