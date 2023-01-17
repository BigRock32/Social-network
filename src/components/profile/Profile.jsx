
import MyPostsContainer from './MyPosts/MyPostsContainer';
import st from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
   return (
      <div className={st.content}>
         <ProfileInfo />
         <MyPostsContainer
            store={props.store}
         />
      </div>
   );
}

export default Profile;