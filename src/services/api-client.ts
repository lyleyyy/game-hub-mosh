import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0ca568c675224a7fa9b9416e45384f31",
  },
});
