import swaggerJSDoc from "swagger-jsdoc";

const Docs: swaggerJSDoc.Options = {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "Swagger Test",
    description: "Hello :)",
    contact: {
      email: "formegusto@gmail.com",
    },
  },

  schemes: ["http"],
  host: "localhost:8000",
  basePath: "/api",
  paths: {
    "/todos": {
      get: {
        summary: "나는 요약",
        description: "나는 설명",
        produces: ["application/json"],
        parameters: [],
        responses: {
          "200": {
            description: "성공한거다",
            schema: {},
          },
        },
      },
    },
  },
};

export default Docs;
