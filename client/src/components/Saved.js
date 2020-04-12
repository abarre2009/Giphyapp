import React, { Component } from "react";
import axios from "axios";
// import GiphyImage from "./GiphyImage";

class Saved extends Component {
  state = {
    savedGiphs: []
  };
  componentDidMount() {
    this.getSavedGiphs();
  }
  getSavedGiphs = () => {
    axios
      .get("/api/giph")
      .then(response => {
        this.setState({
          savedGiphs: response.data
        });
      })
      .catch(err => console.log(err));
  };
  deleteSaved = id => {
    axios
      .delete(`/api/giph${id}`)
      .then(response => {
        this.getSaveGiphs();
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <img
          key={res._id}
          src={this.getSavedGiphs}
          height={200}
          width={400}
          alt={"saved Giphs"}
        />
      </div>
    );
  }
}

export default Saved;
