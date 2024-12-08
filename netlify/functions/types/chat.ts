export interface ChatMessage {
  message: string;
}

export interface ChatResponse {
  reply: string;
}

export interface ChatError {
  error: string;
  details?: string;
}

export interface ErrorConfig {
  message: string;
  statusCode: number;
}