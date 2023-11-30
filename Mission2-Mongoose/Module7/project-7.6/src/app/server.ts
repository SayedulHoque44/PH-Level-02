import { Server } from "http";
import app from "./app";
const port = 3000;

// type declar
let server: Server;

// ekhane amder je connectivity dorkar hbe segula ekhane likhbo
async function bootstrap() {
  // our server
  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

bootstrap();
