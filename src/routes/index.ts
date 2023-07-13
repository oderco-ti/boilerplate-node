import { Server } from "@hapi/hapi";
import { message } from "../models/messageResponse";

const defineAllRoutes = (server: Server) => {
  server.route({
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return h.response(message(404, "404 Error! Rota não encontrada."));
    },
  });
};

export { defineAllRoutes };
