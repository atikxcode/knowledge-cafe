
const Blog = ({blog, handleAddToBookmarks, handleMarkAsRead}) => {
  const {id, title, cover, author_img, author, posted_date, reading_time, hashtags} = blog;
  return (
    <div className="lg:w-[1000px] mb-10">
      <div className="lg:w-[850px]">
      <img className="w-[375px] lg:w-[845px] lg:h-[450px] mb-8" src={cover} alt="" />
        <div className="flex justify-between">
        <div className="flex gap-4">
          <img className="w-[50px] h-[50px] rounded-[50%]" src={author_img} alt="" />
          <div className="flex flex-col mb-[18px]">
            <h2 className="font-bold text-xl lg:text-2xl">{author}</h2>
            <p className="text-[#11111199] text-[14px] lg:text-[16px] font-semibold">{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center ">
          <p className="text-[#11111199] text-[16px] lg:text-xl font-medium">{reading_time} min read</p>
          <button onClick={() => handleAddToBookmarks(blog)} className="text-[#11111199] -xl font-medium"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
        </svg></button>
          

        </div>

        </div>
        <h2 className="text-2xl lg:text-[40px] w-[350px] lg:w-[737px] font-bold mb-4">{title}</h2>
        <div className="flex gap-3 text-[#11111199]">
        <p>{hashtags[0]}</p>
        <p>{hashtags[1]}</p>
        <p>{hashtags[2]}</p>
        </div>
        <button onClick={() => handleMarkAsRead(reading_time, id)} className="underline text-[#6047EC] text-[16px] lg:text-xl font-semibold">Mark as read</button>
      </div>
        
    </div>
  );
};

export default Blog;