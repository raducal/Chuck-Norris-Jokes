const mainBtn = document.getElementById("mainBtn");
const result = document.getElementById("result");
const img = document.getElementById("img");

mainBtn.addEventListener("click", function() {
  const ajax = new XMLHttpRequest();

  const url = "https://api.chucknorris.io/jokes/random";

  ajax.open("GET", url, true); //true for async, false for sync

  ajax.onload = function() {
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      console.log(data);
      const { icon_url: image, value: joke } = data;
      result.textContent = joke;
      img.src = image;
    }
  };

  ajax.onerror = function() {
    console.log("there was an error");
  };

  ajax.send();
});
