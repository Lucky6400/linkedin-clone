import React, { useEffect } from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import './fonts.css'
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main'
import Widgets from './Widgets';
import { useDispatch, useSelector } from 'react-redux';
import { login,logout,selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';




function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(()=>{
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [])
  return (
    <div className="f-poppins">
     

     {!user? <Login/>: (
       <>
     <Header/>
       <div className="row justify-content-center mt-3">
       <div className=" sidebar mx-1">
      <Sidebar/>
       </div>
       <div className=" main mx-1">
      <Main/>
       </div>
       <div className=" widgets mx-1">
      <Widgets/>
       </div>
     </div>
     </>
     ) }
     
    </div>
  );
}

export default App;
