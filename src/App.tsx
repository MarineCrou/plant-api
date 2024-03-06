import React from "react";
console.log(import.meta.env.VITE_API_KEY);

function App() {
  return <h1>Hello world</h1>;
  const fetch = require("node-fetch");

  (async () => {
    const response = await fetch(
      "https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN"
    );
    const json = await response.json();
    console.log(json);
  })();
}

export default App;
