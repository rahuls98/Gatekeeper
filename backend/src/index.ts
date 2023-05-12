import express, { Express, Request, Response, Router } from "express";
const authenticationRoutes:Router = require('./routes/authentication');
const authorizationRoutes:Router = require('./routes/authorization');
const rolesRouters:Router = require('./routes/roles');
const port:Number = 8000;

const server: Express = express();

server.use("/authentication", authenticationRoutes);
server.use("/authorization", authorizationRoutes);
server.use("/roles", rolesRouters);

server.get("/", (req: Request, res: Response) => {
    res.status(200).send("🔐 Gatekeeper is live!")
});

server.listen(port, () => {
    console.log(`🚀 Server listening on port ${port}`)
});
