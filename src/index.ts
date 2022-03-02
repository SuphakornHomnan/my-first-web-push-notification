import express from "express";
import notificationRoute from "./notification/controller/web.push.controller";
import webpushConfig from "./notification/config/webpush.config";

async function bootstrap() {
  const app = express();
  app.use(express.json());
  webpushConfig();
  app.use("/notification", notificationRoute);
  app.get("/", (req, res) => {
    res.send("Hello notification");
  });
  app.listen(4000, () => console.log("Service is lauching..."));
}

bootstrap();
