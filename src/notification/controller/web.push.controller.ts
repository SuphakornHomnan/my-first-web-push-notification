import { Router } from "express";
import { SubscribeService } from "../services/subscribe.notice";

const router: Router = Router();

router.post("/subscribe", SubscribeService);

export default router;
