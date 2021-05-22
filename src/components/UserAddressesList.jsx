import React, {Component} from 'react';
import axios from 'axios';
import Address from "./Address";

class UserAddressesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addresses: [],
    }
  }

  componentDidMount() {
    axios.get("http://localhost:9000/api/address/list")
      .then(response => {
        this.setState({
          addresses: response.data,
        });
      });
  }

  render() {
    return (
      <div>
        <div className="bg-info bg-gradient">
          <h1>Addresses</h1>
          {this.state.addresses.map((address) => (
            <Address
              firstname={address.firstname}
              lastname={address.lastname}
              address={address.address}
              zipcode={address.zipcode}
              city={address.city}
              country={address.country}
              key={address.id}
            />
          ))
          }
        </div>
      </div>
    );
  }

}

export default UserAddressesList;