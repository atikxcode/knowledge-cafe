import profile from '../../assets/images/profile.png';

const Header = () => {
  return (
    <div className='container mx-auto mt-10 mb-10'>
      <div className='flex justify-between items-center mb-6'>
      <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </div>
    <hr />
    </div>

    
  );
};

export default Header;