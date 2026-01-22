import { GoogleGenAI } from "@google/genai";
import { M_AI_SYSTEM_INSTRUCTION } from "../constants";

// Initialize Gemini
// Note: In a real production app, ensure the key is restricted or use a backend proxy.
// We assume process.env.API_KEY is available.
const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (message: string, history: {role: string, parts: {text: string}[]}[] = []): Promise<string> => {
  if (!apiKey) {
    return "I'm currently disconnected from the neural network (API Key missing). Please check back later! 🌸";
  }

  try {
    const model = ai.models.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      systemInstruction: M_AI_SYSTEM_INSTRUCTION
    });

    const chat = model.startChat({
      history: history,
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error communicating with M-AI:", error);
    return "I seem to be having a glitch in my aesthetic circuits. Please try again gently. 💔";
  }
};
