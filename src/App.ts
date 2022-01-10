import express from "express";
import swaggerUi from "swagger-ui-express";
import Docs from "./docs";

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
    this.server.use("/api/docs", swaggerUi.serve, swaggerUi.setup(Docs));
  }
  Start() {
    const PORT = process.env.PORT || "80";
    this.server.listen(PORT, () => {
      console.log(`[Express] Listen to ${PORT} :)`);
    });
  }
}

export default App;
