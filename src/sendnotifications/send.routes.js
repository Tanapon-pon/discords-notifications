import { Router } from "express";
import { testNotificationsController } from "./send.controller.js";

const router = Router(); // ใช้ Router แทน

router.post("/test-noti", testNotificationsController);

export default router;
