import express from "express";
import cors from "cors";
import notificationRoute from "./notification/controller/web.push.controller";
import webpushConfig from "./notification/config/webpush.config";

async function bootstrap() {
  const app = express();
  app.use(express.json());
  app.use(
    cors({
      origin: "*",
    })
  );
  webpushConfig();
  app.use("/notification", notificationRoute);
  app.listen(4000, () => console.log("Service is lauching..."));
}

bootstrap();
