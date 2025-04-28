const BannerDot = ({ id, onClick, isChecked }) => {
  return (
    <input
      type="radio"
      checked={isChecked}
      name="radio-banner-home"
      onClick={() => onClick(id)}
      className="radio w-[7px] h-[7px] border-none bg-lacampana-gray1 checked:bg-lacampana-red1 checked:w-[13px] checked:h-[13px] hover:scale-90 transition duration-150 ease-in-out"
    />
  );
};

export default BannerDot;
