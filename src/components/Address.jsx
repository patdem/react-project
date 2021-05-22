const Address = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.firstname} {props.lastname}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.address}</h6>
        <p className="card-text">{props.city} {props.zipcode} {props.country}</p>
      </div>
    </div>
  );
};

export default Address;