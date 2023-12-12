import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>
       <ul>
        <li>isim : {this.props.name} </li>
        <li>departman : {this.props.department}</li>
        <li>maaş: {this.props.salary}</li>
       </ul>
      </div>
    )
  }
}
export default User;
