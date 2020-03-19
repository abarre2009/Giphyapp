import React from "react";
import GiphyImage from "./GiphyImage";
import axios from "axios";
// import Button from "react-bootstrap/Button";

class SearchGiphy extends React.Component {
  state = {
    searchfield: "",
    creategiphy: []
  };
  addItem = () => {
    console.log(this.state.searchfield);
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?q=${this.state.searchfield}&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10`
      )
      .then(res => {
        console.log(res.data.data);
        console.log(
          res.data.data[0].images.fixed_height.url,
          res.data.data[0].id
        );
        var records = [];
        for (let i = 0; i < res.data.data.length; i++) {
          records.push({
            id: res.data.data[i].id,
            url: res.data.data[i].images.fixed_height.url
          });
        }
        this.setState({ creategiphy: records });
      })
      .catch(err => console.log(err));
  };

  handleChange = event => {
    var value = event.target.value;
    this.setState({
      searchfield: value
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.searchfield}
        />
        <button onClick={this.addItem}>Search and get a Giphy </button>
        {this.state.creategiphy.map((giphy, index) => (
          <GiphyImage imageId={giphy.id} imageUrl={giphy.url} key={index} />
        ))}
      </div>
    );
  }
}

export default SearchGiphy;
