const express = require("express");
const router = require("./src/Routes/router");
const sequelize = require("./src/Config/config");
const app = express();

app.use(express.json());
app.use("/api", router);

sequelize
  .authenticate()
  .then(async () => {
    console.log("Conexão estabelecida com sucesso");
    await sequelize.sync();
  })
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log("------------");
      console.log("  Rodando   ");
      console.log("------------");
    });
  })
  .catch((error) => {
    console.log("Erro ao se conectar:", error);
  });

app.get("/HealthCheck", (req, res) => {
  return res.status(200).json({
    msg: "Funcionando",
    alive: true,
  });
});
