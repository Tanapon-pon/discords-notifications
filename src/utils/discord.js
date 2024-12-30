import axios from "axios";

export default class discordService {
  webhookUrl = `https://discord.com/api/webhooks/1322843385190420522/KMbQPSWPAlEWKlaIrOkU4ILryY2Q2ElKZH7ZNBbKJoMABIukoddz6SWdR1J2Py-2LIPH`;
  async sendNotification(message) {
    try {
        const data = {
            content:message,
            embeds: [
              {
                title: "📢 การสมัครใหม่!",
                description: "มีผู้สมัครใหม่เข้ามาในระบบ และข้อมูลถูกบันทึกลงฐานข้อมูลเรียบร้อยแล้ว 🎉",
                color: 0x00ff00, // สีเขียว (แสดงถึงความสำเร็จ)
                fields: [
                  { name: "👤 ชื่อผู้สมัคร", value: "นายสมชาย ใจดี", inline: true },
                  { name: "📧 อีเมล", value: "somchai@example.com", inline: true },
                  { name: "📞 เบอร์ติดต่อ", value: "081-234-5678", inline: false },
                  { name: "📅 วันที่สมัคร", value: "29/12/2024", inline: true },
                  { name: "🕒 เวลา", value: "14:35 น.", inline: true },
                ],
                footer: {
                  text: "ระบบแจ้งเตือนการสมัคร | HR-AR System",
                  icon_url: "https://example.com/system-icon.png", // URL รูปไอคอน
                },
                timestamp: new Date().toISOString(), // เพิ่มเวลาอัตโนมัติ
              },
              
            ],
          };
      const response = await axios.post(this.webhookUrl, data);
  

  
      return response.data; // ส่งเฉพาะ data กลับ
    } catch (error) {
      console.error("เกิดข้อผิดพลาด:", error.message);
      throw new Error("การส่งข้อความล้มเหลว");
    }
  }
}
