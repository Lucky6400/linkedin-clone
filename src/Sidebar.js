import React from 'react'
import './Sidebar.css'
import coverPhoto from './images/coverPhoto.jpg'
import profilePhoto from './images/profilePhoto.jpg'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const Sidebar = () => {
  const user = useSelector(selectUser);


  return (
    <>
    <div className="bg-white">
      <div className="position-relative profile-column">
        <img src={coverPhoto} alt="" className="coverPhoto" />
        <div className="position-absolute profileParent">
          <img src={user.photoUrl} alt="" className="profilePhoto" />
        </div>
        <div className="text-center p-3 mt-5">
          <h5>{user.displayName}</h5>
          <small>{user.email}</small>
        </div>

      </div>
      <div className="stats">
        <p className="fs-12 ">Who viewed your profile:<b className='text-primary ms-3'>1533</b> </p>
        <p className="fs-12">Views of your post:<b className='text-primary ms-3'>64155</b> </p>
      </div>
      <div className="promo">
        <p className="fs-12">Access great tools of LinkedIn</p>
        <p className="fs-12 text-warning">Try premium for free</p>
      </div>
      <div className="saved">
         <p className="fs-12"><BookmarkIcon/> Saved Items</p>
      </div>
    </div>
    <div className="recent">
      <div className="text-center">
        <h5> <b>Recent Items</b> </h5>
        
      </div>
      <div className="ms-3 mt-3">
      <p className="fs-12">#luckyjain</p>
        <p className="fs-12">#luckyreact</p>
        <p className="fs-12">#fullstackdeveloper</p>
        <p className="fs-12">#russiavsukraine</p>
        <p className="fs-12">#isupportrussia</p>
        <p className="fs-12">#justiceforputin</p>
      </div>
    </div>
    </>
  )
}

export default Sidebar
