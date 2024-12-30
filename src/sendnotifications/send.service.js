import axios from "axios";
import discordService from "../utils/discord.js";

export default class sendNotification {
  async sendNotification(payload) {
    const message = payload.message
    try {
      const response = await new discordService().sendNotification(message)

      return response;
    } catch (error) {
      console.error("เกิดข้อผิดพลาด:", error);
    }
  }
}
