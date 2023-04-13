import axios from "axios";

const search = async (query) => {
  const response = await axios.get(
    `https://api.le-systeme-solaire.net/rest/bodies/:${query}`
  );
  return response.data;
};

//eslint-disable-next-line
export default { search };

//bodies API call
const bodies = null;

const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.astronomyapi.com/api/v2/bodies");
xhr.setRequestHeader("Authorization", process.env.APP_HASHED);

xhr.send(bodies);

//star chart call
const starCharts =
  '{"style":"default","observer":{"latitude":null,"longitude":null,"date":"2023-04-06"},"view":{"type":"constellation","parameters":{"constellation":"ori"}}}';

const xhr2 = new XMLHttpRequest();
// xhr.withCredentials = true;

xhr2.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr2.open("POST", "https://api.astronomyapi.com/api/v2/studio/star-chart");
xhr2.setRequestHeader("Authorization", process.env.APP_HASHED);

xhr2.send(starCharts);
