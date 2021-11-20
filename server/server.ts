import express from "express";
import helmet from "helmet";
import cors from "cors";

const app = express();

// Use Helmet to protect against common web vulnerabilities
app.use(helmet());

// Setup CORS (Cross Origin Resource Sharing)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use(cors());

app.listen(4201, "127.0.0.1", () => {
    console.log("Server is now listening on 4201")
})
