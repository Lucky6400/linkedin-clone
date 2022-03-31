import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './login.css'

const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePicUrl, setProfilePicUrl] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(userAuth =>{
            dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl: userAuth.user.photoURL,
            }))
        }).catch(error=> alert(error))
    }

    const registerToApp = ()=>{
        if(!name){
            return alert('Enter Full Name')
        } else if (!email){
            return alert('Enter Email')
        } else if (!password){
            return alert('Enter Password')
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName: name,
                photoUrl: profilePicUrl,

            }).then(()=>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePicUrl,
                }))
            })
        }).catch(error => alert(error))

    }


  return (
    <div className="login">
    <div className="col-lg-2 m-auto">
        <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" alt="" className="w-100" />
    </div>
    <div className="col-lg-3 m-auto text-center">
        <form>
            <input
            value={name}
            onChange={(e) => setName(e.target.value)} 
            type="text" 
            placeholder="Full Name (required)" 
            required className="logInput" />


            <input 
            type="text"
            value={profilePicUrl}
            onChange={(e) => setProfilePicUrl(e.target.value)} 
            className="logInput" 
            placeholder="Profile pic url (optional)" />


            <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            placeholder="Email" className="logInput" />


            <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} className="logInput" 
            required placeholder="Password" />


            <button onClick={loginToApp} type="submit" className="loginButton">Login</button> <br /> <br />
            <b>Don't have an account? &nbsp;</b><a onClick={registerToApp} href="#"><b>Create one.</b></a>
            
        </form>    
        
        
    </div>
    </div>
  )
}

export default Login
