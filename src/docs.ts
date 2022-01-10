import swaggerJSDoc from "swagger-jsdoc";

const Docs: swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Swagger Test",
      description: "Hello :)",
      contact: {
        email: "formegusto@gmail.com",
      },
    },
    basePath: "/",
    servers: [
      {
        url: "http://localhost: 8000",
      },
    ],
  },
  apis: ["./dist/models/*.js", "./dist/routes/*.js"],
};

export default swaggerJSDoc(Docs);
