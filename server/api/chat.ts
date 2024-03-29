import type { Peer } from "crossws";
import { randomUUID } from "crypto";
import { getQuery } from "ufo";

import { openAIService } from "../services/OpenAIService";

// 1. Endpoint to retrieve threads
// 2. Endpoint to create a thread
// 3. Endpoint to delete a thread
// 4. Enpoint page show the messages of the thread
// 5. And have the websocket to talk to the thread
// ---- USERPROFILE ----
// 6. Authentication
// 7. Authorization
// 8. User page to store API keys
// 9. Saving API key to database

let thread;
export default defineWebSocketHandler({
  async open(peer) {
    console.log(`[ws] open ${peer}`);
    getAssistant(peer);

    // Threads are like conversation, we should probably create an endpoint to create a thread
    // and each conversation will be held on a specific route with a specific thread id
    // e.g.: /chat/:assistantId/:threadId
    thread = await openAIService.createThread(useAppConfig().openAiApiKey);

    // TODO: Check how subscribe exactly works
    // it should probably be a combination of assistantId and threadId
    peer.subscribe(thread!.id);
  },
  async message(peer, message) {
    const myMessage: { _id: string; message: string } = {
      _id: randomUUID(),
      message: "",
    };
    await openAIService.createMessage(
      useAppConfig().openAiApiKey,
      thread!.id,
      message.text(),
    );
    openAIService
      .createAndStreamRun(
        useAppConfig().openAiApiKey,
        thread!.id,
        getAssistant(peer),
      )
      .on("textDelta", (textDelta) => {
        myMessage.message += textDelta.value;
        peer.send(myMessage);
      });
  },

  close(peer) {
    console.log(`[ws] close ${peer}`);
  },

  error(peer, error) {
    console.log(`[ws] error ${peer}`, error);
  },
});
function getAssistant(peer: Peer) {
  const query = getQuery(peer.url);
  return query.assistantId as string;
}
