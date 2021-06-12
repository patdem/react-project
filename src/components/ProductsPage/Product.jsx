const Product = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.category}</h6>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
};

export default Product;