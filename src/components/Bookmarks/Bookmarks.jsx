import Bookmark from "./Bookmark";


const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className="lg:w-1/3 flex flex-col gap-6">
      <div className="border-[1px] border-[#6047EC] rounded-[8px] bg-[#6047EC1A]">
        <h3 className="text-[#6047EC] text-[24px] font-bold text-center p-4">Reading Time: {readingTime} min</h3>
      </div>
    <div className=" bg-[#1111110D] p-8 rounded-[18px]">
      <h2 className="text-center text-[24px] font-bold">Bookmarked Blogs : {bookmarks.length}</h2>
      {
        bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
      }
    </div>
    </div>
    
  );
};

export default Bookmarks;