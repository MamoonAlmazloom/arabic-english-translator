import { GoogleGenerativeAI } from "@google/generative-ai";

export const translateText = async (text) => {
  if (!text.trim()) {
    throw new Error("Please enter some text to translate");
  }

  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `Translate the following text. If it's in English, translate to Arabic. If it's in Arabic, translate to English. Only provide the translation, no explanations:\n\n${text}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
};
