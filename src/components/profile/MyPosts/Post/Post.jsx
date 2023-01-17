import st from './Post.module.css'

import avatar from '../../../../media/post-avatar.png'

const Post = (props) => {
   return (
      <div className={st.item}>
         <div className={st.itemRow}>
            <img src={avatar} />
            <p>
               {props.message}
            </p>
         </div>
         <div>likes {props.likes}</div>
      </div>
   );
}

export default Post;