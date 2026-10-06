import express from "express";
import cors from "cors";
import { createApi } from "unsplash-js";
import { config } from "./config.js";

const app = express();

app.use(cors());

const unsplash = createApi({
  accessKey: config.unsplashAccessKey,
});

app.get("/api/unsplash", async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({
        erro: "Informe um termo para pesquisa",
      });
    }

    const { data, error } = await unsplash.GET("/search/photos", {
      params: {
        query: {
          query: query,
          page: 1,
          lang: "pt",
          per_page: 10,
        },
      },
    });

    if (error) {
      console.error(error);

      return res.status(500).json({
        erro: error,
      });
    }

    res.json(data.results);
  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      erro: "Erro ao buscar imagens",
    });
  }
});

app.listen(config.port, () => {
  console.log(`Servidor rodando na porta ${config.port}`);
});
