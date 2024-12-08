import { Handler } from '@netlify/functions';
import { openai, CHAT_CONFIG } from './config/openai';
import { ChatMessage, ChatResponse, ChatError } from './types/chat';
import { handleChatError, CORS_HEADERS } from './utils/error-handler';

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const { message } = JSON.parse(event.body || '{}') as ChatMessage;

    if (!message) {
      return {
        statusCode: 400,
        headers: CORS_HEADERS,
        body: JSON.stringify({ error: 'Message is required' })
      };
    }

    const completion = await openai.chat.completions.create({
      model: CHAT_CONFIG.model,
      messages: [
        {
          role: "system",
          content: CHAT_CONFIG.system_message
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: CHAT_CONFIG.max_tokens
    });

    const response: ChatResponse = {
      reply: completion.choices[0].message.content || ''
    };

    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify(response)
    };
  } catch (error: any) {
    const { message, statusCode } = handleChatError(error);
    
    const errorResponse: ChatError = {
      error: message,
      details: error.message
    };

    return {
      statusCode,
      headers: CORS_HEADERS,
      body: JSON.stringify(errorResponse)
    };
  }
};

export { handler };