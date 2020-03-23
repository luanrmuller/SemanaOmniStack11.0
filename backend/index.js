const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Listen port 3000");
});

app.get("/", (request, response) => {
  return response.json({ evento: "Semana OmniStack 11.0", aluno: "Luan Muller" });
});