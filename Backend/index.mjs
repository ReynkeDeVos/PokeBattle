import express from "express";
import cors from "cors";

const app = express();
const PORT = 8000;

// 3-rd middlewares
app.use(express.static("../Frontend/index.html"));
app.use(express.json()); // body-parser for POST-REQUESTS w/ JSON-Payloads
app.use(cors()); // Cross Origin Ressource Sharing
// app.use(cors({ origin: 'https://irgendwas.netlify.app' }));

// mw's
// app.use(getOnlyMiddleware);

// ROUTES

app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
