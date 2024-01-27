import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    // console.log(props.ReadMoreBtn)
    const {cover, about, name, picture,heading,time,readTime, ReadMoreBtn, bookMarkMoreBtn} = props.blog;

    const ReadmoreClick = props.ReadMoreBtn;
    const MarkmoreClick = props.bookMarkMoreBtn;
       
    return (
        <div className='blog-container'>
            <img className='blog-img' src={cover} alt="" />
            <div className="name-container">
                <div className="name-img">
                    <img src={picture} alt="" />
                    <div style={{paddingLeft:'20px'}} className="name-sec">
                        <h3>{name}</h3>
                        <p>{time}</p>
                    </div>
                </div>
                <p> {readTime} min read <button onClick={()=>ReadmoreClick(props.blog)}><FontAwesomeIcon icon={faBookmark} /></button></p>
            </div>
            <div className="info-container">
                <h2>{heading}</h2>
                <span>#beginners </span>
                <span>#programming</span> <br />
                <button onClick={()=>MarkmoreClick(props.blog)} href="">Mark as read</button>
            </div>
            
        </div>
    );
};

export default Blog;