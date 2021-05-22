const User = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.nickname}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.email}</h6>
        <p className="card-text">{props.password}</p>
      </div>
    </div>
  );
};

export default User;