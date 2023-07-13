import Hapi from "@hapi/hapi";
import { defineLosangoRoute, defineAllRoutes } from "./routes/index";

const server = new Hapi.Server({
  port: process.env.PORT || 3333,
  host: "localhost",
});

async function startServer() {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
}

defineAllRoutes(server);
defineLosangoRoute(server);

startServer();
