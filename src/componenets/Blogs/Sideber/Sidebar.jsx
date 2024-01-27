import React from 'react';
import './Sidebar.css'
const Sidebar = (props) => {
    // console.log(props.bookmark);
    let totalTime = 0;
    for(const getitem of props.readmore){
        // console.log(getitem.picture)
        totalTime = totalTime +  getitem.readTime;
        // console.log(totalTime)
    }
    for(const getBookmark of props.bookmark){
        var newBookmarkAdd = getBookmark.heading;
      
    }
   
    return (
        <div className='sideber-container'>
          <div className="sideber-header">
          <h3>Spent time on read : {totalTime}  min</h3>
          </div>
          <p>{newBookmarkAdd}</p>
        </div>
    );
};

export default Sidebar;