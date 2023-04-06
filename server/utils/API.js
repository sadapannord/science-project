import axios from "axios";

const search = async (query) =>
  axios.get(`https://api.astronomyapi.com/api/v2/bodies/${query}`);

export default { search };
