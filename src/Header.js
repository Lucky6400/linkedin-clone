import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Header.css'
import logo from './images/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';

const Header = () => {

    const dispatch = useDispatch();
    const logOutApp = () =>{
        dispatch(logout())
        auth.signOut();
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} alt="" className="logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex w-75 position-relative">
                            <input className="form-input me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn-search" type="submit"><SearchIcon/></button>
                        </form>
                        <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
                            <li className="nav-item text-center">
                                <a className="nav-link active" aria-current="page" href="#"><HomeIcon/> <br /><b className="m-text">Home</b></a>
                            </li>
                            <li className="nav-item text-center">
                                <a className="nav-link" href="#"><PeopleAltIcon/><br /><b className="m-text">Connections</b></a>
                            </li>
                            <li className="nav-item text-center">
                                <a className="nav-link" href="#"><BusinessCenterRoundedIcon/><br /><b className="m-text">Jobs</b></a>
                            </li>
                            <li className="nav-item text-center">
                                <a className="nav-link" href="#"><NotificationsIcon/><br /><b className="m-text">Notifications</b></a>
                            </li>
                            <li className="nav-item text-center">
                                <a className="nav-link" href="#"><ChatIcon/><br /><b className="m-text">Messages</b></a>
                            </li>
                            <li className="nav-item dropdown text-center">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <AccountCircleIcon/><br /><b className="m-text">Profile</b>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    
                                    <li><a onClick={logOutApp} className="dropdown-item" href="#">Logout</a></li>
                                    
                                    
                                </ul>
                            </li>
                            
                            <li className="nav-item text-center">
                                <a className="nav-link" href="#"><AppsRoundedIcon/></a>
                            </li>
                            <li className="nav-item text-center">
                                <a className="nav-link text-warning" href="#">
                                <WorkspacePremiumRoundedIcon/>
                                    <small>Premium</small>
                                </a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
