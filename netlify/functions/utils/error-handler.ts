import { ErrorConfig } from '../types/chat';

export function handleChatError(error: any): ErrorConfig {
  console.error('Detailed error:', error);

  if (!process.env.OPENAI_API_KEY) {
    return {
      message: 'OpenAI API key is not configured',
      statusCode: 401
    };
  }

  if (error.code === 'invalid_api_key') {
    return {
      message: 'Invalid API key configuration',
      statusCode: 401
    };
  }

  if (error.code === 'insufficient_quota') {
    return {
      message: 'OpenAI API quota exceeded',
      statusCode: 402
    };
  }

  return {
    message: 'Internal Server Error',
    statusCode: 500
  };
}

export const CORS_HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST'
};