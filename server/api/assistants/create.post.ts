import { openAIService } from '../../services/OpenAIService';

export default defineEventHandler(async (event) => {
  const { openAiApiKey } = useRuntimeConfig();
  const body = await readBody(event);
  body.tools = JSON.parse(body.tools);
  body.file_ids = JSON.parse(body.file_ids);

  return await openAIService.createAssistant(openAiApiKey, body);
});
