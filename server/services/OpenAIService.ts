import OpenAI from "openai";

class OpenAIService {
  private clients: Map<string, OpenAI>;
  constructor() {
    this.clients = new Map();
  }

  public getClient(apiKey: string): OpenAI {
    if (this.clients.has(apiKey)) {
      return this.clients.get(apiKey)!;
    }
    const client = new OpenAI({ apiKey });
    this.clients.set(apiKey, client);
    return client;
  }

  public createFile(
    apiKey: string,
    file: any,
  ): Promise<OpenAI.Files.FileObject> {
    const client = this.getClient(apiKey);
    return client.files.create({ purpose: "assistants", file });
  }

  public createAssistant(
    apiKey: string,
    options: OpenAI.Beta.Assistants.AssistantCreateParams,
  ): Promise<OpenAI.Beta.Assistants.Assistant> {
    const client = this.getClient(apiKey);
    return client.beta.assistants.create(options);
  }

  public deleteAssistant(
    apiKey: string,
    assistantId: string,
  ): Promise<OpenAI.Beta.Assistants.AssistantDeleted> {
    const client = this.getClient(apiKey);
    return client.beta.assistants.del(assistantId);
  }

  public async listAssistants(
    apiKey: string,
  ): Promise<OpenAI.Beta.Assistants.Assistant[]> {
    const client = this.getClient(apiKey);
    return (await client.beta.assistants.list())?.data;
  }

  public createThread(apiKey: string): Promise<OpenAI.Beta.Threads.Thread> {
    const client = this.getClient(apiKey);
    return client.beta.threads.create();
  }

  public retrieveThread(
    apiKey: string,
    threadId: string,
  ): Promise<OpenAI.Beta.Threads.Thread> {
    const client = this.getClient(apiKey);
    return client.beta.threads.retrieve(threadId);
  }

  public createMessage(apiKey: string, threadId: string, content: string) {
    const client = this.getClient(apiKey);
    return client.beta.threads.messages.create(threadId, {
      role: "user",
      content,
    });
  }

  public listMessages(apiKey: string, threadId: string) {
    const client = this.getClient(apiKey);
    return client.beta.threads.messages.list(threadId);
  }

  public createAndStreamRun(
    apiKey: string,
    threadId: string,
    assistantId: string,
  ) {
    const client = this.getClient(apiKey);
    return client.beta.threads.runs.createAndStream(threadId, {
      assistant_id: assistantId,
    });
  }
}

export const openAIService = new OpenAIService();
