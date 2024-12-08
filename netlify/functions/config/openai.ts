import OpenAI from 'openai';

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export const CHAT_CONFIG = {
  model: "gpt-3.5-turbo",
  max_tokens: 150,
  system_message: "You are a helpful customer service assistant for a web development and marketing company. Respond in Hungarian language. Keep responses concise and professional."
} as const;