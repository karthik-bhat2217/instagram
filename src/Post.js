import React from 'react'
import './Post.css';
import Avatar from '@material-ui/core/Avatar';


function Post({ username , caption ,imgUrl }) {
    return (
        <div className="post">
            <div className="post__header">

            <Avatar className="post__avatar" alt="Karthik"  src=""/>
            <h3>{username}</h3>
            </div>
            

            
           
            {/* header-> avatar+username */}
            
            <img className="post__image"  src={imgUrl} alt=""/>
            {/* image */}

            <h4 className="post__text"><strong>{username}</strong> {caption}</h4>
            {/* Username + caption */}
        </div>
    )
}

export default Post
