import webpush from "web-push";
import { config } from "dotenv";
config();

export default (): void => {
  webpush.setVapidDetails(
    `mailto:${process.env.YOUR_EMAIL}`,
    process.env.PUBLIC_VAPID_KEY,
    process.env.PRIVATE_VAPID_KEY
  );
};
