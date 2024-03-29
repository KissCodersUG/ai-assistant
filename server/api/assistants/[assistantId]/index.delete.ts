import { openAIService } from "../../../services/OpenAIService";

export default defineEventHandler(async (event) => {
  const { assistantId } = getRouterParams(event);
  const { openAiApiKey } = useRuntimeConfig();
  return openAIService.deleteAssistant(openAiApiKey, assistantId);
});
