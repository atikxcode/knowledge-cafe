import Bookmark from "./Bookmark";


const Bookmarks = ({bookmarks}) => {
  return (
    <div className="lg:w-1/3">
      <h2>Bookmarks: {bookmarks.length}</h2>
      {
        bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
      }
    </div>
  );
};

export default Bookmarks;