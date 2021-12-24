import express, { Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import path from "path";

// Path to our built Angular application
const APP_LOCATION = path.resolve(__dirname + "/../app/dist/KnownShysters/");

// Create our Express application instance
const app = express();

// Use Helmet to protect against common web vulnerabilities
app.use(helmet({
    // Disable CSP header so we can run external JS: https://helmetjs.github.io/
    // TODO: configure this policy for better security
    contentSecurityPolicy: false,
  }));

// Setup CORS (Cross Origin Resource Sharing)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use(cors());

// Serve static files (Angular App)
app.use(express.static(APP_LOCATION));

app.listen(4201, "127.0.0.1", () => {
    console.log("Server is now listening on 4201")
})

// TODO: add API routing here

// Respond to all other requests with our Angular front-end
app.get('*', (req: Request, res: Response) => {
    res.sendFile(APP_LOCATION+"index.html");
})
