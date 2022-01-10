import express from "express";
import swaggerUi from "swagger-ui-express";
import Docs from "./docs";
import Routes from "./routes";

class App {
  server: express.Application;

  constructor() {
    this.server = express();
    this.SettingMW();
    this.Router();
    this.Start();
  }

  SettingMW() {}
  Router() {
    this.server.use("/", Routes);
    this.server.use(
      "/api/docs",
      swaggerUi.serve,
      swaggerUi.setup(Docs, {
        explorer: true,
      })
    );
  }
  Start() {
    const PORT = process.env.PORT || "80";
    this.server.listen(PORT, () => {
      console.log(`[Express] Listen to ${PORT} :)`);
    });
  }
}

export default App;
