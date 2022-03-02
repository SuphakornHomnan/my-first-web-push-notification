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
      origin: "http:localhost:5500",
    })
  );
  app.use("/notification", notificationRoute);
  app.get("/", (req, res) => {
    res.send("Hello notification");
  });
  app.listen(4000, () => console.log("Service is lauching..."));
}

bootstrap();
