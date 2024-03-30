import { openAIService } from "../../../../../services/OpenAIService";

export default defineEventHandler(async (event) => {
  const { threadId } = getRouterParams(event);
  const { openAiApiKey } = useRuntimeConfig();
  return await openAIService.listMessages(openAiApiKey, threadId);
});
