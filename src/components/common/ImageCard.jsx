import { Link } from "react-router"

const ImageCard = ({ title, subtitle, image, link }) => {
  return (
    <Link to={link} className="relative bg-center h-48 tablet:h-64 desktop:h-80 rounded-tl-2xl hover:bg-cover transition ease-in-out duration-300 overflow-hidden group">
      <img className="absolute w-full h-full object-cover transition ease-in-out duration-300 group-hover:scale-125 -z-10" src={image} alt="image" />
      <div className="bg-gradient-to-b from-lacampana-gray1/0 via-lacampana-gray1/80 to-lacampana-gray1 flex flex-col justify-end p-4 h-full rounded-tl-2xl z-10">
        <h4 className="text-lacampana-white">{title}</h4>
        <p className="text-lacampana-white text-p2 lg:text-p2-desktop">{subtitle}</p>
      </div>
    </Link>
  )
}

export default ImageCard