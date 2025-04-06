const BannerDot = ({ id, isActive, handleDotClick }) => {
  return (
    <input
      type="radio"
      name="radio-banner-home"
      onClick={() => handleDotClick(id)} 
      className={`radio w-2 h-2 border-none bg-lacampana-gray1 checked:bg-lacampana-red1 checked:w-4 checked:h-4 hover:scale-90 transition duration-150 ease-in-out ${isActive ? 'checked' : ''}`}
      defaultChecked={isActive}
    />
  );
};

export default BannerDot;
