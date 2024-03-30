import { openAIService } from "../../../../../services/OpenAIService";

export default defineEventHandler(async (event) => {
  const { threadId } = getRouterParams(event);
  const { openAiApiKey } = useRuntimeConfig();
  const assistantList = await openAIService.retrieveThread(
    openAiApiKey,
    threadId,
  );
  return assistantList;
});
