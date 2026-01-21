
import { GoogleGenAI, Type } from "@google/genai";
import { ContentType } from "../types";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const translateText = async (text: string, targetLanguage: string) => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Translate the following text into ${targetLanguage}. Return ONLY the translated text without any explanations or quotes: "${text}"`,
  });
  
  return response.text?.trim() || "Translation failed.";
};

export const generateRandomContent = async (type: ContentType) => {
  const ai = getAIClient();
  const prompts = {
    [ContentType.JOKE]: "Tell me a funny joke about programming or technology.",
    [ContentType.FACT]: "Tell me an interesting and mind-blowing scientific fact.",
    [ContentType.QUOTE]: "Give me an inspirational quote about innovation and future.",
    [ContentType.POEM]: "Write a short 4-line poem about artificial intelligence."
  };

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `${prompts[type]} Return only the content itself.`,
  });

  return response.text?.trim() || "Failed to generate content.";
};
