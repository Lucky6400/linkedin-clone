import React, { useEffect, useState } from 'react';
import './Main.css';
import profilePhoto from './images/profilePhoto.jpg'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ArticleIcon from '@mui/icons-material/Article';
import Post from './Post';
import { db } from './firebase'
// import { auth } from './firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const Main = () => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) =>(
      setPosts(snapshot.docs.map((doc) =>(
        {
          id: doc.id,
          data: doc.data(),
          
        }
      )))
    ))
  }, [])

  const sendPost = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      name: user.displayName,
      desc: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }


  return (
    <>
      <div className="postArea">
        <div className="d-flex">
          <div className="imgArea">
          <img src={user.photoUrl} alt="" className="imgPost" />
          </div>
          <div className="writingArea">
            <form>
            <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Start a post" className="postInput rounded-pill" />
            <button className="buttonPost" onClick={sendPost} type='submit'>Post</button>
            </form>
          </div>
        </div>
        <div className="d-flex">
          <div className="photo"><InsertPhotoIcon/>Photo</div>
          <div className="video"><VideoLibraryIcon/>Video</div>
          <div className="article"><ArticleIcon/>Article</div>
          <div className="event"><EventAvailableIcon/>Event</div>
        </div>
      </div>
      
      {posts.map(({id, data: { name, desc, message, photoUrl}})=>(
        <Post
        key={id}
        name={name}
        desc={desc}
        message={message}
        photoUrl={photoUrl}
        
        />
      ))}
      {/* <Post name="Lucky Jain" desc="Software Development Engineer 1 intern at Six30labs. React | Node | Express | MongoDB | ..." message="This is a test post Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate unde autem recusandae debitis corrupti nostrum quos, vel suscipit fuga quasi totam maiores voluptatem molestiae cupiditate officiis blanditiis porro reprehenderit libero!" photoUrl="https://static.wikia.nocookie.net/warner-bros-entertainment/images/e/e5/Courage_cartoon_network.png"/> */}
    </>
  )
}

export default Main
