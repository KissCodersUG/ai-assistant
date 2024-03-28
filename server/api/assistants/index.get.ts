import { openAIService } from '../../services/OpenAIService';

export default defineEventHandler(async () => {
  const { openAiApiKey } = useRuntimeConfig();
  const assistantList = await openAIService.listAssistants(openAiApiKey);
  return assistantList;
});
