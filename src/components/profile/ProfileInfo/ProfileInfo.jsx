import st from './ProfileInfo.module.css'

import banner from '../../../media/banner.png';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

   if(!props.profile){
      return <Preloader />
   }
   return (
      <>
         {/* <div>
            <img src={banner} alt={banner} />
         </div> */}
         <div>
            <img src={props.profile.photos.large} alt="" />
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            <div className={st.description}>
               <h3>{props.profile.fullName}</h3>
               <div>{props.profile.aboutMe}</div>
            </div>
         </div>
      </>
   );
}

export default ProfileInfo;