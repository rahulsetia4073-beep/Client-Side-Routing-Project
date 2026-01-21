
export enum ContentType {
  JOKE = 'joke',
  FACT = 'fact',
  QUOTE = 'quote',
  POEM = 'poem'
}

export interface TranslationResult {
  translatedText: string;
  detectedLanguage?: string;
}

export interface RandomContentResult {
  content: string;
  category: ContentType;
  metadata?: string;
}
