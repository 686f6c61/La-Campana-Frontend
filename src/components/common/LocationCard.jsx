const LocationCard = ({ name, phone, img, address }) => {
  return (
    <article className="flex flex-col gap-4 bg-lacampana-white text-start p-4 rounded-tl-2xl w-full h-full">
      <img className="rounded-l-lg h-2/3 w-full object-cover" src={img} alt="" />
      <div>
        <h4 className="text-lacampana-red2">{name}</h4>
        <p>PBX: {phone}</p>
        <p>{address}</p>
      </div>
    </article>
  )
}

export default LocationCard