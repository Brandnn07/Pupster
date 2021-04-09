import React, { Component } from "react";
import Naver from "./Naver";
import About from "./pages/About";
import Discover from "./pages/Discover";
import Search from "./pages/Search";

class Pupster extends Component {
  state = {
    currentPage: "About"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Discover") {
      return <Discover />;
    } else {
      return <Search />;
    }
  };

  render() {
    return (
      <div>
        <Naver
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Pupster;
