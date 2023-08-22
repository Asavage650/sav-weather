const app = {
  init: () => {
    document
      .getElementById("btnGet")
      .addEventListener("click", app.fetchWeather);
    document
      .getElementById("btnCurrent")
      .addEventListener("click", app.getLocation);
  },
};
app.init();
