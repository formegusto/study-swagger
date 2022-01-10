import { Router } from "express";

const Routes = Router();

/**
 * @swagger
 * /:
 *   get:
 *     tags: [
 *      "swagger"
 *     ]
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 */
Routes.get("/", (req, res) => {
  return res.send("<h1>Hello :)</h1>");
});

Routes.get("/test", (req, res) => {
  return res.send("<h2>Hello Test :)</h2>");
});

export default Routes;
