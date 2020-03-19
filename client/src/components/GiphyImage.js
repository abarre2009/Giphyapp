import React from "react";
//import api from "../utils/api";
import axios from "axios";

class GiphyImage extends React.Component {
  saveGiphy = () => {
    axios
      .post("/api/saveIt", {
        id: this.props.imageId,
        url: this.props.imageUrl
      })

      .then(res => console.log(res));
  };

  render() {
    return (
      <div>
        <img
          src={this.props.imageUrl}
          height={200}
          width={400}
          alt={"check this"}
        />
        <button onClick={this.saveGiphy}>save</button>
      </div>
    );
  }
}

export default GiphyImage;
