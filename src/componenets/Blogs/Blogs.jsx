import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';
import './Blogs.css'
import Sidebar from './Sideber/Sidebar';



const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [readmore, setReadmore] = useState([])
    const[bookmark, setBookmark] = useState([])
    useEffect(()=>{
        fetch('../../../public/localData.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
        // console.log(blogs);
    },[])
    const ReadMoreBtn =(blog)=>{
        // console.log(blog)
        const newBlog = [...readmore, blog]
        setReadmore(newBlog)
        // console.log(newBlog)
    }
    const bookMarkMoreBtn = blog=>{
        const newBookMark = [...bookmark, blog];
        setBookmark(newBookMark)
    }
    return (
        <div>
            <div className="blogs-container">
                <div className="blogs">
                    {
                        blogs.map(blog => <Blog blog={blog} key={blog.id} ReadMoreBtn={ReadMoreBtn} bookMarkMoreBtn={bookMarkMoreBtn}> </Blog>)
                    }
                </div>
                <div className="blogs-sidebar">
                    <h4>total blog: {blogs.length}</h4>
                    <Sidebar readmore={readmore} bookmark={bookmark}></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default Blogs;