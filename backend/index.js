const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const Singleton = require("./static/singleton");
const { default: criarConta } = require("./src/cadastro");
// Importantando a classe Singleton

const app = express();
app.use(express.json());
app.use(cors());

// Configuração da conexão com o banco de dados
const db = mysql.createConnection({
  host: "localhost", // Endereço do servidor MySQL
  port: 3306, // Porta do MySQL
  user: "root", // Usuário do MySQL
  password: "202415", // Senha do MySQL
  database: "bd_cafeteria", // Nome do banco de dados
});

// Conecta ao banco de dados e armazenandoo Singleton
db.connect((err) => {
  if (err) {
    console.log("Erro ao conectar ao banco:", err);
    return;
  }
  console.log("Conexão ao banco de dados bem-sucedida!");
});
const instanceDb = new Singleton();
instanceDb.setvalue(db);

// Rota de teste para verificar o servidor
app.get("/", (req, res) => {
  res.send("Servidor está funcionando!");
});

app.post("/criarConta", (req, res) => {
  db.query(
    `insert into pessoa(NOME,IDADE,SEXO,usuario,senha)VALUES("${req.body.nome}",${req.body.idade},"${req.body.sexo}","${req.body.usuario}","${req.body.senha}");`,
    /* `insert into clientes(TELEFONE,EMAIL,CODPESSOA)VALUES("${req.body.telefone}","${req.body.email}");`, */

    (error, resultado) => {
      if (error) {
        console.log(error);
      }

      const id = resultado.insertId;
      db.query(
        `insert into clientes(TELEFONE,EMAIL,CODPESSOA)VALUES("${req.body.telefone}","${req.body.email}","${id}");`,

        (error, resultado) => {
          if (error) {
            console.log(error);
          }

          console.log(resultado.insertId);
        }
      );
    }
  );
  res.send("");
});

app.post("/fazerLogin", (req, res) => {
  const { usuario, senha } = req.body;

  // Validação básica
  if (!usuario || !senha) {
    return res.status(400).send({ error: "Usuário e senha são obrigatórios!" });
  }

  // Query segura com placeholders
  const query = "SELECT usuario FROM pessoa WHERE usuario = ? AND senha = ?";
  db.query(query, [usuario, senha], (error, resultado) => {
    if (error) {
      console.error("Erro na query SQL:", error);
      return res
        .status(500)
        .send({ error: "Erro no servidor ao consultar o banco de dados." });
    }

    // Verifica se o usuário foi encontrado
    if (resultado.length > 0) {
      return res.status(200).send({ message: "Login bem-sucedido!" });
    }

    // Caso nenhum usuário seja encontrado
    return res.status(404).send({ error: "Usuário ou senha inválidos." });
  });
});

// Inicializa o servidor
const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
