import express from "express";
import notificationRoute from "./notification/controller/web.push.controller";
import webpushConfig from "./notification/config/webpush.config";
import cors from "cors";

async function bootstrap() {
  const app = express();
  app.use(express.json());
  webpushConfig();
  app.use(
    cors({
      origin: "*",
      methods: "GET,POST,PATCH,PUT,DELETE,OPTIONS",
      preflightContinue: false,
      optionsSuccessStatus: 200,
    })
  );
  app.use("/notification", notificationRoute);
  app.get("/", (req, res) => {
    res.send("Hello notification");
  });
  app.listen(process.env.PORT, () => console.log("Service is lauching..."));
}

bootstrap();
