import React from 'react';
import './Blog.css'

const Blog = (props) => {
    // console.log(props.blog)
    const {cover, about, name, picture,heading,time,readTime} = props.blog;
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
                <p> {readTime} min read</p>
            </div>
            <div className="info-container">
                <h2>{heading}</h2>
            </div>
            
        </div>
    );
};

export default Blog;