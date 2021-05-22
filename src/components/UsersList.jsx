import React, {Component} from 'react';
import axios from 'axios';
import User from "./User";

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    axios.get("http://localhost:9000/api/user/list")
      .then(response => {
        this.setState({
          users: response.data,
        });
      });
  }

  render() {
    return (
      <div>
        <div className="bg-info bg-gradient">
          <h1>Addresses</h1>
          {this.state.users.map((user) => (
            <User
              nickname={user.nickname}
              email={user.email}
              password={user.password}
              key={user.id}
            />
          ))
          }
        </div>
      </div>
    );
  }

}

export default UsersList;