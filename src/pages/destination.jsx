const Destination = (props)=> {
  return (
    <div className="products-container">
      <div className="product">
        <img src="tourist_place_image.jpg" alt="Tourist Place Image" />
        <h3>{props.title}</h3>
        <p>{props.location}</p>
        <p>{props.district}</p>
        <p>{props.locationState}</p>
        <p>{props.category}</p>
        <a href={props.locationUrl} className="btn">
          Direction
        </a>
      </div>
    </div>
  );
}

export default Destination;
