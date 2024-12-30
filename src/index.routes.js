import { Router } from "express";
import sendNotificationRote from "./sendnotifications/send.routes.js";
const router = Router();

router.use("/noti", sendNotificationRote);

export default router;
