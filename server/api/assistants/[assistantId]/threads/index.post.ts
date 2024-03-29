import { openAIService } from '../../../../services/OpenAIService';

export default defineEventHandler(async () => {
  const { openAiApiKey } = useRuntimeConfig();
  return openAIService.createThread(openAiApiKey);
});
