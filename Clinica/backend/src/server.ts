import express from "express";

//criação do server
const app = express();

app.get("/meusagendamentos", () => {
  console.log("ssas");
});

//server está nessa porta
app.listen(3000, () => console.log("Server running..."));
