import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("data.json");
const middleware = jsonServer.defaults();
const port = 8080;

server.use(middleware);
server.use(router);

server.listen(port);