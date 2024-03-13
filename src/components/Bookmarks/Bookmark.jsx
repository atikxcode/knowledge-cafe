

const Bookmark = ({bookmark}) => {
  const {title} = bookmark;
  return (
    <div className="bg-white rounded-[18px]">
      <h3 className="text-[18px] font-semibold p-4 m-6">{title}</h3>
    </div>
  );
};

export default Bookmark;