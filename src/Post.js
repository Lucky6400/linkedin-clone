import React, { useState } from 'react';
import './post.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';




const Post = ({ name, desc, message, photoUrl }) => {

    const [ color, setColor ] = useState('secondary');

    const handleLike = () => {
        if (color === "secondary") {
            setColor("primary");
        } else if (color === "primary") {
            setColor("secondary");
        }
    }

    return (
        <>
            <div className="post">
                <div className="d-flex align-items-center">
                    <img src={photoUrl} alt="" className="imgPoster" />
                    <p className="name">{name} <br />
                        <small className="fs-23">{desc} <br />
                            {`${new Date().getHours()}:${new Date().getMinutes()} `}</small> <br />

                    </p>
                </div>
                <div className="message">
                    {message}
                </div>
                <hr />
                <div className="d-flex text-secondary">
                    <button onClick={handleLike} className={`text-center text-${color} w-25`}><ThumbUpIcon />Like</button>
                    <button className="text-center text-secondary w-25"><CommentRoundedIcon />Comment</button>
                    <button className="text-center text-secondary w-25"><ShareIcon />Share</button>
                    <button className="text-center text-secondary w-25"><SendIcon />Send</button>
                </div>
            </div>
        </>
    )
}

export default Post
