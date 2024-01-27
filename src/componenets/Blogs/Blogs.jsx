import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';
import './Blogs.css'



const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('../../../public/localData.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
        console.log(blogs);
    },[])
    return (
        <div>
            <div className="blogs-container">
                <div className="blogs">
                    {
                        blogs.map(blog => <Blog blog={blog} key={blog.id}> </Blog>)
                    }
                </div>
                <div className="blogs-sidebar">
                    <h4>total blog: {blogs.length}</h4>
                </div>
            </div>
        </div>
    );
};

export default Blogs;