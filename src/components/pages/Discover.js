import React, { Component } from "react";
import API from "../utils/API";


class Discover extends Component {

componentDidMount() {
    API.search()
    .then(res => {
        this.props.stateChange("dogPic", res.data.message);
    })
    .catch(err => console.log(err));
}

randomPuppies = () => {
  API.search()
    .then(res => this.setState({ result: res.data }))
    .catch(err => console.log(err));
};

render() {
  return (
    <div className="container">
        <div className="jumbotron discoverjumbo"><h1 className="text-center">Discover Page</h1></div>
      </div>);
}
}

export default Discover;