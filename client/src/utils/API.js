import axios from "axios";

const planetInfoSearch = async (query) => {
  const response = await axios.get(
    `https://api.le-systeme-solaire.net/rest/bodies/:${query}`
  );
  return response.data;
};

//eslint-disable-next-line
export default { planetInfoSearch };
