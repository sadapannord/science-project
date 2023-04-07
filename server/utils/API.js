//from API site
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.astronomyapi.com/api/v2/bodies");
xhr.setRequestHeader("Authorization", process.env.APP_HASHED);

xhr.send(data);
