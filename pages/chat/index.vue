<template>
  <div
    v-for="[key, value] in messages"
    :key="key"
  >
    <div>{{ key }}</div>
    <div>
      {{ value }}
    </div>
  </div>
  <div>
    <form @submit.prevent="send">
      <textarea v-model="message"></textarea>
      <input type="submit" />
    </form>
  </div>
</template>
<script setup lang="ts">
// TODO: Implement Routing

const { data: assistants } = await useFetch("/api/assistants");

let ws: WebSocket | null = null;
const message = ref<string>("");
const messages = ref<Map<string, string>>(new Map());

const log = (user: string, ...args: string[]) => {
  console.log("[ws]", user, ...args);

  /* messages.value.push({
      id: 0,
      message: args.join(' '),
      user: user,
      created_at: new Date().toLocaleString(),
    }); */
  scroll();
};
const connect = async () => {
  const isSecure = location.protocol === "https:";
  const url =
    (isSecure ? "wss://" : "ws://") +
    location.host +
    "/api/chat?assistantId=" +
    assistants.value?.[0]?.id;
  if (ws) {
    log("ws", "Closing previous connection before reconnecting...");
    ws.close();
    clear();
  }

  log("ws", "Connecting to", url, "...");
  messages.value.set("system", "Connecting to " + url + "...");
  ws = new WebSocket(url);

  ws?.addEventListener("message", (event) => {
    const { message = "", _id = "" } = event.data.startsWith("{")
      ? JSON.parse(event.data)
      : { message: event.data };

    messages.value.set(_id, message);
  });

  await new Promise((resolve) => ws!.addEventListener("open", resolve));
  messages.value.set("system2", "Connected!");
};

const clear = () => {
  // messages.value.splice(0, messages.value.length);
  log("system", "previous messages cleared");
};

const scroll = () => {
  nextTick(() => {
    console.log("scrooling");
    window.scrollTo(0, document.body.scrollHeight + 100);
  });
  console.log(`scrolled, ws: ${ws}, messages: ${messages.value.size}`);
};
console.log("after scroll,ws: ${ws}, messages: ${messages.value.size}");

const send = () => {
  console.log("sending message...");
  if (message.value) {
    ws!.send(message.value);
  }
  message.value = "";
};

onMounted(async () => {
  connect();
  scroll();
});
onBeforeUnmount(() => {
  console.log("disconnecting...");
  ws?.close();
});
</script>
