/* eslint-disable react/prop-types */
import "./Sidebar.css";
const Sidebar = ({ bookmark, readmore }) => {
  //   console.log(bookmark);
  let totalTime = 0;
  for (const getitem of readmore) {
    // console.log(getitem.picture)
    totalTime = totalTime + getitem.readTime;
    // console.log(totalTime)
  }
  let bookmarkLangth = 0;
  for (const getBookmark of bookmark) {
    bookmarkLangth = bookmarkLangth + getBookmark.length;
    // console.log(getBookmark);
    var newBookmarkAdd = getBookmark.heading;
  }

  return (
    <div className="sideber-container">
      <div className="sideber-header">
        <h3>Spent time on read : {totalTime} min</h3>
      </div>
      <h2>Bookmarked Blogs:{bookmark.length}</h2>
      <div>
        {bookmark.map((bk) => (
          <div key={bk.id}>
            {" "}
            <li>{bk.heading}</li>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
