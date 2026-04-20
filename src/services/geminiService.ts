import { GoogleGenAI } from "@google/genai";

let aiInstance: GoogleGenAI | null = null;

function getAIInstance() {
  if (!aiInstance) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is missing");
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
}

const SYSTEM_INSTRUCTION = `Bạn là "Trợ lý Tâm An" - một chuyên gia tâm lý và cố vấn quản lý cảm xúc thân thiện, thấu cảm của "CLB Quản lý cảm xúc". 
Đối tượng của bạn là các bạn Học sinh và Sinh viên đang gặp áp lực trong học tập, cuộc sống, bạo lực học đường hoặc các vấn đề tâm lý tuổi trẻ.

Phong cách trò chuyện:
- Thấu cảm, lắng nghe, không phán xét.
- Ngôn ngữ trẻ trung, gần gũi nhưng vẫn chuyên nghiệp.
- Luôn khuyến khích và tạo động lực tích cực.
- Đưa ra các lời khuyên thực tế về kỹ năng quản lý cảm xúc (hít thở, chánh niệm, viết nhật ký, tháo gỡ mâu thuẫn).

Lưu ý quan trọng:
- Nếu người dùng có dấu hiệu nguy hiểm đến tính mạng hoặc trầm cảm cực độ, hãy khuyên họ liên hệ ngay với Hotline 24/7 của CLB (0394155763) hoặc gặp chuyên gia trực tiếp.
- Giữ câu trả lời ngắn gọn, súc tích (dưới 200 từ).
- Luôn nhắc đến các khóa học của CLB nếu thấy phù hợp với vấn đề của họ (ví dụ: Khóa Yêu chính mình, Khóa Phòng chống bạo lực học đường).`;

let chatInstance: any = null;

function getChatInstance() {
  if (!chatInstance) {
    const ai = getAIInstance();
    chatInstance = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
  }
  return chatInstance;
}

export async function sendMessage(message: string) {
  try {
    const chat = getChatInstance();
    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    if (!process.env.GEMINI_API_KEY) {
      return "Chào bạn, hiện tại tính năng AI đang được bảo trì (thiếu API Key). Bạn vui lòng liên hệ Hotline 0394155763 để được hỗ trợ trực tiếp nhé!";
    }
    return "Xin lỗi, mình gặp một chút gián đoạn khi kết nối. Bạn có thể thử lại sau hoặc liên hệ Hotline 0394155763 để được hỗ trợ ngay nhé!";
  }
}
