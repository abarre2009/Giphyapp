import axios from "axios";

export default {
  saveGiphy: function(data) {
    return axios.post("/api/saveIt");
  }
};
