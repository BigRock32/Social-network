import st from './ProfileInfo.module.css'

import banner from '../../../media/banner.png';

const ProfileInfo = () => {
   return (
      <>
         <div>
            <img src={banner} alt={banner} />
         </div>
         <div>
            ava + descript
         </div>
      </>
   );
}

export default ProfileInfo;