import express from "express";
import notificationRoute from "./notification/controller/web.push.controller";
import cors from "cors";

async function bootstrap() {
  const app = express();
  app.use(express.json());

  app.use(
    cors({
      origin: "127.0.0.1",
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
