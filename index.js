const express = require("express");
const app = express();
const produtoRota = require("./rotas/produtos")

app.use(express.json())

app.use('/static', express.static('public'))

app.use("/produto", produtoRota)

app.get("/", (req, res) => {
  res.json({ msg: "Hello from Express!" });
});

app.listen(8080, () => {
  console.log(`iniciando no ambiente ${process.env.NODE_ENV}`)
  console.log("Servidor pronto na porta 8080");
});
