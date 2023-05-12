import express, { Express, Request, Response } from "express";
const port = 8000;

const server: Express = express();

server.get("/", (req: Request, res: Response) => {
    res.send("🔐 Gatekeeper is live!")
});

server.listen(port, () => {
    console.log(`🚀 Server listening on port ${port}`)
});
