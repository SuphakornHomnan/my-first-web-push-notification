import { Request, Response } from "express";
import webPush from "web-push";
import configWebPush from "../config/webpush.config";

configWebPush();

enum STATUS {
  OK = 200,
}

export const SubscribeService = async (req: Request, res: Response) => {
  try {
    const subscription: any = req.body;

    let i = 0;

    const payload = JSON.stringify({ title: `Count!`, body: i++ });
    await webPush.sendNotification(subscription, payload);

    return res.sendStatus(STATUS.OK);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      status: 500,
    });
  }
};
