import Friend from './Friend/Friend';
import st from './Friends.module.css'



const Friends = (props) => {

   let friendsElement = props.friends.map(friend => <Friend name={friend.name} />)
   return (
      <div className={st.friends}>
         <h2>Friends</h2>
         <div className={st.friendsRow}>
            {friendsElement}
         </div>
      </div>
   );
}

export default Friends;